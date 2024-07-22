import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const LaguNasionalTiga = () => {
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
          Rayuan Pulau Kelapa
        </h1>
        <p className="mt-5">
          "Rayuan Pulau Kelapa" adalah sebuah lagu yang indah, diciptakan oleh
          maestro musik Indonesia, Ismail Marzuki (1914-1958). Lirik lagu ini
          memaparkan kecantikan alam Indonesia, memuja flora, kepulauan, dan
          pesonanya yang tak terlukiskan.
        </p>
        <p className="mt-5">
          Lagu ini bukan hanya sebuah komposisi musik, tetapi juga menjadi jejak
          nostalgia bagi ekspatriat Indonesia, khususnya mereka yang
          meninggalkan tanah airnya untuk Belanda pada era 1940-an dan 1950-an,
          pasca kemerdekaan. Liriknya seperti sebuah panggilan pulang,
          mengingatkan akan kekayaan alam dan keindahan negeri yang
          ditinggalkan.
        </p>
        <p className="mt-5">
          Pada masa pra-demokrasi di bawah pemerintahan Presiden Suharto, lagu
          ini bahkan menjadi bagian dari ritual penutupan setiap malam di
          jaringan televisi nasional TVRI. Pada tahun 2014, lagu ini kembali
          meramaikan layar TV sebagai lagu penutup, menggantikan "Bagimu Negeri"
          oleh Kusbini. Penggunaannya juga meluas ke stasiun lain seperti
          Indosiar, Trans7, dan Rajawali Televisi.
        </p>

        <p className="mt-5">
          Tak hanya di dalam negeri, "Rayuan Pulau Kelapa" meraih popularitas di
          luar negeri, terutama di Uni Soviet pada tahun 1950-an. Rekaman lagu
          oleh Gordon Tobing mencapai popularitas yang luar biasa di sana, dan
          lagu ini diaransemen ulang dalam bahasa Rusia oleh komposer Soviet
          Vitaly Geviksman, dinyanyikan dengan penuh emosi oleh penyanyi Maya
          Golovnya.
        </p>
      </motion.div>
    </>
  );
};

export default LaguNasionalTiga;
