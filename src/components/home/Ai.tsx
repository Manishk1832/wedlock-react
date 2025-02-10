
import Aicard from './Aicard';

const Ai = () => {
  return (
    <div className="w-full h-auto  bg-[#009BDA] overflow-hidden pt-6 max-md:pt-5" >
      <div className="relative container mx-auto">
        <img
          src="/curvewhite.svg"
          alt="Curve"
          className="absolute w-[40rem] rotate-12 -right-10 -top-32"
        />
        <div className="relative space-y-48 text-white md:space-y-40 md:px-20 mt-4 px-4  ">
          <div className="relative space-y-10 lg:pr-20 ">
            <h1
              className=" text-[32px] md:text-[48px] xl:text-[64px]  xl:leading-[83.2px] font-[Proxima-Nova-Bold] tracking-[-0.02em] "
            >
              Smarter connections with <br className='block max-md:hidden' />AI-Powered match suggestions
            </h1>
            <p className=" text-[20px] sm:leading-[42px] md:text-[24px] lg:text-[26px] xl:text-[28px] text-balance  xl:leading-[44px] font-[Proxima-Nova-Regular] tracking-[-0.02em]">
             Match recommendations to suit your preferences and interests. Our AI-powered algorithm ensures you connect with the right people.
             

            </p>

            <img
              src="/thunder.svg"
              alt="Thunder"
              className="absolute md:top-0 top-[-2.5rem] right-0 w-16 md:w-auto"
            />
          </div>
          <div className="relative mt-10 flex justify-center">
            <div className="bg-[#D3D3D380] md:mt-20 lg:mt-0  border-[#FFFFFF] border rounded-t-3xl   lg:w-[55rem] md:h-[28.5rem] h-[28rem] lg:h-a[34rem] xl:h-[38.5rem]  relative mx-auto">
            <div className="relative  md:bottom-44 lg:bottom-10   bottom-14  max-md:left-7 md:h-[40rem]   left-12 h-[44rem] w-[85%] lg:left-40 md:w-[85%] xl:h-[41rem]">
              <Aicard
                name="Utkarsh Sinha"
                description="Hi, I’m Utkarsh Sinha, a software developer based in Melbourne. I’ve joined Wedlock Australia to find a meaningful and lasting relationship. Outside of work, I love traveling, cooking, and staying active with fitness.
I’m looking for a partner who values open communication, kindness, and the journey of growing together through life’s adventures. I believe that cultural harmony and mutual respect are the foundations of a strong and happy relationship.
"
                imageSrc="/utkarsh.svg"
              />
            </div>

              
              <div className="absolute top-1/6  right-[1.4rem] top-6 md:-top-20   lg:top-20 lg:right-5 w-32 md:w-60  lg:w-80">
                <img
                  src="/recomended.png"
                  alt="Recommended"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Ai;
