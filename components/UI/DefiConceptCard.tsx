import React from 'react';
import Typography from "@components/UI/typography/typography";
import { TEXT_TYPE } from "@constants/typography";

interface DefiConceptCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const DefiConceptCard = ({ title, description, icon }: DefiConceptCardProps) => {
  return (
    <div className="bg-[#1A1B1F] rounded-xl p-4">
      {/* Icon wrapper to control size */}
      <div className="mb-3">
        {icon}
      </div>

      {/* Text content with adjusted spacing */}
      <div className="flex flex-col gap-1">
        <Typography 
          type={TEXT_TYPE.H3} 
          className="text-white font-semibold text-lg mt-1 mb-2"
        >
          {title}
        </Typography>
        <Typography 
          type={TEXT_TYPE.BODY_DEFAULT}
          className="text-[#c6c6cf] text-sm font-normal leading-[1.4]"
        >
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default DefiConceptCard;