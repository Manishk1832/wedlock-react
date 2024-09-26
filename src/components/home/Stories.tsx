import  { useState } from 'react';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import StoryCard from './StoryCard';
import '../../font.css';



const Stories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stories = [
    {
      src: "/cardbg.jpeg",
      title: "JACK & Celine",
      description:
        "We matched, spoke for sometime and then met in real. We were sure we want to spend our life together after the initial few conversations.",
      index: 0,
    },
    {
      src: "/cardbg.jpeg",
      title: "JACK & Celine",
      description:
        "We matched, spoke for sometime and then met in real. We were sure we want to spend our life together after the initial few conversations.",
      index: 1,
    },
    {
      src: "/cardbg.jpeg",
      title: "JACK & Celine",
      description:
        "We matched, spoke for sometime and then met in real. We were sure we want to spend our life together after the initial few conversations.",
      index: 2,
    },
  
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === stories.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? stories.length - 1 : prevSlide - 1));
  };
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    
    <div className="w-full h-auto 8xl:px-32 bg-[#007EAF] pb-10 sm:pb-[80px] 3xl:px-48 xl:px-10 7xl:px-36" >


      
    
    <div className="container  m-auto md:space-y-16 md:px-20 md:py-5 px-4 space-y-5   overflow-hidden bg-[#007EAF] text-white relative">
       <img
        src="/curvewhite.svg" 
        alt="arw"
        className="absolute  w-[42rem] rotate-12 -right-10 -top-40 z-10"
      />
      <div className="md:space-y-10 space-y-5 happy_story">
        <div className="flex items-center justify-between gap-5">
          <h1 className=" text-[30px]  lg:text-[48px] md:text-[52px]  xl:text-[64px] font-[Proxima-Nova-Bold] leading-[42px] tracking-[0.02em]  md:leading-[52px] xl:leading-[89.6px] " >Happy Stories</h1>
          <div className="flex items-center gap-4 z-10">
            <IoArrowBack className="md:w-10 md:h-10 hover:bg-[#009BDA] rounded-full cursor-pointer" onClick={prevSlide} />
            <IoArrowForward className="md:w-10 md:h-10 hover:bg-[#009BDA] rounded-full cursor-pointer" onClick={nextSlide} />
          </div>
        </div>
        <p className="sm:w-[60%] w-full xl:w-full  text-[16px]  md:text-[20px] xl:text-[28px] font-[Proxima-Nova-Regular] leading-loose tracking-widest " >
          Dive into stories of unexpected friendships, love that blossoms in the most extraordinary places, and dreams that come true against all odds.
        </p>
      </div>
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4  ">
        {stories.map((story, index) => (
          <div
            key={index}
            className={`relative ${index === currentSlide ? "block" : ""}`}
          >
            <StoryCard
              title={story.title}
              description={story.description}
              imageSrc={story.src}
            />
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-center gap-1">
        {stories.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-4 cursor-pointer rounded-xl ${index === currentSlide ? "w-8 bg-white" : "bg-[#00587b]"}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>

</div>
  );
};

export default Stories;
