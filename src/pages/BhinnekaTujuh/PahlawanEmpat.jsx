import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const PahlawanEmpat = () => {
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
          Tuanku Imam Bonjol
        </h1>
        <p className="mt-5">
          Tuanku Imam Bonjol, lahir di Bonjol, Luhak Agam, Pagaruyung, pada
          tahun 1772 dan wafat dalam pengasingan serta dimakamkan di Lotta,
          Pineleng, Minahasa, pada 6 November 1864. Beliau merupakan seorang
          ulama, pemimpin, dan pejuang yang gigih melawan Belanda selama Perang
          Padri pada periode 1803–1838.
        </p>
        <p className="mt-5">
          Prestasinya yang luar biasa mengantarkannya diakui sebagai Pahlawan
          Nasional Indonesia, sesuai dengan Surat Keputusan Presiden RI Nomor
          087/TK/Tahun 1973, tanggal 6 November 1973. Riwayat hidup Tuanku Imam
          Bonjol dapat ditemukan dalam naskah asli yang tersimpan di Dinas
          Perpustakaan dan Kearsipan Provinsi Sumatera Barat. Dedikasinya dalam
          melawan penjajahan Belanda tetap dihargai dan diabadikan dalam sejarah
          Indonesia.
        </p>
      </motion.div>
    </>
  );
};

export default PahlawanEmpat;
