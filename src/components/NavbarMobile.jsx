import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const NavbarMobile = ({ isSidebarOpen, toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
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

                  <ul className="mt-4">
                    <li>
                      {location.pathname === "/" ? (
                        <a
                          href="#kesatu"
                          className="block px-4 py-2 text-black font-semibold hover:bg-white hover:text-[#696969] transition duration-200 w-full text-start"
                        >
                          Beranda
                        </a>
                      ) : (
                        <Link
                          to="/#kesatu"
                          className="block px-4 py-2 text-black font-semibold hover:bg-white hover:text-[#696969] transition duration-200 w-full text-start"
                        >
                          Beranda
                        </Link>
                      )}
                    </li>
                    <li>
                      <button
                        onClick={toggleDropdown}
                       className="block px-4 py-2 text-black font-semibold hover:bg-white hover:text-[#696969] transition duration-200 w-full text-start"
                      >
                        Empat Pilar
                      </button>
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.1 }}
                          
                          >
                            <ul className="py-2 ml-5 text-center">
                              <li>
                                <Link
                                  to="/pancasila"
                                 className="block px-4 py-2 text-black font-semibold hover:bg-white hover:text-[#696969] transition duration-200 w-full text-start"
                                >
                                  Pancasila
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/undang-undang-dasar-1945"
                                className="block px-4 py-2 text-black font-semibold hover:bg-white hover:text-[#696969] transition duration-200 w-full text-start"
                                >
                                  Undang-Undang Dasar
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/bti"
                                 className="block px-4 py-2 text-black font-semibold hover:bg-white hover:text-[#696969] transition duration-200 w-full text-start"
                                >
                                 Bhinneka Tunggal Ika
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/negara-kesatuan-republik-indonesia"
                                 className="block px-4 py-2 text-black font-semibold hover:bg-white hover:text-[#696969] transition duration-200 w-full text-start"
                                >
                                 NKRI
                                </Link>
                              </li>
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
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
                          Galeri
                        </a>
                      ) : (
                        <Link
                          to="/#galery1"
                          className="block px-4 py-2 text-black font-semibold hover:bg-white hover:text-[#696969] transition duration-200 w-full text-start"
                        >
                          Galeri
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
  );
};

export default NavbarMobile;
