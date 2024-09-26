import { CiHeart } from "react-icons/ci";
import '../../font.css';

const Archive = () => {
  return (
    <div>
      
    <div className="bg-[#009BDA] text-white md:grid grid-cols-3 font-lato ">
        <div className="flex flex-col achieve items-center gap-3 text-center justify-center py-8">
          <CiHeart className="text-4xl" />
          <h1 className="text-[40px] font-[proxima-Nova-Bold] ">1000+</h1>
          <p className="text-md md:text-lg xl:text-lg  " >
            5 Star reviews from our loving <br /> customers
          </p>
        </div>
        <div className="flex flex-col items-center achieve justify-center gap-3 text-center bg-[#007EAF] py-8">
          <CiHeart className="text-4xl" />
          <h1 className="text-[40px] font-[proxima-Nova-Bold]">The #1 Trusted <br /> Matrimonial App</h1>
          <p className="text-md md:text-lg xl:text-lg" >Privacy with your account</p>
        </div>
        <div className="flex flex-col items-center achieve justify-center gap-3 text-center  py-12">
          <CiHeart className="text-4xl" />
          <h1 className="text-[40px] font-[Proxima-Nova-Bold]">250+</h1>
          <p className="text-md md:text-lg xl:text-lg" >
            Cities covers by us for <br />
            services
          </p>
        </div>
      </div>
    </div>
  );
};

export default Archive;
