import  { useState } from 'react';

interface AdviceCardProps {
  imageSrc: string;
  title: string;
  hoverContent: React.ReactNode;
}

const AdviceCard = ({ imageSrc, title, hoverContent } : AdviceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`rounded border-2 border-[#E6E8EC] px-4 space-y-[8px] ${
        isHovered ? 'hover:border-none hover:shadow-2xl py-4' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imageSrc} alt="Project" className="xl:w-[100%]" />
      <h1
        className="text-[#061C3D] text-[24px] leading-[32px] font-normal"
        style={{ fontFamily: 'Proxima-Nova-Regular' }}
      >
        {title}
      </h1>
      
      {isHovered && (
        <div className="hover-content text-[#061C3D]">
          {hoverContent}
        </div>
      )}
    </div>
  );
};

export default AdviceCard;
