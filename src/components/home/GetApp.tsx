import {FaApple, FaGooglePlay} from "react-icons/fa";
// import './getapp.css';
import '../../font.css';

const GetApp = () => {
    return (


        <div
            className="w-100 h-auto  bg-[#007EAF]  8xl:px-32 py-5  7xl:px-32     sm:py-0 sm:pb-0 3xl:px-36 xl:px-10">

            <div className=" text-white  overflow-hidden container m-auto">
                <div className="flex flex-col md:flex-row justify-between lg:justify-between flex-wrap">
                    <div
                        className="bg-container flex flex-col md:flex-row justify-between w-full px-4 md:px-16  md:py-12">
                        <div className="">
                            <div className="  3xl:pt-12 get_app">

                                <h1 className="text-[32px] md:text-[48px] xl:text-[64px]  xl:leading-[83.2px] font-[Proxima-Nova-Bold] tracking-[-0.02em]">
                                    Get the app!
                                </h1>

                              <p className=" text-[20px]  font-Proxima-Nova-Light sm:text-[16px] md:text-[20px] lg:text-[24px]     xl:text-[28px] pt-[21px] leading-[30px] sm:leading-[10px] md:leading-[24px] lg:leading-[28px] xl:leading-[42px] md:text-start mr-1">
                                Download our app now to discover meaningful  <br/> matches  with smart AI   compatibility
                              </p>
                            </div>
                            <div className="flex flex-row    lg:space-x-5 space-y-1  sm:space-y-0 gap-2 mt-16">
                                <button
                                    className="rounded-2xl w-[50%] md:w-auto bg-[#FFFFFF] border-2 border-[#0000004D] text-black text-lg p-3 cursor-pointer h-auto">
                                    <div className="flex items-center gap-4 ">
                                        <FaApple className="text-4xl sm:text-4xl md:text-5xl"/>
                                        <div className="text-start">
                                            <p className="text-[#231F20B2] text-sm font-[proxima-nova-thin]">Download
                                                from</p>
                                            <p className="text-[1.1em] text-[#231F20E5] font-[Proxima-Nova-SemiBold] ">Apple
                                                Store</p>
                                        </div>
                                    </div>
                                </button>
                                <button
                                    className="rounded-2xl w-[50%] md:w-auto bg-[#FFFFFF] border-2 border-[#0000004D] text-black text-lg p-3 px-2  h-auto">
                                    <div className="flex items-center gap-2">
                                        <FaGooglePlay className="text-4xl sm:text-4xl md:text-5xl text-[#231F20E5]"/>
                                        <div className="text-start">
                                            <p className="text-[#231F20B2] text-sm font-[Proxima-Nova-Thin]">Download
                                                from</p>
                                            <p className=" text-[1.1em] text-[#231F20E5] font-[Proxima-Nova-SemiBold] ">Google
                                                Store</p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="mt-8 md:mt-0 relative flex justify-center lg:justify-end w-full md:w-1/2">
                            <div className="mt-8 md:mt-0 relative flex justify-center lg:justify-end w-full lg:w-1/2">
                                <div className="  w-[100%] h-[100%] p-0 m-0">
                                    <img src="/qr.svg" alt="QR code"
                                         className="absolute w-[80%]  sm:w-[90%] p-0 h-[100%] m-0 sm:right-10 xl:right-32 z-20"/>
                                    <img src="/ph.svg" alt="Phone"
                                         className="w-[80%] sm:w-[20rem]  p-0 h-[100%] m-0 relative  left-14 sm:left-4"/>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
                <div
                    className="absolute hidden lg:block top-0 right-0 bg-[url('/topcircle.png')] bg-cover bg-center h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] w-20 sm:w-40 md:w-60 lg:w-80">
                    {/* <Image src="/topcircle.png" alt=""  width={500} height={500}/> */}
                </div>
            </div>

        </div>


    );
};

export default GetApp;
