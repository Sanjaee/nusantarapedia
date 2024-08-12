import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className={`hover:text-blue-500 cursor-pointer focus:outline-none`}
              >
                Konten
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.1 }}
                    className="absolute -left-16 transform -translate-x-1/2 mt-2 w-48 bg-[#fff] rounded-md shadow-lg z-50"
                  >
                    <ul className="py-2 text-center">
                      <li>
                        <Link
                          to="/pancasila"
                          className={`block px-4 py-2 text-gray-800 hover:bg-[#E6F7FF] hover:text-[#0054A3] transition duration-200`}
                        >
                          Pancasia
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/undang-undang-dasar-1945"
                          className={`block px-4 py-2 text-gray-800 hover:bg-[#E6F7FF] hover:text-[#0054A3] transition duration-200`}
                        >
                          Undang-Undang Dasar
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/bti"
                          className={`block px-4 py-2 text-gray-800 hover:bg-[#E6F7FF] hover:text-[#0054A3] transition duration-200`}
                        >
                          Bhinneka Tunggal Ika
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/negara-kesatuan-republik-indonesia"
                          className={`block px-4 py-2 text-gray-800 hover:bg-[#E6F7FF] hover:text-[#0054A3] transition duration-200`}
                        >
                          NKRI
                        </Link>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
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
                Galeri
              </a>
            ) : (
              <Link
                to="/#galeri"
                className="hover:text-blue-500 cursor-pointer"
              >
                Galeri
              </Link>
            )}
          </ul>
        </div>
      </div>

      {/* Mobile */}
      <NavbarMobile
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
    </>
  );
};

export default Navbar;
