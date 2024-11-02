import React, { FunctionComponent } from "react";
import ProfilIcon from "@components/UI/iconsComponents/icons/profilIcon";
import theme from "@styles/theme";
import { useStarkProfile, type Address } from "@starknet-react/core";
import { decimalToHex } from "@utils/feltService";

type AvatarProps = {
  address: string;
  width?: string;
};

const Avatar: FunctionComponent<AvatarProps> = ({ address, width = "32" }) => {
  const { data: profileData } = useStarkProfile({
    address: (address.startsWith("0x") ? address : decimalToHex(address)) as Address,
  });

  // console.log(profileData,error)

  return (
    <>
      {profileData?.profilePicture ? (
        <img
          src={profileData.profilePicture}
          width={width}
          height={width}
          className="rounded-full"
        />
      ) : (
        <ProfilIcon width={width} color={theme.palette.secondary.main} />
      )}
    </>
  );
};

export default Avatar;
