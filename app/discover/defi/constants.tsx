import React from "react";

interface DefiConcept {
  title: string;
  description: string;
  icon: JSX.Element;
}

export const DEFI_CONCEPTS: DefiConcept[] = [
  {
    title: "Provide liquidity",
    description: "Add token pairs to pools and earn fees from trades",
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-500/10">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="[concept] icon"
        >
          <path
            d="M10 2L3 6V14L10 18L17 14V6L10 2Z"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
  },
  {
    title: "Stake",
    description: "Lock tokens to earn passive rewards and voting rights",
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-orange-500/10">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="[concept] icon"
        >
          <circle cx="10" cy="10" r="8" stroke="#F97316" strokeWidth="2" />
        </svg>
      </div>
    ),
  },
  {
    title: "Yield Farming",
    description: "Earn additional tokens by participating in DeFi protocols",
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-green-500/10">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="[concept] icon"
        >
          <path
            d="M2 10L6 6M6 6L10 2L14 6M6 6V18M14 6L18 10M14 6V18"
            stroke="#22C55E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
  },
  {
    title: "Supply",
    description: "Deposit assets into a protocol to earn yield",
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-cyan-500/10">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="[concept] icon"
        >
          <path
            d="M17 6H3M12 10H3M12 14H3"
            stroke="#06B6D4"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
  },
  {
    title: "Lend & Borrow",
    description: "Supply assets to earn interest or borrow against collateral",
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-yellow-500/10">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="[concept] icon"
        >
          <path
            d="M2 10H18M2 10V16H18V10M2 10V4H18V10"
            stroke="#EAB308"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
  },
  {
    title: "Collateral",
    description: "Assets deposited as security for borrowing",
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-indigo-500/10">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="[concept] icon"
        >
          <path
            d="M4 9V6C4 3.79086 5.79086 2 8 2H12C14.2091 2 16 3.79086 16 6V9M4 9H16M4 9V16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V9"
            stroke="#6366F1"
            strokeWidth="2"
          />
        </svg>
      </div>
    ),
  },
  {
    title: "Impermanent Loss",
    description: "Potential loss when providing liquidity compared to holding",
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-red-500/10">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="[concept] icon"
        >
          <path
            d="M18 6L10 14L6 10L2 14M18 6H14M18 6V10"
            stroke="#EF4444"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
  },
  {
    title: "TVL",
    description: "Total value of assets deposited in a protocol",
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-500/10">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="[concept] icon"
        >
          <path
            d="M2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
  },
  {
    title: "APR",
    description: "Simple interest rate earned over one year",
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-green-500/10">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="[concept] icon"
        >
          <path
            d="M2 18L18 2M2 2L18 18"
            stroke="#22C55E"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
  },
  {
    title: "APY",
    description: "Compound interest rate earned over one year",
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-teal-500/10">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="[concept] icon"
        >
          <path
            d="M2 18L18 2M2 10L10 2L18 10L10 18L2 10Z"
            stroke="#14B8A6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
  },
  {
    title: "Swap",
    description: "Exchange one token for another at market price",
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-purple-500/10">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="[concept] icon"
        >
          <path
            d="M2 5H18M2 5L5 2M2 5L5 8M18 15H2M18 15L15 12M18 15L15 18"
            stroke="#A855F7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
  },
  {
    title: "Bridge",
    description: "Transfer assets between different blockchains",
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-yellow-500/10">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="[concept] icon"
        >
          <path
            d="M4 10H16M4 10V18M4 10V2M16 10V18M16 10V2M2 2H18M2 18H18"
            stroke="#EAB308"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
  },
];
