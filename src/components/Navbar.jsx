import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Desktop */}
      <div className="lg:flex hidden bg-[#E6F7FF] px-10 h-14 custom-1200:h-20 w-full items-center justify-between top-0 z-50 fixed">
        <Link to="/" className="flex items-center">
          <img src="./logonavbar.png" className="h-10" alt="logo" />
          <img
            src="./logoteksnavbar.png"
            className="h-4 ml-4  sm:block"
            alt="logoteks"
          />
        </Link>
        <div></div>
        <div className="hidden sm:block">
          <ul className="flex space-x-8 text-[#696969] text-sm font-bold">
            {location.pathname === "/" ? (
              <a href="#beranda" className="hover:text-blue-500 cursor-pointer">
                Beranda
              </a>
            ) : (
              <Link
                to="/#beranda"
                className="hover:text-blue-500 cursor-pointer"
              >
                Beranda
              </Link>
            )}
            {location.pathname === "/" ? (
              <a
                href="#empatpilar"
                className="hover:text-blue-500 cursor-pointer"
              >
                Empat Pilar
              </a>
            ) : (
              <Link
                to="/#empatpilar"
                className="hover:text-blue-500 cursor-pointer"
              >
                Empat Pilar
              </Link>
            )}
            {location.pathname === "/" ? (
              <a href="#mitra" className="hover:text-blue-500 cursor-pointer">
                Mitra
              </a>
            ) : (
              <Link to="/#mitra" className="hover:text-blue-500 cursor-pointer">
                Mitra
              </Link>
            )}
            {location.pathname === "/" ? (
              <a href="#galeri" className="hover:text-blue-500 cursor-pointer">
                Galery
              </a>
            ) : (
              <Link
                to="/#galeri"
                className="hover:text-blue-500 cursor-pointer"
              >
                Galery
              </Link>
            )}
          </ul>
        </div>
      </div>

      {/* Mobile */}
    <NavbarMobile isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
    </>
  );
};

export default Navbar;
