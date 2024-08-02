import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const UudDuaTiga = () => {
  return (
    <>
      <AllMenu />
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full text-sm sm:pl-[350px] px-6 pb-40"
      >
        <h1 className="text-2xl text-[#0054A3] font-bold text-center">
          Bahasa Minang
        </h1>
        <p className="mt-5">
          Bahasa Minangkabau, atau Baso Minangkabau, merupakan bahasa
          Austronesia yang digunakan oleh Suku Minangkabau. Selain di wilayah
          asalnya, bahasa ini juga dituturkan melalui diaspora masyarakat
          Minangkabau di beberapa daerah di Sumatera Utara, Jambi, Bengkulu,
          sebagian Aceh, sebagian Riau, dan wilayah luar negeri seperti Negeri
          Sembilan.
        </p>
        <p className="mt-5">
          Bahasa Minangkabau termasuk dalam rumpun bahasa Minangkabauik yang
          berasal dari rumpun Melayu-Sumbawa, juga dikenal sebagai 'rumpun
          bahasa Indonesia Barat.' Rumpun ini turun dari rumpun Melayu-Polinesia
          yang merupakan bagian dari keluarga bahasa Austronesia. Dengan sejarah
          dan distribusi geografisnya, Bahasa Minangkabau memainkan peran
          penting dalam membentuk identitas dan budaya Suku Minangkabau.
        </p>
      </motion.div>
    </>
  );
};

export default UudDuaTiga;
