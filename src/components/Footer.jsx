import React from "react";

const Footer = ({ isFixed }) => {
  return (
   <>
    <div
      className={`lg:flex  hidden z-50 ${isFixed} bottom-0 justify-center text-sm  text-[#0054A3] items-center h-20 sm:h-12 md:h-16 bg-[#E6F7FF] w-full`}
    >
      <p>© Copyright Cahaya Riset Teknologi 2024</p>
    </div>

    <div
      className={`lg:hidden  flex z-50 ${isFixed} bottom-0 justify-center text-sm  text-[#0054A3] items-center h-20  bg-[#E6F7FF] w-full`}
    >
      <p>© Copyright Cahaya Riset Teknologi 2024</p>
    </div>
   </>
  );
};

export default Footer;
