import { MdDone } from "react-icons/md";
import { FaArrowRightLong, FaBan } from "react-icons/fa6"; // Import a "disabled" icon

interface PlanCardProps {
  title: string;
  price: string;
  duration?: string;
  isHighlighted?: boolean;
  features: string[];
  id: string;
  onClick: (id: string) => void;
  isDisabled?: boolean; // Prop to handle disabled state
}

const PlanCard = ({
  title,
  price,
  duration = "Per Month",
  isHighlighted = false,
  features,
  id,
  onClick,
  isDisabled = false, // Default to false
}: PlanCardProps) => (


  <div
    className={`space-y-4 flex flex-col rounded-lg p-4 ${
      isHighlighted ? "bg-[#60457E] text-white" : "bg-[#007EAF] shadow text-white border"
    }`}
  >
    <div className="space-y-4">
      <h1 className={`font-semibold ${isHighlighted ? "" : "text-white"}`}>{title}</h1>
      <h1
        className={`text-4xl font-bold ${
          isHighlighted ? "" : "text-white"
        }`}
      >
        {price !== "Free" ? `AUD ${price}` : price}
        <span
          className={`text-base font-normal ${
            isHighlighted ? "text-[#FFFFFF33]" : "text-[#42526B]"
          }`}
        >{` /${duration}`}</span>
      </h1>
    </div>
    <div className="space-y-3">
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-center gap-3">
          <div
            className={`flex h-5 w-5 items-center justify-center rounded-full ${
              isHighlighted
                ? "bg-[#007EAF] text-[#DDDDDD]"
                : "bg-[#F0F5FF] text-[#007EAF]"
            }`}
          >
            <MdDone />
          </div>
          <h1 className={isHighlighted ? "" : "text-white"}>{feature}</h1>
        </div>
      ))}
    </div>
    <button
      className={`flex w-80 mt-10 items-center justify-center gap-4 rounded-lg border-2 ${
        isDisabled
          ? "border-gray-400 bg-gray-200 text-gray-600 cursor-not-allowed"
          : "border-[#007EAF] bg-white text-[#007EAF]"
      } p-2`}
      onClick={() => !isDisabled && onClick(id)} // Only call onClick if not disabled
      disabled={isDisabled} // Disable the button when the plan is already purchased
    >
      {isDisabled ? (
        <>
          <FaBan className="text-xl" />
          <p className="font-semibold">Purchased</p>
        </>
      ) : (
        <>
          <p className="font-semibold">Get Started</p>
          <FaArrowRightLong className="text-xl" />
        </>
      )}
    </button>
  </div>
);

export default PlanCard;
