import { MdDone } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

interface PlanCardProps {
  title: string;
  price: string;
  duration?: string;
  isHighlighted?: boolean;
  features: string[];
  id: string; 
  onClick: (id: string) => void;
}

const PlanCard = ({ title , price, duration = "Per Month", isHighlighted = false, features , id, onClick} : PlanCardProps) => (
    <div className={`space-y-4 flex flex-col rounded-lg p-4 ${isHighlighted ? "bg-[#007EAF] text-white" : "bg-white shadow border"}`}>
      <div className="space-y-4">
        <h1 className={`font-semibold ${isHighlighted ? "" : "text-[#007EAF]"}`}>{title}</h1>
        <h1 className={`text-4xl font-bold ${isHighlighted ? "" : "text-[#007EAF]"}`}>
          {price !== "Free" ? `AUD ${price}` : price}
          <span className={`text-base font-normal ${isHighlighted ? "text-[#FFFFFF33]" : "text-[#42526B]"}`}>{` /${duration}`}</span>
        </h1>
      </div>
      <div className="space-y-3">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className={`flex h-5 w-5 items-center justify-center rounded-full ${isHighlighted ? "bg-[#007EAF] text-[#DDDDDD]" : "bg-[#F0F5FF] text-[#007EAF]"}`}>
              <MdDone />
            </div>
            <h1 className={isHighlighted ? "" : "text-[#42526B]"}>{feature}</h1>
          </div>
        ))}
      </div>
      <button className="flex w-40  mt-10  items-center justify-center gap-4 rounded-lg border-2 border-[#007EAF] bg-white p-2 text-[#007EAF]"
        onClick={() => onClick(id)}   
      >
         <p className="font-semibold">Get Started</p>
         <FaArrowRightLong className="text-xl" />
        </button>
    </div>
  );

export default PlanCard
