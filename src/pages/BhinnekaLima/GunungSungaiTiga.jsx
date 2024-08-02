import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const GunungSungaiTiga = () => {
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
          Sungai Kapuas
        </h1>
        <p className="mt-5">
          Sungai Kapuas, di Kalimantan Barat, seperti sebuah jalan air panjang
          yang membentang di pulau Kalimantan. Ini adalah sungai terpanjang di
          Indonesia, sepanjang 1.143 km! Bayangkan seperti aliran air besar yang
          menjelajahi hutan, dataran, dan kota.
        </p>
        <p className="mt-5">
          Nama "Kapuas" diambil dari daerah Kapuas Hulu, tapi Kesultanan Banjar
          menyebutnya Batang Lawai. Sungai ini adalah rumah bagi lebih dari 700
          jenis ikan, termasuk ikan langka dan yang terancam punah. Sungai ini
          seperti tempat tinggal bagi ikan-ikan yang beraneka ragam.
        </p>
        <p className="mt-5">
          Meski keberagaman ikan dan kelestarian hutan masih terjaga, sungai
          Kapuas belakangan ini menghadapi masalah. Pencemaran logam berat dan
          bahan kimia dari penambangan emas dan perak merusak kebersihan sungai.
          Namun, sungai ini tetap penting bagi masyarakat setempat, terutama
          suku Dayak dan Melayu.
        </p>

        <p className="mt-5">
          Sungai Kapuas juga menjadi jalan transportasi murah yang menghubungkan
          daerah pesisir sampai pedalaman Kalimantan Barat. Bagi banyak orang,
          sungai ini adalah tempat untuk menangkap ikan dan mencari nafkah.
          Sungai Kapuas membentang hingga ke Kalimantan Tengah, menambah
          keindahan dan keberagaman sungai ini.
        </p>

        <p className="mt-5">
          Pada Hari Kemerdekaan Indonesia, bendera Merah Putih dikibarkan di
          atas ponton di tengah sungai ini. Ini adalah momen spesial yang
          melibatkan banyak komunitas dan merayakan keberagaman serta kehidupan
          di sepanjang Sungai Kapuas. Sungainya bukan hanya air, tapi juga urat
          nadi bagi kehidupan dan kemerdekaan.
        </p>
      </motion.div>
    </>
  );
};

export default GunungSungaiTiga;
