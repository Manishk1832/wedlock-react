import React, { useState } from 'react';
import { RiArrowDropDownLine, RiCloseLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from 'react-router-dom'; 
import Login from '../model/Login';

const Navbar: React.FC = () => {
  const location = useLocation(); // Use useLocation to get the current path
  const pathname = location.pathname;
  
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const isBlueBgRoute = ["/mission", "/advice", "/help", "/legal", "/security", "/faqs", "/contact-us", "/cookies-policy", "/community-guidelines", "/privacy-policy", "/terms-conditions", "/about-us", "/plan", "/services"].includes(pathname);
  const hiddenRoutes = ["/verification", "/register", "/questions", "/login", "/forgot-password", "/create-password", "/change-password", "/other-details", "/personal-details", "/test", "/qualification-details", "/location-details", "/photoupload", "/user-dashboard", "/verify-otp","/profile","/success",'/profle/:id'];
  const isHiddenRoute = hiddenRoutes.includes(pathname);

  if (isHiddenRoute) {
    return null;
  }

  return (
    <>
      <div className={`absolute navbar z-10 w-full h-auto 3xl:px-32 7xl:px-32 8xl:px-32 xl:px-10 text-white ${isBlueBgRoute ? 'bg-[#007eb0] h-20' : ' '}`}>
        <div className={`${isBlueBgRoute ? ' ' : ' bg-[#007eb0] '}`}></div>
        <div className="flex justify-around items-center container w-full m-auto">
          <div className="flex  xl:px-16 items-center justify-around w-full">
            <div className='text-white  hidden md:flex'>
              <ul className='hidden md:flex gap-5 sm:mt-7 text-[24px]'>
                <li><Link to="/mission">Mission</Link></li>
                <li><Link to="/advice">Advice</Link></li>
                <li><Link to="/help">Help</Link></li>
              </ul>
            </div>
            <div className="px-0 md:mr-8">
              <img src="/newlogo.png" alt="logo" className="w-[10rem] h-[4rem] px-0 xl:w-[18rem] xl:h-[6rem] " />
            </div>

            <div className='flex gap-5 items-start justify-center'>
              <button className='flex items-center justify-center  md:gap-3 md:text-[24px] text-white md:rounded-full rounded-3xl border-white font-bold border md:w-[170px] md:h-[69px] px-3' onClick={openLogin}>
                Login
                <RiArrowDropDownLine className="text-5xl" />
              </button>
              <img src="/Aus.svg" alt='lang' className='hidden md:block w-10 h-12' />
              <button className="md:hidden text-3xl" onClick={toggleSidebar}>
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
          <Login isOpen={isLoginOpen} onClose={closeLogin} />
        </div>

        <div className={`fixed top-0 left-0 h-full w-64 bg-[#007eb0] z-20 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <div className="flex justify-between items-center p-4">
            <img src="/Logo.png" alt="logo" className='w-36 h-10' />

            <button className="text-3xl text-white" onClick={toggleSidebar}>
              <RiCloseLine />
            </button>
          </div>
          <nav className="flex flex-col p-4 text-[20px] items-center">
            <Link to="/mission" className="py-1 text-white" onClick={toggleSidebar}>Mission</Link>
            <Link to="/advice" className="py-1 text-white" onClick={toggleSidebar}>Advice</Link>
            <Link to="/help" className="py-1 text-white" onClick={toggleSidebar}>Help</Link>
          </nav>
        </div>

        <div className={`fixed inset-0 bg-black bg-opacity-50 z-10 ${isSidebarOpen ? 'block' : 'hidden'}`} onClick={toggleSidebar}></div>
      </div>
    </>
  );
}

export default Navbar;
