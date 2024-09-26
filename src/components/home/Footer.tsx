import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Link , useLocation} from "react-router-dom";
import '../../font.css';

const Footer = () => {
  const { pathname } = useLocation();
  // Determine if the footer should be hidden
  const hiddenRoutes = [
    "/verification",
    "/register",
    "/questions",
    "/login",
    "/forgot-password",
    "/discover",
    "/contact",
    "/change-password",
    "/verification",
    "/user",
    "/register",
    "/create-password",
    "/personal",
    "/location",
    "/profile",
    "/contact",
    "/otherdetails",
    "/qualification",
    "/successfully",
    "/photoupload",
    "/forgotpassword",
    "/login",
    "/verify-otp",
    "/success",
  ];
  const isHiddenRoute = hiddenRoutes.some((route) => pathname.startsWith(route));

  if (isHiddenRoute) {
    return null;
  }

  return (
    <div className="w-full h-auto bg-[#2A2A2A] 8xl:px-32 3xl:px-56 xl:px-24 7xl:px-40">
      <div className="px-6 sm:px-14 text-white space-y-8 sm:py-16 py-10 container mx-auto sm:font-normal">
        <div className="md:flex gap-10 space-y-8">
          <div className="md:w-2/4 space-y-5">
            <div className="flex items-center">
              <img src="/newlogo.png" alt="logo" className="w-42 h-16" />
            </div>
            <p className="sm:w-[80%]" style={{ fontFamily: 'Proxima-Nova-Regular, sans-serif' }}>
              In the spirit of reconciliation, Wedlock acknowledges the
              Traditional Custodians of country throughout Australia and their
              connections to land, sea and community. We pay our respect to
              their elders past and present and extend that respect to all
              Aboriginal and Torres Strait Islander peoples today.
            </p>
          </div>
          <div>
            <ul style={{ fontFamily: 'Proxima-Nova-Regular, sans-serif' }}>
              <li><Link to="/mission">Mission</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="#">Career</Link></li>
              <li><Link to="#">Success Stories</Link></li>
            </ul>
          </div>
          <div>
            <ul style={{ fontFamily: 'Proxima-Nova-Regular, sans-serif' }}>
              <li><Link to="#">Safe Matrimonial Tips</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
              <li><Link to="#">Trust & Safety</Link></li>
            </ul>
          </div>
          <div className=" w-full  lg:w-1/5">
            <ul style={{ fontFamily: 'Proxima-Nova-Regular, sans-serif' }}>
              <li><Link to="/community-guidelines">Community guidelines</Link></li>
              <li><Link to="/contact-us">Contact us</Link></li>
              <li><Link to="/terms-conditions">Terms conditions</Link></li>
              <li><Link to="/about-us">About us</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/cookies-policy">Cookies Policy</Link></li>
              <li><Link to="/plan">Subscription Tiers </Link></li>
            </ul>
          </div>
          <div>
            <div className="space-y-2" style={{ fontFamily: 'Proxima-Nova-Regular, sans-serif' }}>
              <h1 className="">Social</h1>
              <div className="flex gap-5 text-2xl">
                <FaFacebookF />
                <IoLogoTwitter />
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="rounded-full bg-[#a5a4a480] h-[2px] w-[95%]"></div>
          <button className="text-white rounded-full ml-8 bg-[#007EAF]  md:w-12 md:h-12 flex items-center justify-center text-4xl">
            {/* <Image src="/arrowup.png" alt="logo" width={20} height={50} /> */}
            <span ><MdKeyboardArrowUp />
            </span>
          </button>
        </div>
        <div className="flex flex-col md:flex-row  items-center md:items-end justify-between mt-4">
          <div style={{ fontFamily: 'Proxima-Nova-Regular, sans-serif' }}>
            <h1 className="font-semibold text-base md:text-lg">
              <i>Married at First Sight</i>
            </h1>
            <p className="text-xs md:text-sm pb-4 text-balance md:pb-0">
            This website is strictly for matrimonial purposes only and not a dating website.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end text-center md:text-left">
            <h1 className="text-xs sm:text-sm md:text-base" style={{ letterSpacing: '3%', lineHeight: '22px', fontFamily: 'Proxima-Nova-Regular, sans-serif' }}>
              © 2024 Wedlock Global Services (Australia) Pty Ltd. All rights reserved.
            </h1>
            <h2 className="text-xs sm:text-sm md:text-base" style={{ letterSpacing: '3%', lineHeight: '22px', fontFamily: 'Proxima-Nova-Regular, sans-serif' }}>
              ABN: 36 679 422 738
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
