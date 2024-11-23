import React from 'react';
import Typography from "@components/UI/typography/typography";
import { TEXT_TYPE } from "@constants/typography";

type DeFiConceptCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const DeFiConceptCard = ({ title, description, icon }: DeFiConceptCardProps) => {
  return (
    <div className="bg-[#1A1B1F] rounded-xl p-6">
      <div className="mb-3">
        {icon}
      </div>
      <Typography 
        type={TEXT_TYPE.H3} 
        className="mb-2 text-white"
      >
        {title}
      </Typography>
      <Typography 
        type={TEXT_TYPE.BODY_DEFAULT}
        className="text-gray-400"
      >
        {description}
      </Typography>
    </div>
  );
};

export default DeFiConceptCard;