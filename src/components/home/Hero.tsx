import { Link } from "react-router-dom";
import heroImg from "../../assets/bg.png";

function Hero() {
  return (
    <div
      className="relative hero_section bg-cover  bg-no-repeat bg-black  overflow-hidden min-h-screen 7xl:h-[100vh]   top-0 py-0   sm:py-0 3xl:h-[100vh]  xl:h-[100vh]   5xl:h-[100vh]   4xl:h-[100vh]  "
      style={{
        backgroundImage: `url(${heroImg})`,
        width: "100%",
         // Zoom effect (adjust percentage as needed)
      }}
    >
      <div className="absolute inset-0  ">
        {/*  
        <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-1 md:gap-2 rotate-12 sm:rotate-12 h-full scale-[1.39] bg-black">
          {imagePaths.map((path, index) => (
            <div key={index} className="relative w-full h-full bg-black">
              <Image src={path} layout="fill" objectFit="cover" alt={`Image ${index + 1}`}  />
            </div>
          ))}
        </div>

        */}
      </div>

      <div className="relative 3xl:pl-30  bg-black bg-opacity-50 text-white min-h-screen md:pl-16 md:flex   md:px-10 gap-80 ">
        <div className="  2xl:px-20 py-32 xl:w-[100%] flex justify-center items-center">
          <div className=" text-center   xl:w-[100%]  hero_content  ">
            <h1
              className="text-[3rem] sm:text-[60px]  md:text-[80px] lg:text-[100px] xl:text-[120px] text-[#FFFFFF] font-bold leading-[60px] md:leading-[80px] lg:leading-[150px] xl:leading-[200px]   xl:-tracking-wider"
              style={{ fontFamily: "Proxima-Nova-bold," }}
            >
              Married at First Sight
            </h1>
            <p
              className="  text-[#FFFFFF] py-10 text-[18px] xl:text-[28px] xl:pt-8 px-2"
              style={{
                fontFamily: "Proxima-Nova-Regular,",
                lineHeight: "42px",
                letterSpacing: "2%",
                fontWeight: "400",
              }}
            >
              AI-powered e-matchmaking service. A smarter way to foster
              connections.
            </p>
           
            <Link
  to="/questions"
  className="flex items-center justify-center bg-[#009BDA] rounded-full w-[249px] h-[64px] text-[20px]  text-white font-bold mx-auto xl:mt-16"
>
  <span>Start free today</span>
</Link>

          </div>

          {/* mobile card in hero section 
          <div className="absolute top-[60px] right-[130px] backdrop-blur backdrop-brightness-125 rounded-3xl w-[25%] h-[73%]   border-8 border-white-2 flex items-center justify-center hidden  md:block 3xl:mr-[5%] lg:hidden" ></div>
         */}
        </div>
        <div
          className="absolute bottom-0 right-0 sm:pt-40 md:bottom-40 md:left-[8rem] xl:bottom-60   xl:left-[70rem] 2xl:left-[80rem] hidden md:block 3xl:ml-[18%]  "
          style={{ transform: "translateY(50%)" }}
        >
          <div className="flex flex-col items-center gap-2  w-100   ">
           

            <p
              className="text-[18px]  mt-1"
              style={{ fontFamily: "Proxima-Nova-Thin, sans-serif" }}
            >
              All photos are used for illustrative purposes only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
