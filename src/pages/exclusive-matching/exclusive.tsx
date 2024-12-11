import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import {toast} from "sonner"


const Exclusive = () => {
  // const [isSalaryChecked , setIsSalaryChecked] = useState(false);
  // const [isConditionChecked , setIsConditionChecked] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    
    console.log("clicked")
        navigate("/questions");
    // if(!isSalaryChecked || !isConditionChecked){
    //   toast.error("Please select all the options to proceed")
    //   return;
    // }
    localStorage.setItem("isExclusive", "true");
  }


  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-center bg-[#8E69B4] text-white">
        <img src="/logowhite.png" alt="Logo" className="w-42  h-20  top-8" />

      <div className="text-center mb-10 max-md:mt-10 mt-4   container">
        <h1 className=" max-lg:text-3xl  text-4xl  font-Proxima-Nova-Bold mb-4">Exclusive matchmaking</h1>
        <p className="text-base max-w-md mx-auto font-Proxima-Nova-Light">
          Lorem ipsum dolor sit amet consectetur. Dignissim aliquam platea dapibus sapien diam neque laoreet. Malesuada ac.
        </p>
      </div>

      <div className="w-[90%]  max-md:w-[90%] max-w-lg bg-white bg-opacity-10 rounded-lg p-8">
        <ul className=" text-white space-y-8 ">
          <li className="flex items-start ">
          <input type="checkbox" className="mr-4 mt-1 accent-pink-500 h-6 w-6" />
          <div>
              <p className="font-Proxima-Nova-SemiBold">A minimum age of 30 years.</p>
              <p className="text-sm opacity-70">Lorem ipsum dolor sit amet consectetur. Dignissim aliquam platea dapibus sapien diam neque laoreet.</p>
            </div>
          </li>
          <li className="flex items-start ">
          <input type="checkbox" className="mr-4 mt-1 accent-pink-500  " />
          <div>
              <p className="font-Proxima-Nova-SemiBold">A minimum annual income threshold $80,000+</p>
              <p className="text-sm opacity-70">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </li>
          <li className="flex items-start">
          <input type="checkbox" className="mr-4 mt-1 accent-pink-500 h-8 w-8" />
          <div>
              <p className="font-Proxima-Nova-SemiBold">Professional achievements or established career in a reputable industry.</p>
              <p className="text-sm opacity-70">Dignissim aliquam platea dapibus Dignissim aliquam platea dapibus</p>
            </div>
          </li>
          <li className="flex items-start">
            <input type="checkbox" className="mr-4 mt-1 accent-pink-500 h-8 w-8"   />
            <div>
              <p className="font-Proxima-Nova-SemiBold">Comprehensive profile verification, including identity and occupation checks.</p>
              <p className="text-sm opacity-70">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </li>
          <li className="flex items-start">
            <input type="checkbox" className="mr-4 mt-1 accent-pink-500" />
            <div>
              <p className="font-Proxima-Nova-SemiBold">Active membership in prestigious clubs</p>
              <p className="text-sm opacity-70">Lorem ipsum dolor sit amet consectetur. Dignissim aliquam platea dapibus sapien diam neque laoreet.</p>
            </div>
          </li>

          <li className="flex items-start">
            <input type="checkbox" className="mr-4 mt-1 accent-pink-500" />
            <div>
              <p className="font-Proxima-Nova-SemiBold">Background aligned with community and family value</p>
              <p className="text-sm opacity-70">Lorem ipsum dolor sit amet consectetur. Dignissim aliquam platea dapibus sapien diam neque laoreet.</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="flex  space-x-4 mt-4 mb-4 ">
        <button className="px-4 py-2 bg-white bg-opacity-20 rounded-md text-white" onClick={ ()=>{navigate("/")}}>Cancel</button>
        <button className="px-4 py-2 bg-[#553985] rounded-md text-white" onClick={handleContinue} >Continue to proceed</button>
      </div>
    </div>
  );
};

export default Exclusive;
