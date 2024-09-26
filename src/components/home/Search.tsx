import '../../font.css';


const Search = () => {
  const Profile = [
    {
        
      img: "/p1.png",
      ct: "Bengali",
    },
    {
        img: "/p2.png",
        ct: "Gujarati",
      },
      {
        img: "/p3.png",
        ct: "Hindi",
      },
      {
        img: "/p4.png",
        ct: "Kannada",
      },
      {
        img: "/p4.png",
        ct: "Kannada",
      },
      {
        img: "/p4.png",
        ct: "Kannada",
      },
    
      {
        img: "/p5.png",
        ct: "Malayalam",
      },
      {
        img: "/p6.png",
        ct: "Marathi",
      },
      {
        img: "/p7.png",
        ct: "Odia",
      },
      {
        img: "/p8.png",
        ct: "Punjabi",
      },
      {
        img: "/p8.png",
        ct: "Telugu",
      },
      {
        img: "/p8.png",
        ct: "Telugu",
      },
    
  ];

  return (
    <div className="w-100 7xl:h-[60rem] 8xl:h-[60rem]  8xl:px-32  3xl:h-[67rem] bg-[#E6F2F7] 3xl:px-56 xl:px-10  5xl:py-4 7xl:px-36">
      
      <div
        className="md:space-y-10 relative min-h-screen  md:px-20 md:py-10 3xl:py-16 3xl:pt-28  p-8 container m-auto 5xl:h-[20rem]"
      >
          <img
        src="/curvesm.svg"
        alt="arw"
       
        className="absolute  w-[48rem] -right-60 top-2 z-10"
      />
        
        <div className="md:space-y-10 space-y-5">
          <div className="flex items-center  justify-between  w-[100%] browse">
            <h1 className=" text-[42px] md:text-[36px] lg:text-[48px] xl:text-[64px]  text-[#007EAF] font-[Proxima-Nova-Bold]  tracking-wider lg:leading-[64px] xl:leading-[83.2px] ">
              Browse matrimonial profiles by
            </h1>
          </div>
          <p className=" text-[20px] sm:text-[28px] text-[#101828E5] sm:leading-[42px] " style={{fontFamily: 'Proxima-Nova-Regular, sans-serif'}}>
            Your search for a great relationship has never been easier with 
            groundbreaking overhaul of the eharmony you know and trust.
          </p>
        </div>
        <div className="md:flex justify-left gap-10 items-center my-10">
          <div className="rounded-full cursor-pointer hover:bg-[#009BDA] hover:text-white text-[#838E9E] p-4 text-[24px]" style={{fontFamily:'Proxima-Nova-Regular, sans-serif',lineHeight:'36px', letterSpacing:'3%'}}>
            Mother Tongue
          </div>
          <div className="rounded-full cursor-pointer hover:bg-[#009BDA] hover:text-white text-[#838E9E] p-4  text-[24px]" style={{fontFamily:'Proxima-Nova-Regular, sans-serif',lineHeight:'36px', letterSpacing:'3%'}}>
            Religion
          </div>
          <div className="rounded-full cursor-pointer hover:bg-[#009BDA] hover:text-white text-[#838E9E] p-4  text-[24px]" style={{fontFamily:'Proxima-Nova-Regular, sans-serif',lineHeight:'36px', letterSpacing:'3%'}}>
            Community
          </div>
          <div className="rounded-full cursor-pointer hover:bg-[#009BDA] hover:text-white text-[#838E9E] p-4  text-[24px]" style={{fontFamily:'Proxima-Nova-Regular, sans-serif',lineHeight:'36px', letterSpacing:'3%'}}>
            Nationality
          </div>
        </div>
        <div className="flex flex-col items-left gap-10">     
             <div className="grid md:grid-cols-6 grid-cols-3 gap-3">
            {Profile.map((P, index) =>
        (
            <div key={index} className="flex flex-col items-center gap-2">
            <img
              src={P.img}
              alt="p1"
              className="rounded-full"
            />
            <h1>{P.ct}</h1>
          </div>
        ))}
         
        </div>
        <div className="  flex justify-end text-[24px] text-[#009BDA] relative " style={{fontFamily:'Proxima-Nova-regular',lineHeight:'42px'}}>
          <span>More Matrimonial</span>
        </div>
      </div>
      </div>

    </div>
  );
};

export default Search;
