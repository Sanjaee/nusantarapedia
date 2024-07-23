import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const LayoutMenuNkri = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isNkriVisible, setIsNkriVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
   
    if (location.pathname.startsWith("/kuliner")) {
      setActiveMenu(14);
    } else if (location.pathname.startsWith("/ibukota")) {
      setActiveMenu(15);
    } else if (location.pathname.startsWith("/nasional")) {
      setActiveMenu(16);
    } else if (location.pathname.startsWith("/pulau")) {
      setActiveMenu(17);
    } else {
      setActiveMenu(null);
      setIsNkriVisible(false);
    }
  }, [location.pathname]);

  const handleButtonClick = (menuIndex) => {
    setActiveMenu(activeMenu === menuIndex ? null : menuIndex);
  };

  const toggleNkriVisibility = () => {
    setIsNkriVisible(!isNkriVisible);
  };
  return (
    <>
      <div className="flex items-center justify-center bg-[#0054A3] p-4 shadow-2xl">
        <button
          className="text-[20px] w-full font-bold text-white"
          onClick={toggleNkriVisibility}
        >
          NKRI
        </button>
      </div>
      <AnimatePresence>
        {isNkriVisible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2"
          >
            {/* kuliner */}
            <div>
              <button
                className="w-full text-left py-3 px-6 bg-[#0054A3] text-white transition-colors"
                onClick={() => handleButtonClick(14)}
              >
                Kuliner
              </button>
              <AnimatePresence>
                {activeMenu === 14 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 space-y-2 overflow-hidden"
                  >
                    <div className="flex flex-col bg-white">
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/kuliner-1"
                            ? "bg-[#E6F7FF]"
                            : "hover:bg-[#E6F7FF]"
                        } transition-colors`}
                        to="/kuliner-1"
                      >
                        Rendang
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/kuliner-2"
                            ? "bg-[#E6F7FF]"
                            : "hover:bg-[#E6F7FF]"
                        } transition-colors`}
                        to="/kuliner-2"
                      >
                        Karedok
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/kuliner-3"
                            ? "bg-[#E6F7FF]"
                            : "hover:bg-[#E6F7FF]"
                        } transition-colors`}
                        to="/kuliner-3"
                      >
                        Kerak Telor
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/kuliner-4"
                            ? "bg-[#E6F7FF]"
                            : "hover:bg-[#E6F7FF]"
                        } transition-colors`}
                        to="/kuliner-4"
                      >
                        Empal Gentong
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ibukota */}
            <div>
              <button
                className="w-full text-left py-3 px-6 bg-[#0054A3] text-white line-clamp-1 whitespace-nowrap transition-colors"
                onClick={() => handleButtonClick(15)}
              >
                Ibu Kota Provinsi
              </button>
              <AnimatePresence>
                {activeMenu === 15 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 space-y-2 overflow-hidden"
                  >
                    <div className="flex flex-col bg-white">
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/ibukota-1"
                            ? "bg-[#E6F7FF]"
                            : "hover:bg-[#E6F7FF]"
                        } transition-colors`}
                        to="/ibukota-1"
                      >
                        Denpasar
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/ibukota-2"
                            ? "bg-[#E6F7FF]"
                            : "hover:bg-[#E6F7FF]"
                        } transition-colors`}
                        to="/ibukota-2"
                      >
                        Manokwari
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/ibukota-3"
                            ? "bg-[#E6F7FF]"
                            : "hover:bg-[#E6F7FF]"
                        } transition-colors`}
                        to="/ibukota-3"
                      >
                        Samarinda
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/ibukota-4"
                            ? "bg-[#E6F7FF]"
                            : "hover:bg-[#E6F7FF]"
                        } transition-colors`}
                        to="/ibukota-4"
                      >
                        Semarang
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* lagu nasional */}
            <div>
              <button
                className="w-full text-left py-3 px-6 bg-[#0054A3] text-white line-clamp-1 whitespace-nowrap transition-colors"
                onClick={() => handleButtonClick(16)}
              >
                Lagu Nasional
              </button>
              <AnimatePresence>
                {activeMenu === 16 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 space-y-2 overflow-hidden"
                  >
                    <div className="flex flex-col bg-white">
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/nasional-1"
                            ? "bg-[#E6F7FF]"
                            : "hover:bg-[#E6F7FF]"
                        } transition-colors`}
                        to="/nasional-1"
                      >
                        Halo Halo Bandung
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/nasional-2"
                            ? "bg-[#E6F7FF]"
                            : "hover:bg-[#E6F7FF]"
                        } transition-colors`}
                        to="/nasional-2"
                      >
                        Hari Merdeka
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/nasional-3"
                            ? "bg-[#E6F7FF]"
                            : "hover:bg-[#E6F7FF]"
                        } transition-colors`}
                        to="/nasional-3"
                      >
                        Rayuan Pulau Kelapa
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/nasional-4"
                            ? "bg-[#E6F7FF]"
                            : "hover:bg-[#E6F7FF]"
                        } transition-colors`}
                        to="/nasional-4"
                      >
                        Tanah Air Ku
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Pulau Terdepan & Terluar */}
            <div>
              <button
                className="w-full text-left py-3 px-6 bg-[#0054A3] text-white line-clamp-1 whitespace-nowrap transition-colors"
                onClick={() => handleButtonClick(17)}
              >
                Pulau Terdepan & Terluar
              </button>
              <AnimatePresence>
                {activeMenu === 17 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 space-y-2 overflow-hidden"
                  >
                    <div className="flex flex-col bg-white">
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/pulau-1"
                            ? "bg-[#E6F7FF]"
                            : "hover:bg-[#E6F7FF]"
                        } transition-colors`}
                        to="/pulau-1"
                      >
                        Pulau Berhala
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/pulau-2"
                            ? "bg-[#E6F7FF]"
                            : "hover:bg-[#E6F7FF]"
                        } transition-colors`}
                        to="/pulau-2"
                      >
                        Pulau Miangas
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/pulau-3"
                            ? "bg-[#E6F7FF]"
                            : "hover:bg-[#E6F7FF]"
                        } transition-colors`}
                        to="/pulau-3"
                      >
                        Pulau Rote
                      </Link>
                      <Link
                        className={`block py-2 px-4 ${
                          location.pathname === "/pulau-4"
                            ? "bg-[#E6F7FF]"
                            : "hover:bg-[#E6F7FF]"
                        } transition-colors`}
                        to="/pulau-4"
                      >
                        Pulau Weh
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LayoutMenuNkri;
