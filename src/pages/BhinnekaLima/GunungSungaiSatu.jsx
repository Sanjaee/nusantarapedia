import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const GunungSungaiSatu = () => {
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
          Gunung Lawit
        </h1>
        <p className="mt-5">
          Gunung Lawit itu seperti puncak tertinggi dari sekelompok gunung di
          daerah Kapuas Hulu, Kalimantan Barat. Bayangkan seperti raja gunung
          yang menjulang tinggi dan memandang ke sekitarnya.
        </p>
        <p className="mt-5">
          Gunung ini berada dekat perbatasan Indonesia-Malaysia, seperti penanda
          bahwa sini adalah batas antara dua negara. Secara administratif,
          Gunung Lawit berada di wilayah Kecamatan Embaloh Hulu dan Kecamatan
          Putussibau Utara.
        </p>
        <p className="mt-5">
          Nah, Gunung Lawit ini bagian dari Pegunungan Kapuas Hulu yang
          membentang dari barat ke timur. Jadi, bayangkan seperti bentangan
          gunung yang menjadi garis pembatas antara Kalimantan Barat dan Sarawak
          di Malaysia.
        </p>

        <p className="mt-5">
          Lokasinya masuk dalam Taman Nasional Betung Kerihun, seperti taman
          besar yang melindungi keindahan Gunung Lawit dan sekitarnya. Dan tau
          gak? Sungai-sungai keren seperti Sungai Embaloh dan Sungai Sibau
          bermula di Gunung Lawit. Mereka seperti anak sungai yang lahir dari
          gunung ini dan mengalir ke bawah.
        </p>

        <p className="mt-5">
          Jadi, Gunung Lawit itu seperti pahlawan yang menjaga keindahan alam di
          Kalimantan Barat dan Malaysia.
        </p>
      </motion.div>
    </>
  );
};

export default GunungSungaiSatu;
