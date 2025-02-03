import { useState } from "react";
import "../../font.css";

type CategoryKey = "Mother Tongue" | "Religion" | "Community" | "Nationality";
type CategoryItem = { img: string; ct: string };

const Search = () => {
  const [selectedTab, setSelectedTab] = useState<CategoryKey>("Mother Tongue");

  const categories: Record<CategoryKey, CategoryItem[]> = {
    "Mother Tongue": [
      { img: "/Avatar-1.png", ct: "Bengali" },
      { img: "/Avatar-2.png", ct: "Gujarati" },
      { img: "/Avatar-3.png", ct: "Hindi" },
      { img: "/Avatar-4.png", ct: "Kannada" },
      { img: "/Avatar-5.png", ct: "Malayalam" },
      { img: "/Avatar-6.png", ct: "Marathi" },
      { img: "/Avatar-7.png", ct: "Odia" },
      { img: "/Avatar-8.png", ct: "Punjabi" },
      { img: "/Avatar-10.png", ct: "Telugu" },
      { img: "/Avatar-12.png", ct: "Tamil" },
    ],
    "Religion": [
      { img: "/Avatar-1.png", ct: "Hindu" },
      { img: "/Avatar-2.png", ct: "Muslim" },
      { img: "/Avatar-3.png", ct: "Christian" },
      { img: "/Avatar-4.png", ct: "Sikh" },
      { img: "/Avatar-5.png", ct: "Jain" },
      { img: "/Avatar-6.png", ct: "Buddhist" },
    ],
    "Community": [
      { img: "/Avatar-1.png", ct: "Brahmin" },
      { img: "/Avatar-2.png", ct: "Kshatriya" },
      { img: "/Avatar-3.png", ct: "Vaishya" },
      { img: "/Avatar-4.png", ct: "Shudra" },
      { img: "/Avatar-5.png", ct: "Kayastha" },
      { img: "/Avatar-6.png", ct: "Maratha" },
    ],
    "Nationality": [
      { img: "/Avatar-1.png", ct: "Indian" },
      { img: "/Avatar-2.png", ct: "Australian" },
      { img: "/Avatar-3.png", ct: "Canadian" },
      { img: "/Avatar-4.png", ct: "UK" },
      { img: "/Avatar-5.png", ct: "US" },
    ],
  };

  return (
    <div className="w-100 7xl:h-[60rem] 8xl:h-[60rem] 8xl:px-32 3xl:h-[67rem] bg-[#E6F2F7] 3xl:px-56 xl:px-10 5xl:py-4 7xl:px-36">
      <div className="md:space-y-10 relative min-h-screen md:px-20 md:py-10 3xl:py-16 3xl:pt-28 p-8 container m-auto 5xl:h-[20rem]">
        <img
          src="/curvesm.svg"
          alt="arw"
          className="absolute w-[48rem] -right-60 top-2 z-10"
        />

        <div className="md:space-y-10 space-y-5">
          <div className="flex items-center justify-between w-[100%] browse">
            <h1 className="text-[32px] md:text-[48px] xl:text-[64px] xl:leading-[83.2px] font-[Proxima-Nova-Bold] tracking-[-0.02em] text-[#007EAF]">
              Find Your Perfect Match
            </h1>
          </div>
          <p className="text-[20px] sm:text-[28px] text-[#101828E5] sm:leading-[42px] font-Proxima-Nova-Regular">
            Because meaningful relationships start with the right connection, we
            make it easy to find someone who truly complements your matrimonial
            journey
          </p>
        </div>

        {/* Tabs Section */}
        <div className="flex justify-left gap-10 items-center my-10">
          {(Object.keys(categories) as CategoryKey[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`rounded-full cursor-pointer p-4 text-[24px] transition-colors ${
                selectedTab === tab
                  ? "bg-[#009BDA] text-white"
                  : "text-[#838E9E] hover:bg-[#009BDA] hover:text-white"
              }`}
              style={{
                fontFamily: "Proxima-Nova-Regular, sans-serif",
                lineHeight: "36px",
                letterSpacing: "3%",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="flex flex-col items-left gap-10">
          <div className="grid md:grid-cols-6 grid-cols-3 gap-3 ">
            {categories[selectedTab].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 hover:shadow-2xl hover:rounded-xl p-2 transition-shadow"
              >
                <img
                  src={item.img}
                  alt={item.ct}
                  className="rounded-full w-40 h-40 object-cover"
                />
                <h1 className="text-center text-[18px] font-Proxima-Nova-Regular">
                  {item.ct}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;