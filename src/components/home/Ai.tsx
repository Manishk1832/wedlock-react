import '../../font.css';

const Ai = () => {
  return (
    <div className="w-full h-auto  bg-[#009BDA] overflow-hidden">
      <div className="relative container mx-auto">
        <img
          src="/curvewhite.svg"
          alt="Curve"
          className="absolute w-[40rem] rotate-12 -right-10 -top-32"
        />
        <div className="relative space-y-48 text-white md:space-y-40 md:px-20 mt-10  ">
          <div className="relative space-y-10 lg:pr-20">
            <h1
              className="  text-[22px]  md:text-[42px]  xl:text-[64px] font-[Proxima-Nova-bold] w-full "
            >
              AI-driven match <br /> recommendations to suit  <br className=" " /> your
              preferences
            </h1>
            <img
              src="/thunder.svg"
              alt="Thunder"
              className="absolute md:top-0 top-[-2.5rem] right-0 w-16 md:w-auto"
            />
          </div>
          <div className="relative ">
            <div className="bg-[#D3D3D380]  border-[#FFFFFF] border rounded-t-3xl  lg:w-[55rem] md:h-[23.5rem] h-[12rem] lg:h-[34rem] xl:h-[45rem]  relative mx-auto">
              <img
                src="/Ai.svg"
                alt="AI"
                className="absolute lg:left-40 left-1/4 top-[-2.5rem] w-52 md:w-[24rem] lg:w-auto     xl:h-[40rem]  2xl:h-[48rem] object-contain"
              />
              <div className="absolute top-1/6 right-[7%] md:right-[1.4rem] md:top-6  lg:top-20 lg:right-5 w-32 md:w-60  lg:w-80">
                <img
                  src="/recomended.png"
                  alt="Recommended"
                  className="w-full h-auto    "
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
