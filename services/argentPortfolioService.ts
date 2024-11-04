import {
  ArgentDapp,
  ArgentDappMap,
  ArgentUserDapp,
  ArgentToken,
  ArgentTokenValue,
  ArgentTokenMap,
  ArgentUserToken,
} from "types/backTypes";

const API_BASE = "https://cloud.argent-api.com";
const API_VERSION = "v1";
const API_HEADERS = {
  "argent-client": "portfolio",
  "argent-network": "mainnet",
  "argent-version": "1.4.3",
};

const DEFAULT_MAX_RETRIES = 3;
const DEFAULT_INITIAL_DELAY = 2000; // in milliseconds
const DEFAULT_MAX_DELAY = 10000; // Cap maximum delay at 10 seconds
const DEFAULT_BACKOFF_FACTOR = 2;

const fetchData = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await fetch(endpoint, { headers: API_HEADERS });
    if (!response.ok) {
      throw new Error(
        `Error ${response.status}: ${await response.text()}`
      );
    }
    return await response.json();
  } catch (err) {
    console.log("Error fetching data from Argent API", err);
    throw err;
  }
};

const fetchDataWithRetry = async <T>(
  endpoint: string,
  options?: {
    maxRetries?: number;
    initialDelay?: number;
    maxDelay?: number;
    backoffFactor?: number;
    filterErrorRetryable?: (error: Error) => boolean;
  }
): Promise<T> => {
  const maxRetries = options?.maxRetries ?? DEFAULT_MAX_RETRIES;
  const initialDelay = options?.initialDelay ?? DEFAULT_INITIAL_DELAY;
  const maxDelay = options?.maxDelay ?? DEFAULT_MAX_DELAY;
  const backoffFactor = options?.backoffFactor ?? DEFAULT_BACKOFF_FACTOR;
  const filterErrorRetryable = options?.filterErrorRetryable ?? (() => true);
  let retries = 0;
  let delay = initialDelay;
  let lastError: Error = new Error('No request attempted');

  while (retries <= maxRetries) {
    try {
      return await fetchData<T>(endpoint);
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));

      if (!filterErrorRetryable(lastError)) {
        throw lastError;
      }

      if (retries === maxRetries) {
        break;
      }

      await new Promise((resolve) => setTimeout(resolve, delay));
      delay = Math.min(delay * backoffFactor, maxDelay); // Cap the delay
      retries++;
    }
  }

  throw new Error(
    `Failed after ${maxRetries} retries. Endpoint: ${endpoint}. Error: ${lastError.message}`
  );
};

export const fetchDapps = async () => {
  const data = await fetchDataWithRetry<ArgentDapp[]>(`${API_BASE}/${API_VERSION}/tokens/dapps?chain=starknet`);
  return Object.fromEntries(data.map((dapp) => [dapp.dappId, dapp])) as ArgentDappMap;
};

export const fetchTokens = async () => {
  const data = await fetchDataWithRetry<{ tokens: ArgentToken[] }>(`${API_BASE}/${API_VERSION}/tokens/info?chain=starknet`);
  return Object.fromEntries(data.tokens.map((token) => [token.address, token])) as ArgentTokenMap;
};

export const fetchUserTokens = async (walletAddress: string) => {
  const data = await fetchDataWithRetry<{ balances: ArgentUserToken[], status: string }>(`${API_BASE}/${API_VERSION}/activity/starknet/mainnet/account/${walletAddress}/balance`);
  return data.balances;
};

export const fetchUserDapps = async (walletAddress: string) => {
  const data = await fetchDataWithRetry<{ dapps: ArgentUserDapp[] }>(`${API_BASE}/${API_VERSION}/tokens/defi/decomposition/${walletAddress}?chain=starknet`);
  return data.dapps;
};

export const calculateTokenPrice = async (
  tokenAddress: string,
  tokenAmount: string,
  currency: "USD" | "EUR" | "GBP" = "USD"
) => {
  let data: ArgentTokenValue;
  try {
    data = await fetchDataWithRetry<ArgentTokenValue>(
      `${API_BASE}/${API_VERSION}/tokens/prices/${tokenAddress}?chain=starknet&currency=${currency}`,
      {
        filterErrorRetryable: (error) => !error.message.includes('No price for token')
      }
    );
  } catch (err) {
    if (err instanceof Error && err.message.includes('No price for token')) {
      return 0;
    }
    throw err;
  }
  try {
    return Number(tokenAmount) * Number(data.ccyValue);
  } catch (err) {
    console.log("Error while calculating token price", err);
    throw err;
  }
};
