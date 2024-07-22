import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const IbukotaTiga = () => {
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
          Samarinda
        </h1>
        <p className="mt-5">
          Samarinda, ibu kota Provinsi Kalimantan Timur, Indonesia, merupakan
          kota terbesar di Pulau Kalimantan dengan populasi mencapai 835 ribu
          jiwa pada tahun 2023. Dengan luas wilayah 783 km², Samarinda memiliki
          topografi berbukit dengan ketinggian antara 10 hingga 200 meter di
          atas permukaan laut. Terletak sekitar 113 km dari Ibu Kota Negara
          (IKN) di Penajam Paser Utara, kota ini memiliki posisi strategis
          sebagai gerbang menuju pedalaman Kalimantan Timur melalui jalur
          sungai, darat, dan udara.
        </p>
        <p className="mt-5">
          Sungai Mahakam membelah Kota Samarinda, memberikan akses vital ke
          daerah pedalaman. Kota ini dikenal karena perkembangannya yang pesat,
          termasuk Pelabuhan Samarinda dan Pelabuhan Palaran, keduanya menjadi
          pelabuhan tersibuk di Kalimantan Timur. Samarinda juga mendapatkan
          penghargaan Adipura untuk kebersihan kota pada tahun 2023, menambah
          daftar prestasinya setelah sebelumnya meraihnya pada tahun 1989, 1995,
          dan 2013. Kota ini juga dinobatkan sebagai Indonesia's Most Liveable
          City 2022 oleh IAP (Indonesian Association of Urban and Regional
          Planners).
        </p>
        <p className="mt-5">
          Meskipun memiliki luas wilayah yang hanya 0,56 persen dari Provinsi
          Kalimantan Timur, Samarinda merupakan wilayah terkecil ketiga setelah
          Kota Bontang dan Kota Balikpapan. Terdapat pula fakta menarik bahwa
          kota ini merupakan enklave dari Kabupaten Kutai Kartanegara.
        </p>
      </motion.div>
    </>
  );
};

export default IbukotaTiga;
