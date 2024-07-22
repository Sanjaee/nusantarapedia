import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";

const NavbarBE = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const logout = () => {
    Cookies.remove("token");
    window.location.reload();
  };
  return (
    <>
      {/* Desktop */}
      <div
        className={`custom-1000:h-16 custom-1200:h-24 custom-1200:text-[20px] px-20 z-50 bg-gray-500 w-full lg:flex hidden justify-between items-center top-0 fixed`}
      >
        <div className="flex items-center">
          <ul className="flex space-x-8 text-[#FFFFFF] custom-1200:text-[20px] custom-1000:text-sm font-semibold">
            <li>
              <Link
                to="/backend/testimoni"
                className={`hover:text-gray-400 cursor-pointer`}
              >
                testimoni
              </Link>
            </li>
            <li>
              <Link
                to="/backend/galery"
                className={`hover:text-gray-400 cursor-pointer`}
              >
                galery
              </Link>
            </li>

            <li>
              <Link
                to="/backend/mitra"
                className={`hover:text-gray-400 cursor-pointer`}
              >
                mitra
              </Link>
            </li>

            <li>
              <Link to="/" className={`hover:text-gray-400 cursor-pointer`}>
                Kembali Ke Blog
              </Link>
            </li>
            <li>
              <button
                className={`hover:text-red-400 cursor-pointer`}
                onClick={logout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden flex justify-end items-center fixed top-0 h-14 z-50 bg-gray-500 w-full px-4">
        <div className="flex items-center">
          <button onClick={toggleSidebar}>
            <img className="w-10" src="/hamburger.svg" alt="bg" />
          </button>
          <AnimatePresence>
            {isSidebarOpen && (
              <>
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="fixed  top-0 left-0 h-full bg-gray-500 w-64 shadow-lg z-50"
                >
                  <div className="p-4">
                    <button
                      onClick={toggleSidebar}
                      className="text-white text-lg"
                    >
                      X
                    </button>

                    <ul className="mt-4">
                      <li>
                        <Link
                          to="/backend/testimoni"
                          className="block px-4 py-2 text-white hover:bg-gray-600 hover:text-gray-300 transition duration-200"
                        >
                          testimoni
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/backend/galery"
                          className="block px-4 py-2 text-white hover:bg-gray-600 hover:text-gray-300 transition duration-200"
                        >
                          galery
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/backend/mitra"
                          className="block px-4 py-2 text-white hover:bg-gray-600 hover:text-gray-300 transition duration-200"
                        >
                          mitra
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/"
                          className="block px-4 py-2 mt-4 text-white hover:bg-gray-600 hover:text-gray-300 transition duration-200"
                        >
                          Kembali Ke Blog
                        </Link>
                      </li>
                      <li>
                        <button
                          className="block w-full py-2 mt-5 text-white hover:bg-gray-600 hover:text-gray-300 transition duration-200"
                          onClick={logout}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default NavbarBE;
