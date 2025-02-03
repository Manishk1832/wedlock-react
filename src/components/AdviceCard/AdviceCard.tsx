import { useState } from "react";

interface AdviceCardProps {
  imageSrc: string;
  title: string;
  hoverContent: React.ReactNode;
}

const AdviceCard = ({ imageSrc, title, hoverContent }: AdviceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative rounded-lg border-2 border-[#E6E8EC] px-4 py-4 space-y-3 transition-all duration-300 ${
        isHovered ? "shadow-2xl border-transparent" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full">
        <img
          src={imageSrc}
          alt="Advice"
          className="w-full h-auto object-cover rounded-md transition-transform duration-300"
        />
      </div>
      <h1
        className="text-[#061C3D] text-xl font-medium"
        style={{ fontFamily: "Proxima-Nova-Regular" }}
      >
        {title}
      </h1>

      {/* Hover Content */}
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 p-4 rounded-lg transition-opacity duration-300">
          <div className="text-[#061C3D] text-center">{hoverContent}</div>
        </div>
      )}
    </div>
  );
};

export default AdviceCard;
