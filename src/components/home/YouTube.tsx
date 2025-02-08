import '../../font.css';

const YouTube = () => {
  return (
  
  
  <div className='w-100 h-auto bg-[#E6F2F7] 3xl:pl-[8%] xl:px-8 7xl:px-32 8xl:px-32'>
 <div className='relative overflow-hidden container m-auto sm:px-6 px-6 w-100' >
       <img
        src="/curvesm.svg"
        alt="arw"
        className="absolute  w-[52rem] -right-56 top-2 z-10" 
      />
    <div className='py-5 lg:py-20  sm:px-14 youtube'>
  
        <h1 className='text-[32px] md:text-[48px] xl:text-[64px]  xl:leading-[83.2px] font-[Proxima-Nova-Bold] tracking-[-0.02em] text-[#007EAF] '>Introducing: A new wedlock experience
        </h1>
        <p className=' text-[20px] md:text-[24px] lg:text-[20px] xl:text-[28px]  pt-[21px] font-[Proxima-Nova-Regular] lg:leading-[32px] text-[#475467] xl:leading-[42px] '>Your search for a great matrimonial profile has never been easier with groundbreaking overhaul of the Wedlock you know and trust.
        </p>
        <h4 className='text-[20px]  md:text-[24px] lg:text-[20px] xl:text-[28px] text-[#007EAF] pt-10 font-[Proxima-Nova-SemiBold] leading-[32px]  '>Get a sneek peek:</h4>

      
        <div className="mt-10 aspect-video">
  <iframe
    className="w-full h-full"
    src="https://www.youtube.com/embed/g9SKCSIO3dw?rel=0&modestbranding=1&showinfo=0"
    title="Wedlock"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>





    </div>
    
    
    </div>

  </div>
 
  )
}

export default YouTube