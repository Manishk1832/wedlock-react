import {
  PiVideoCameraDuotone,
  PiChatsDuotone,
  PiMicrophoneDuotone,
} from "react-icons/pi";

const Feature = () => {
  return (
    <div className="w-100  h-auto 8xl:px-32 bg-[#007EAF]    3xl:px-48 xl:px-10 7xl:px-36">
      <div className="relative overflow-hidden container m-auto">
        <img
          src="/curvewhite.svg"
          alt="arw"
          className="absolute  w-[42rem] left-10 -top-10 -rotate-[128deg]"
        />

        <div className=" flex flex-col pt-6 lg:flex-row justify-between text-white p-6 py-5 md:py-12  ">
          <div className="space-y-6 ">
            <h1 className="text-[32px] md:text-[48px] xl:text-[64px]  xl:leading-[83.2px] font-[Proxima-Nova-Bold] tracking-[-0.02em]">
              Connect with matches <br className=" hidden lg:block" /> the way
              you like
            </h1>
            <p className=" text-[20px] sm:leading-[42px] md:text-[24px] lg:text-[26px] xl:text-[28px] text-balance  xl:leading-[44px] font-[Proxima-Nova-Regular] tracking-[-0.02em]">
              At Wedlock Australia, we understand that building a meaningful connection happens at  your own pace.
             

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
                      Our platform ensures a safe and private video experience, allowing you to build rapport and gauge compatibility in a more interactive way.
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
                      Begin your conversations comfortably with our instant messaging feature, designed for natural, meaningful exchanges at your pace.
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
                      Our voice call feature gives you the opportunity to connect more intimately and engage in conversations that feel authentic.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full lg:w-1/2 h-[38.5rem] md:h-[80.5rem] lg:h-[52rem] mt-2 xl:h-[56rem]">
            <img
              src="/main.svg"
              alt="Main visual"
              className="absolute inset-0 w-full h-full object-fill md:object-cover lg:object-contain xl:object-fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
