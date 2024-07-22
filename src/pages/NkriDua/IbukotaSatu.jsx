import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";
const IbukotaSatu = () => {
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
          Denpasar
        </h1>
        <p className="mt-5">
          Denpasar merupakan ibu kota, pusat pemerintahan, dan pusat ekonomi
          dari provinsi Bali, Indonesia. Sebagai kota terbesar di Kepulauan Nusa
          Tenggara dan kedua terbesar di wilayah Indonesia Timur setelah Kota
          Makassar, Denpasar mengalami pertumbuhan industri pariwisata yang
          signifikan di Pulau Bali.
        </p>
        <p className="mt-5">
          Pengembangan industri pariwisata telah menjadikan Denpasar sebagai
          pusat kegiatan bisnis, membawa dampak positif terhadap pendapatan per
          kapita dan pertumbuhan kota ini di provinsi Bali. Dengan potensi
          tersebut, pemerintah merencanakan untuk menjadikan tiga kota, termasuk
          Medan, Denpasar, dan Makassar, sebagai kota metropolitan baru. Rencana
          ini diatur dalam Rencana Tata Ruang Wilayah Nasional (Perpres
          45/2011).
        </p>
      </motion.div>
    </>
  );
};

export default IbukotaSatu;
