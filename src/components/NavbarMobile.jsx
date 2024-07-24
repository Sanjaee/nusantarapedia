import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NavbarMobile = ({ isSidebarOpen, toggleSidebar }) => {
  return (
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

                  <ul className="flex flex-col text-[#696969] text-sm font-bold">
                    {location.pathname === "/" ? (
                      <a
                        href="#beranda1"
                        className="hover:text-blue-500 cursor-pointer"
                      >
                        Beranda
                      </a>
                    ) : (
                      <Link
                        to="/#beranda1"
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
                      <a
                        href="#mitra"
                        className="hover:text-blue-500 cursor-pointer"
                      >
                        Mitra
                      </a>
                    ) : (
                      <Link
                        to="/#mitra"
                        className="hover:text-blue-500 cursor-pointer"
                      >
                        Mitra
                      </Link>
                    )}
                    {location.pathname === "/" ? (
                      <a
                        href="#galeri"
                        className="hover:text-blue-500 cursor-pointer"
                      >
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
  );
};

export default NavbarMobile;
