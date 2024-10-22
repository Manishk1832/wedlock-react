import { FaStar } from "react-icons/fa";
import { FiMic } from "react-icons/fi";
import { PiChatsBold } from "react-icons/pi";
import '../../font.css';
const Matching = () => {
  return (
    <div className="bg-[#DCD1E8] bg-gradient-to-bl from-[white] to-[#DCD1E8]    relative w-100 pb-8  ">
     
     
      <div className="bg-[url('/shadow.png')] -rotate-342 absolute w-[80rem] h-[100%]  top-0 right-0  sm:hidden hidden "></div>
      <img
      src="/curve.png"
      alt="arw"
     className="absolute w-[50%] left-[50%] "
 />



      <div className="text-[#60457E]  sm:px-20 z-20  container w-100 3xl:px-28  4xl:px-24 xl:pb-16 pb-8 sm:py-5 3xl:px-28 2xl:px-24">

        <h1 className=" text-[24px] sm:text-[48px] md:text-[52px] pt-10  xl:text-[64px] font-[Proxima-Nova-Bold]  text-center   md:text-start  text-[#4E3A63] ">Exclusive matchmaking</h1>

        <p className="text-[20px] sm:text-[24px] md:text-[21px] text-center md:text-start  xl:text-[28px]  pt-[10px] text-[#475467] ">
          Cras at pellentesque eros. Nullam vitae sapienet felis eleifend
           luctus. Nam ac dui
        </p>
      </div>

      
      <div className="lg:flex container m-auto   mt-2  justify-between  items-center  sm:w-[87%] w-100  gap-44     bg-[#60457E] rounded-3xl px-4 lg:px-12 py-5 md:py-10 opacity-95	sm:mt-12">
      
      <div className="relative  h-full flex justify-center items-center lg:w-1/2">
        <div className="">
        <img
          src="/matching.svg"
          alt="couple"
          className="max-w-full max-h-full  object-contain"
        />
        </div>
      </div>
        <div className="space-y-10 relative  top_rating lg:w-1/2">
          <p className="w-[100%] text-white pt-6 md:pt-10 sm:pt-0 text-[12px] sm:text-[16px] text-center  lg:text-start">
            Aenean interdum arcu sit amet nulla lacinia <br className="hidden lg:block" /> suscipit. Vivamus at
            laoreet mi. Fusce pulvinar commodo
          </p>
          <div className="space-y-2 ">
            <div className="flex items-center gap-5 rounded-xl bg-[#FFFFFF80] lg:w-96 h-10 px-2 md:px-5">
              <FaStar className="text-2xl text-yellow-400 " />
              <h1 className="lg:text-xl text-sm font-[Proxima-Nova-semiBold] " >Top Rated Consultants</h1>
            </div>
            <div className="flex items-center gap-5 rounded-xl bg-[#FFFFFF80] lg:w-96 h-10 px-2 md:px-5">
              <FiMic className="text-2xl text-[#007EAF] " />
              <h1 className="lg:text-xl text-sm font-[Proxima-Nova-semiBold] " >100% Privacy</h1>
            </div>
            <div className="flex items-center gap-5 rounded-xl bg-[#FFFFFF80] lg:w-96 h-10 px-2 md:px-5">
              <PiChatsBold className="md:text-2xl text-lg text-[#008435] " />
              <h1 className="lg:text-xl text-sm font-[Proxima-Nova-semiBold] " >
                5 times higher success rates
              </h1>
            </div>
            <div className="flex items-center gap-5 rounded-xl bg-[#FFFFFF80] lg:w-96 h-10 px-2  md:px-5">
              <PiChatsBold className="md:text-2xl text-lg text-[#008435] " />
              <h1 className="lg:text-xl text-sm font-[Proxima-Nova-semiBold] " >
                5 times higher success rates
              </h1>
            </div>
            <div className="flex items-center gap-5 rounded-xl bg-[#FFFFFF80] lg:w-96 h-10 px-2 md:px-5">
              <PiChatsBold className="md:text-2xl text-lg text-[#008435] " />
              <h1 className="lg:text-xl text-sm font-[Proxima-Nova-semiBold] " > 
                5 times higher success rates
              </h1>
            </div>
            
          </div>
          <div className="flex items-center justify-between  gap-2">
            <div className="flex items-center justify-center px-4 text-white bg-[#3C2C4C] rounded-full md:w-60 lg:h-16 h-10  ">
              <button className="text-sm md:text-lg font-[Proxima-Nova-SemiBold]">Check your Eligibility </button>
            </div>
            <p className="text-white text-[0.7rem] lg:text-lg cursor-pointer   ">Read more</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Matching;
