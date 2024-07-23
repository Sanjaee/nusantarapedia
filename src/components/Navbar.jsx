import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
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
                Berita
              </a>
            ) : (
              <Link
                to="/#beranda"
                className="hover:text-blue-500 cursor-pointer"
              >
                Berita
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
      <div className="lg:hidden flex justify-between items-center fixed top-0 h-14 z-50 bg-[#E6F7FF] w-full px-4">
        <Link to="/" className="flex items-center">
          <img className="w-10" src="./logonavbar.png" alt="Logo" />
          <img
            className=" w-32 ml-2"
            src="./logoteksnavbar.png"
            alt="Logo Nama"
          />
        </Link>

        <div className="flex items-center">
          <button onClick={toggleSidebar}>
            <img className="w-10" src="./hamburger.svg" alt="bg" />
          </button>
          <AnimatePresence>
            {isSidebarOpen && (
              <>
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="fixed  top-0 left-0 h-full bg-[#E6F7FF] w-56 shadow-lg z-50"
                >
                  <div className="p-4">
                    <button
                      onClick={toggleSidebar}
                      className="text-black text-lg"
                    >
                      X
                    </button>

                    <ul className="mt-4">
                      <li>
                        {location.pathname === "/" ? (
                          <a
                            href="#berita"
                            className="block px-4 py-2 text-black font-semibold hover:bg-white hover:text-[#696969] transition duration-200 w-full text-start"
                          >
                            Berita
                          </a>
                        ) : (
                          <Link
                            to="/#berita"
                            className="block px-4 py-2 text-black font-semibold hover:bg-white hover:text-[#696969] transition duration-200 w-full text-start"
                          >
                            Berita
                          </Link>
                        )}
                      </li>
                      <li>
                        {location.pathname === "/" ? (
                          <a
                            href="#main1"
                            className="block px-4 py-2 text-black font-semibold hover:bg-white hover:text-[#696969] transition duration-200 w-full text-start"
                          >
                            Empat Pilar
                          </a>
                        ) : (
                          <Link
                            to="/#main1"
                            className="block px-4 py-2 text-black font-semibold hover:bg-white hover:text-[#696969] transition duration-200 w-full text-start"
                          >
                            Empat Pilar
                          </Link>
                        )}
                      </li>

                      <li>
                        {location.pathname === "/" ? (
                          <a
                            href="#mitra1"
                            className="block px-4 py-2 text-black font-semibold hover:bg-white hover:text-[#696969] transition duration-200 w-full text-start"
                          >
                            Mitra
                          </a>
                        ) : (
                          <Link
                            to="/#mitra1"
                            className="block px-4 py-2 text-black font-semibold hover:bg-white hover:text-[#696969] transition duration-200 w-full text-start"
                          >
                            Mitra
                          </Link>
                        )}
                      </li>

                      <li>
                        {location.pathname === "/" ? (
                          <a
                            href="#galery1"
                            className="block px-4 py-2 text-black font-semibold hover:bg-white hover:text-[#696969] transition duration-200 w-full text-start"
                          >
                            Galery
                          </a>
                        ) : (
                          <Link
                            to="/#galery1"
                            className="block px-4 py-2 text-black font-semibold hover:bg-white hover:text-[#696969] transition duration-200 w-full text-start"
                          >
                            Galery
                          </Link>
                        )}
                      </li>
                    </ul>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black z-40"
                  onClick={toggleSidebar}
                />
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Navbar;
