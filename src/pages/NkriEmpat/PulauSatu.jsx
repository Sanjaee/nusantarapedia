import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const PulauSatu = () => {
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
          Pulau Berhala
        </h1>
        <p className="mt-5">
          Pulau Berhala terletak di Sumatera Utara, Indonesia, dan termasuk
          dalam wilayah Kecamatan Tanjung Beringin, Kabupaten Serdang Bedagai.
          Dengan jarak sekitar 100 km dari ibukota provinsi, Medan, pulau ini
          memiliki luas sekitar 2,5 km².
        </p>
        <p className="mt-5">
          Sebagai pulau terluar Indonesia di Selat Malaka dan berbatasan
          langsung dengan Malaysia, Pulau Berhala dijaga oleh Tentara Nasional
          Indonesia (TNI). Pulau ini memiliki topografi bergunung dengan hutan
          lebat dan pantai berpasir putih. Pada awal dan akhir tahun, pantai
          Pulau Berhala menjadi tempat persinggahan penyu untuk bertelur.
        </p>
        <p className="mt-5">
          Pulau ini kaya akan hutan akar bahar dan menyimpan berbagai jenis
          terumbu karang, termasuk Intertidal Coral Reef dan Karang Tengah,
          dalam radius 200 m dari bibir pantai. Terdapat tidak kurang dari 22
          spesies dan jenis ikan karang yang dapat terlihat dari 11 spesies,
          jika Anda menyelam di sekitarnya. Pulau Berhala merupakan destinasi
          yang menarik untuk pengamatan alam dan kegiatan penyelaman.
        </p>
      </motion.div>
    </>
  );
};

export default PulauSatu;
