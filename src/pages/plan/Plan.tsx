import { MdDone } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import FAQ from "../../components/faqs/Faq3";
import Subscription from "../../components/Subscription/Subscription";
import "../../font.css";

const page = () => {
  return (
    <div className="space-y-20  xl:space-y-20 mt-24">
      <div className="px-5">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex flex-col space-y-4 p-4 md:p-8">
            <h3 className="text-3xl font-semibold">Our pricing plan</h3>
            <p className="mt-4 text-md text-[#061C3D] md:mt-0">
              Donec ligula ligula, porta at urna non, faucibus congue urna.
              Nullamb <br className="hidden xl:block" />
              nulla purus, facilisis vitae odio ac, tempus aliquet dolor.
            </p>
          </div>

          <div className="mt-5 flex h-16 w-60 items-center gap-8 rounded-full bg-[#FFF9EE] p-3 xl:mt-0">
            <div className="flex h-10 w-32 items-center justify-center rounded-full bg-[#FFC759] p-2">
              <h1 className="font-semibold text-[#061C3D]">Monthly</h1>
            </div>
            <div>
              <h1 className="text-center font-semibold text-[#42526B]">
                Yearly
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3 md:px-5 lg:gap-8 xl:mt-4 xl:gap-24 2xl:gap-32 3xl:gap-36 3xl:px-60">
          <div className="space-y-4    rounded-lg bg-white p-4 border shadow">
            <div className="flex gap-0.5 text-[#007EAF]">
              <h2 className="font-semibold text-lg">Standard</h2>
              <h2 className="text-md  font-semibold text-lg">(Free)</h2>
            </div>

            <div className="space-y-3 flex flex-col ">
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F0F5FF] text-[#007EAF]">
                  <MdDone />
                </div>
                <h1 className="text-[#42526B]">Unlimited likes</h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F0F5FF] text-[#007EAF]">
                  <MdDone />
                </div>
                <h1 className="text-[#42526B]">Unlimited Rewinds</h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F0F5FF] text-[#007EAF]">
                  <MdDone />
                </div>
                <h1 className="text-[#42526B]">Passport™ to any location</h1>
              </div>
              <div className="flex items-center gap-3 text-[#42526B]">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F0F5FF] text-[#007EAF]">
                  <MdDone />
                </div>
                <h1 className="">Hide advertisements </h1>
              </div>
              <div className="flex items-center gap-3 text-[#42526B]">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F0F5FF] text-[#007EAF]">
                  <MdDone />
                </div>
                <h1 className="">Go Incognito</h1>
              </div>
            </div>
            <button className="flex  w-40 items-center justify-center gap-4 rounded-lg border-2 border-[#007EAF] p-2 text-[#007EAF]">
              <p className="font-semibold">Get Started</p>
              <FaArrowRightLong className="text-lg" />
            </button>
          </div>

          <div className="space-y-4 flex flex-col flex-1 rounded-md bg-[#007EAF] p-4 text-white">
            <div className="space-y-4">
              <h1 className="font-semibold">Premium</h1>
              <h1 className="text-4xl font-bold">
                AUD 19.99{" "}
                <span className="text-base font-normal text-[#FFFFFF33]">
                  /Per Month
                </span>
              </h1>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#007EAF] text-[#DDDDDD]">
                  <MdDone />
                </div>
                <h1>See who likes you</h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#007EAF] text-[#DDDDDD]">
                  <MdDone />
                </div>
                <h1>New Top Picks every day</h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#007EAF] text-[#DDDDDD]">
                  <MdDone />
                </div>
                <h1>Weekly Super Likes</h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#007EAF] text-[#DDDDDD]">
                  <MdDone />
                </div>
                <h1>
                  1 Free Boost a month Free monthly Boost only available with
                  subscriptions of 1 month or longer.
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#007EAF] text-[#DDDDDD]">
                  <MdDone />
                </div>
                <h1>And everything you love from Wedlock Basic</h1>
              </div>
            </div>
            <button className="flex w-40   items-center justify-center gap-4 rounded-lg border-2 border-[#007EAF] bg-white p-2 text-[#007EAF]">
              <p className="">Get Started</p>
              <FaArrowRightLong className="text-xl" />
            </button>
          </div>
          <div className="space-y-4 flex flex-col   rounded-lg bg-white p-4 text-white shawdow border">
            <div className="space-y-4">
              <h1 className="font-semibold text-[#007EAF]">Elite</h1>
              <h1 className="text-4xl text-[#007EAF] font-bold">
                AUD 39.99{" "}
                <span className="text-base font-normal text-[#42526B]">
                  /Per Month
                </span>
              </h1>
            </div>

            <div className="space-y-3 ">
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F0F5FF] text-[#007EAF]">
                  <MdDone />
                </div>
                <h1 className="text-[#42526B]">Message before matching</h1>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F0F5FF] text-[#007EAF]">
                  <MdDone />
                </div>
                <h1 className="text-[#42526B]">Prioritised likes </h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F0F5FF] text-[#007EAF]">
                  <MdDone />
                </div>
                <h1 className="text-[#42526B]">
                  See the likes you’ve sent over the last 7 days
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F0F5FF] text-[#007EAF]">
                  <MdDone />
                </div>
                <h1 className="text-[#42526B]">
                  And everything you love from Wedlock Standard
                </h1>
              </div>
              <button className="flex w-40  mt-10  items-center justify-center gap-4 rounded-lg border-2 border-[#007EAF] bg-white p-2 text-[#007EAF]">
                <p className="font-semibold">Get Started</p>
                <FaArrowRightLong className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10">
        <Subscription />
      </div>
      <div>
        <FAQ />
      </div>
    </div>
  );
};

export default page;
