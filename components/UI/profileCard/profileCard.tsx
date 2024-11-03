import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import styles from "@styles/dashboard.module.css";
import CopyIcon from "@components/UI/iconsComponents/icons/copyIcon";
import { CDNImage } from "@components/cdn/image";
import { useStarkProfile, type Address } from "@starknet-react/core";
import { minifyAddress } from "@utils/stringService";
import trophyIcon from "public/icons/trophy.svg";
import xpIcon from "public/icons/xpBadge.svg";
import useCreationDate from "@hooks/useCreationDate";
import shareSrc from "public/icons/share.svg";
import theme from "@styles/theme";

import ProfilIcon from "../iconsComponents/icons/profilIcon";
import Link from "next/link";
import SocialMediaActions from "../actions/socialmediaActions";
import { getTweetLink } from "@utils/browserService";
import { hexToDecimal } from "@utils/feltService";
import { TEXT_TYPE } from "@constants/typography";
import Typography from "../typography/typography";

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
    <path d="M7 8C7 7.60218 7.15804 7.22064 7.43934 6.93934C7.72064 6.65804 8.10218 6.5 8.5 6.5C8.89782 6.5 9.27936 6.65804 9.56066 6.93934C9.84196 7.22064 10 7.60218 10 8C10 8.39782 9.84196 8.77936 9.56066 9.06066C9.27936 9.34196 8.89782 9.5 8.5 9.5C8.10218 9.5 7.72064 9.34196 7.43934 9.06066C7.15804 8.77936 7 8.39782 7 8Z" fill="#E1DCEA"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M1.83203 8.00033C1.83203 9.09366 2.11536 9.46099 2.68203 10.1977C3.81336 11.667 5.7107 13.3337 8.4987 13.3337C11.2867 13.3337 13.184 11.667 14.3154 10.1977C14.882 9.46166 15.1654 9.09299 15.1654 8.00033C15.1654 6.90699 14.882 6.53966 14.3154 5.80299C13.184 4.33366 11.2867 2.66699 8.4987 2.66699C5.7107 2.66699 3.81336 4.33366 2.68203 5.80299C2.11536 6.54033 1.83203 6.90766 1.83203 8.00033ZM8.4987 5.50033C7.83566 5.50033 7.19977 5.76372 6.73093 6.23256C6.26209 6.7014 5.9987 7.33728 5.9987 8.00033C5.9987 8.66337 6.26209 9.29925 6.73093 9.76809C7.19977 10.2369 7.83566 10.5003 8.4987 10.5003C9.16174 10.5003 9.79762 10.2369 10.2665 9.76809C10.7353 9.29925 10.9987 8.66337 10.9987 8.00033C10.9987 7.33728 10.7353 6.7014 10.2665 6.23256C9.79762 5.76372 9.16174 5.50033 8.4987 5.50033Z" fill="#E1DCEA"/>
  </svg>
);

interface ProfileCardProps {
  rankingData: any; 
  identity: any;
  leaderboardData: any;
  addressOrDomain: string;
  isOwner: boolean;
}

const ProfileCard: FunctionComponent<ProfileCardProps> = ({
  rankingData,
  identity,
  leaderboardData,
  addressOrDomain,
  isOwner,
}) => {
  const [userXp, setUserXp] = useState<number>();
  const sinceDate = useCreationDate(identity);
  const formattedAddress = (identity.owner.startsWith("0x") ? identity.owner : `0x${identity.owner}`) as Address;
  const { data: profileData } = useStarkProfile({ address: formattedAddress });

  const rankFormatter = useCallback((rank: number) => {
    if (rank > 10000) return "+10k";
    if (rank > 5000) return "+5k";
    return rank;
  }, []);

  const computeData = useCallback(() => {
    if (
      rankingData &&
      rankingData?.first_elt_position >= 0 &&
      identity.owner &&
      leaderboardData &&
      leaderboardData?.total_users > 0
    ) {
      const user = rankingData.ranking.find(
        (user) => user.address === hexToDecimal(identity.owner)
      );
      if (user) {
        setUserXp(user.xp);
      }
    }
  }, [rankingData, identity, leaderboardData]);

  useEffect(() => {
    computeData();
  }, [computeData]);

  const shareLink: Url = useMemo(() => {
    return `${getTweetLink(
      `Check out${isOwner ? " my " : " "}Starknet Quest Profile at ${window.location.href} #Starknet #StarknetID`
    )}`;
  }, [isOwner]);

  return (
    <div className={styles.dashboard_profile_card}>
      <div className={styles.left}>
        <div className={styles.profile_picture_div}>
          {profileData?.profilePicture ? (
            <img src={profileData.profilePicture} className="rounded-full" />
          ) : (
            <ProfilIcon width="120" color={theme.palette.secondary.main} />
          )}
        </div>

        <div className="flex flex-col h-full justify-center">
          <Typography type={TEXT_TYPE.BODY_SMALL} color="secondary" className={styles.accountCreationDate}>
            {sinceDate ? `${sinceDate}` : ""}
          </Typography>
          <Typography type={TEXT_TYPE.H2} className={`${styles.profile_name} mt-2`}>
            {identity.domain.domain}
          </Typography>
          <div className={styles.address_div}>
            <div className="flex items-center gap-2">
              <Typography type={TEXT_TYPE.BODY_SMALL} className={`${styles.wallet_amount}
                 font-extrabold`}>
                $2,338.34
              </Typography>
              <EyeIcon />
            </div>
          </div>
          <div className="flex sm:hidden justify-center py-4">
            <SocialMediaActions identity={identity} />
            <Link href={shareLink} target="_blank" rel="noreferrer">
              <div className={styles.right_share_button}>
                <CDNImage
                  src={shareSrc}
                  width={20}
                  height={20}
                  alt="share-icon"
                />
                <Typography type={TEXT_TYPE.BODY_DEFAULT}>Share</Typography>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className="hidden sm:flex">
          <div className={styles.right_top}>
            <div className={styles.right_socials}>
              <SocialMediaActions identity={identity} />
              <Link href={shareLink} target="_blank" rel="noreferrer">
                <div className={styles.right_share_button}>
                  <CDNImage
                    src={shareSrc}
                    width={20}
                    height={20}
                    alt="share-icon"
                  />
                  <Typography type={TEXT_TYPE.BODY_DEFAULT}>Share</Typography>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.right_bottom}>
          {leaderboardData && leaderboardData.total_users > 0 ? (
            <div className={styles.right_bottom_content}>
              <CDNImage
                src={trophyIcon}
                priority
                width={25}
                height={25}
                alt="trophy icon"
              />
              <Typography
                type={TEXT_TYPE.BODY_SMALL}
                className={styles.statsText}
              >
                {leaderboardData.position
                  ? rankFormatter(leaderboardData.position)
                  : "NA"}
              </Typography>
            </div>
          ) : null}
          {userXp !== undefined ? (
            <div className={styles.right_bottom_content}>
              <CDNImage
                src={xpIcon}
                priority
                width={30}
                height={30}
                alt="xp badge"
              />
              <Typography
                type={TEXT_TYPE.BODY_SMALL}
                className={styles.statsText}
              >
                {userXp ?? "0"}
              </Typography>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
