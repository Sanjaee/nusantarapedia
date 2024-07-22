import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const SilaDuaEmpat = () => {
  return (
    <>
      <AllMenu />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
       className="w-full text-sm sm:pl-[350px] pl-2 pr-4 pb-40"
      >
        <h1 className="text-2xl text-[#0054A3] font-bold text-center">
          Saling Tolong Menolong
        </h1>
        <p className="mt-5">
          Saling tolong menolong adalah sikap yang tercermin dalam kemanusiaan
          yang adil dan beradab. Dengan saling membantu, kita menciptakan
          lingkungan sosial yang inklusif dan memberikan kontribusi positif bagi
          kehidupan bersama. Tindakan tolong-menolong mencerminkan nilai-nilai
          kepedulian, empati, dan gotong-royong, yang merupakan dasar dari
          kemanusiaan yang adil dan beradab. Dengan bersikap saling membantu,
          kita dapat membangun masyarakat yang lebih baik dan menjaga
          keseimbangan dalam kehidupan bersama.
        </p>
      </motion.div>
    </>
  );
};

export default SilaDuaEmpat;
