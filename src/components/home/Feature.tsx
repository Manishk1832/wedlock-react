import {
  PiVideoCameraDuotone,
  PiChatsDuotone,
  PiMicrophoneDuotone,
} from "react-icons/pi";
import "../../font.css";

const Feature = () => {
  return (
    <div className="w-100 h-auto 8xl:px-32 bg-[#007EAF]  sm:pt-0 3xl:px-48 xl:px-10 7xl:px-36">
      <div className="relative overflow-hidden container m-auto">
        <img
          src="/curvewhite.svg"
          alt="arw"
          className="absolute  w-[42rem] left-10 -top-10 -rotate-[128deg]"
        />

        <div className=" flex flex-col pt-6 lg:flex-row justify-between text-white xl:p-20 p-8  ">
          <div className="space-y-6 connect_match">
            <h1 className=" text-[32px] md:text-[48px] xl:text-[64px]  xl:leading-[83.2px] font-[Proxima-Nova-Bold] tracking-[-0.02em]">
              Connect with matches <br className=" hidden lg:block" /> the way
              you like
            </h1>
            <p className=" text-[20px] sm:leading-[42px] md:text-[24px] lg:text-[26px] xl:text-[28px]  xl:leading-[64px] font-[Proxima-Nova-Regular] tracking-[-0.02em]">
              Cras at pellentesque eros. Nullam vitae{" "}
              <br className=" hidden lg:block" />
              sapien et felis eleifend luctus. Nam ac dui
            </p>

            <div className="w-full">
              <div className="mt-5 flex w-full lg:max-w-lg items-center   flex-col rounded-3xl bg-white bg-opacity-80 px-8 py-7 backdrop-blur-[4.6px] lg:mr-20">
                <div className="flex gap-6">
                  <span className="text-4xl text-[#B249F2]">
                    <PiVideoCameraDuotone />{" "}
                  </span>
                  <div className="flex flex-col max-md:max-w-full">
                    <div
                      className="max-w-full text-2xl text-gray-900 text-opacity-90 xl:text-3xl"
                      style={{ fontFamily: "Proxima-Nova-Bold, sans-serif" }}
                    >
                      Video call
                    </div>
                    <div
                      className="text-md mt-1 leading-7 text-slate-600 max-md:max-w-full lg:text-xl"
                      style={{ fontFamily: "Proxima-Nova-Regular, sans-serif" }}
                    >
                      Etiam sed vulputate nisl, eu elementum arcu. Vivamus
                      dignissim tortor in tellus dictum pellentesque.{" "}
                    </div>
                  </div>
                </div>
                <div className="mt-6 h-px shrink-0 border border-solid border-[#061C3D] bg-[#061C3D] opacity-15 max-md:max-w-full" />
                <div className="mt-6 flex gap-6">
                  <span className="text-4xl text-[#008435]">
                    {" "}
                    <PiChatsDuotone />{" "}
                  </span>
                  <div className="flex flex-col max-md:max-w-full">
                    <div
                      className="text-2xl text-gray-900 text-opacity-90 max-md:max-w-full md:leading-7 xl:text-3xl"
                      style={{ fontFamily: "Proxima-Nova-Bold, sans-serif" }}
                    >
                      Message
                    </div>
                    <div
                      style={{ fontFamily: "Proxima-Nova-Regular, sans-serif" }}
                      className="text-md mt-1 leading-7 text-slate-600 max-md:max-w-full lg:text-xl"
                    >
                      Vivamus dignissim tortor in tellus dictum pellentesque.
                      Praesent mauris metus, dictum quis velit non.
                    </div>
                  </div>
                </div>
                <div className="mt-6 h-px shrink-0 border border-solid border-[#061C3D] bg-[#061C3D] opacity-15 max-md:max-w-full" />
                <div className="mt-6 flex gap-6">
                  <span className="text-4xl text-[#007EAF]">
                    {" "}
                    <PiMicrophoneDuotone />{" "}
                  </span>

                  <div className="flex flex-col max-md:max-w-full">
                    <div
                      className="text-2xl text-gray-900 text-opacity-90 max-md:max-w-full xl:text-3xl"
                      style={{ fontFamily: "Proxima-Nova-Bold, sans-serif" }}
                    >
                      Voice call
                    </div>
                    <div
                      style={{ fontFamily: "Proxima-Nova-Regular, sans-serif" }}
                      className="text-md mt-1 leading-7 text-slate-600 max-md:max-w-full lg:text-xl"
                    >
                      Vivamus dignissim tortor in tellus dictum pellentesque.
                      Praesent mauris metus, dictum quis velit non.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full lg:w-1/2 h-[38.5rem] md:h-[74.5rem] lg:h-[52rem] mt-2 xl:h-[56rem]">
            <img
              src="/main.svg"
              alt="Main visual"
              className="absolute inset-0 w-full h-full object-fill md:object-cover lg:object-fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
