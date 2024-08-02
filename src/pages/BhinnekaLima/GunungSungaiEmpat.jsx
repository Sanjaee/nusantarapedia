import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const GunungSungaiEmpat = () => {
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
          Sungai Landak
        </h1>
        <p className="mt-5">
          Sungai Landak adalah seperti jalur air alami yang membentang di
          Provinsi Kalimantan Barat, Indonesia. Ini seperti anak sungai dari
          sungai besar bernama Kapuas. Bayangkan seperti cabang kecil dari
          sungai yang lebih besar.
        </p>
        <p className="mt-5">
          Sungai ini berawal dari daerah pegunungan di Pegunungan Niut, di
          perbatasan Kabupaten Landak dan Kabupaten Bengkayang. Di sana, airnya
          bermula dari lereng timur Gunung Nyiut, yang tingginya sekitar 1.701
          mdpl. Seperti air yang turun dari gunung ke bawah.
        </p>
        <p className="mt-5">
          Lalu, sungai ini mengalir ke arah barat daya, melewati wilayah
          Kabupaten Landak, Kabupaten Kubu Raya, dan Kota Pontianak. Bayangkan
          seperti sebuah jalan air yang mengalir melintasi tempat-tempat ini.
        </p>

        <p className="mt-5">
          Akhirnya, Sungai Landak bertemu dengan Sungai Kapuas di wilayah Kota
          Pontianak. Sungai Kapuas ini seperti sungai besar yang menerima air
          dari banyak anak sungai. Jadi, Sungai Landak ini seperti anak sungai
          kecil yang bergabung dengan sungai besar. Semua air ini akhirnya akan
          mencapai laut. Itu seperti perjalanan air yang panjang dari pegunungan
          ke lautan lepas.
        </p>
      </motion.div>
    </>
  );
};

export default GunungSungaiEmpat;
