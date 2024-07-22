import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const GunungSungaiDua = () => {
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
          Gunung Merapi
        </h1>
        <p className="mt-5">
          Gunung Merapi, di Pulau Jawa, adalah gunung berapi yang sangat tinggi,
          2.930 mdpl (per 2010). Terletak di Kabupaten Sleman, Daerah Istimewa
          Yogyakarta, dan sebagian di Provinsi Jawa Tengah, yaitu Kabupaten
          Magelang di barat, Boyolali di utara dan timur, serta Klaten di
          tenggara. Kawasan sekitar puncaknya menjadi Taman Nasional Gunung
          Merapi sejak 2004.
        </p>
        <p className="mt-5">
          Merapi sering meletus (68 kali sejak 1548), terutama di lereng selatan
          yang berdekatan dengan Kabupaten Sleman. Kota Magelang dan Yogyakarta
          adalah kota besar terdekat, hanya 30 km dari puncak. Permukiman hingga
          ketinggian 1.700 meter di lerengnya dan hanya 4 km dari puncak.
        </p>
        <p className="mt-5">
          Gunung Merapi termasuk dalam proyek Gunung Api Dekade Ini karena
          potensi bencana tinggi. Jadi, Merapi bukan sekadar gunung, tapi juga
          memikat perhatian dunia!
        </p>
      </motion.div>
    </>
  );
};

export default GunungSungaiDua;
