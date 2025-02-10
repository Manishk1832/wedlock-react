import {FaStar} from "react-icons/fa";
import {FiMic} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import {PiChatsBold} from "react-icons/pi";
import '../../font.css';

const Matching = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-[#DCD1E8] bg-gradient-to-bl from-[white] to-[#DCD1E8]    relative w-100 py-5 md:py-12 ">

            <div className="container  m-auto max-md:px-4">
            <div className="bg-[url('/shadow.png')] -rotate-342 absolute w-[80rem] h-[100%]  top-0 right-0  sm:hidden hidden "></div>
            <img
                src="/curve.png"
                alt="arw"
                className="absolute w-[50%] left-[50%] "
            
            />
            <div className="container max-md:py-0 ">

            <div
                className="text-[#60457E]   sm:px-20 z-20  container  w-100 3xl:px-28  4xl:px-24 xl:pb-16 pb-8 3xl:px-28 2xl:px-24">

                <h1 className=" text-[32px] md:text-[48px] xl:text-[64px]  xl:leading-[83.2px] font-[Proxima-Nova-Bold] tracking-[-0.02em]  text-[#4E3A63] ">Exclusive
                    matchmaking</h1>

                <p className="text-[20px] max-md:pt-10 pt-8 sm:text-[24px] md:text-[21px]  md:text-start  xl:text-[28px]  text-[#475467] ">
                Our Exclusive Matchmaking service is designed for exceptional individuals who prioritise meaningful, long-term relationships. Whether you're ready to find your life partner or are looking for someone who shares your vision of a future together, our approach is tailored to your unique needs.

                </p>
            </div>


            <div
                className="lg:flex container m-auto    justify-between  items-center  sm:w-[87%] w-100  gap-44     bg-[#60457E] rounded-3xl px-4 lg:px-12 py-5 md:py-10 opacity-95	">
 
                <div className="relative  h-full flex justify-center items-center lg:w-1/2 ">
                    <div className="">
                        <img
                            src="/matching.svg"
                            alt="couple"
                            className="max-w-full max-h-full  object-contain"
                        />
                    </div>
                </div>
                <div className="space-y-10 relative  top_rating lg:w-1/2">
                  <h2 className="w-[100%] text-white pt-6 md:pt-10 sm:pt-0 text-[24px] font-Proxima-Nova-SemiBold max-md:text-[16px] text-center  lg:text-start">
                    Key Features
                  </h2>
                  <div className="space-y-2 ">
                        <div className="flex items-center gap-5 rounded-xl bg-[#FFFFFF80] lg:w-96 h-10 px-2 md:px-5">
                            <FaStar className="text-2xl text-yellow-400 "/>
                            <h1 className="lg:text-xl text-sm font-[Proxima-Nova-semiBold] ">Top-tier profile visibility</h1>
                        </div>
                        <div className="flex items-center gap-5 rounded-xl bg-[#FFFFFF80] lg:w-96 h-10 px-2 md:px-5">
                            <FiMic className="text-2xl text-[#007EAF] "/>
                            <h1 className="lg:text-xl text-sm font-[Proxima-Nova-semiBold] ">Personalised matchmaking</h1>
                        </div>
                        <div className="flex items-center gap-5 rounded-xl bg-[#FFFFFF80] lg:w-96 h-10 px-2 md:px-5">
                            <PiChatsBold className="md:text-2xl text-lg text-[#008435] "/>
                            <h1 className="lg:text-xl text-sm font-[Proxima-Nova-semiBold] ">
                         Control over privacy and visibility
                         </h1>
                        </div>
                        <div className="flex items-center gap-5 rounded-xl bg-[#FFFFFF80] lg:w-96 h-10 px-2  md:px-5">
                            <PiChatsBold className="md:text-2xl text-lg text-[#008435] "/>
                            <h1 className="lg:text-xl text-sm font-[Proxima-Nova-semiBold] ">
                            Personality assessments
                             </h1>
                        </div>
                        <div className="flex items-center gap-5 rounded-xl bg-[#FFFFFF80] lg:w-96 h-10 px-2 md:px-5">
                            <PiChatsBold className="md:text-2xl text-lg text-[#008435] "/>
                            <h1 className="lg:text-xl text-sm font-[Proxima-Nova-semiBold] ">
                            Top-tier profile visibility
                            </h1>
                        </div>

                    </div>
                    <div className="flex items-center justify-between  gap-2">
                        <button
                            onClick={ ()=>{navigate("/exclusive")} }
                            className="flex items-center justify-center px-4 text-white bg-[#3C2C4C] rounded-full md:w-60 lg:h-16 h-10  ">
                            <p className="text-sm md:text-lg font-[Proxima-Nova-SemiBold]">Check your eligibility
                            </p>
                        </button>
                        {/* <p className="text-white text-[0.7rem] lg:text-lg cursor-pointer   ">Read more</p> */}
                    </div>
                </div>
                </div>

                </div>
            </div>
        </div>
    );
};

export default Matching;
