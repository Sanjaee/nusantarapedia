import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const IbukotaEmpat = () => {
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
          Semarang
        </h1>
        <p className="mt-5">
          Semarang, ibu kota Jawa Tengah, adalah kota metropolitan terbesar ke-5
          di Indonesia. Dengan populasi sekitar 1.693.035 jiwa pada 2023,
          kawasan mega-urban Semarang, termasuk wilayah metropolitan
          Kedungsepur, memiliki populasi sekitar 7,3 juta jiwa.
        </p>
        <p className="mt-5">
          Dipimpin oleh Wali Kota Hevearita Gunaryanti Rahayu, Semarang memiliki
          lokasi strategis sekitar 477 km sebelah timur Jakarta. Wilayahnya
          meliputi batas Laut Jawa di utara, Kabupaten Demak di timur, Kabupaten
          Semarang di selatan, dan Kabupaten Kendal di barat.
        </p>
        <p className="mt-5">
          Nama "Semarang" berasal dari "asem" (pohon asam) dan "arang" (jarang).
          Dulu dikenal sebagai "Samarang" pada era kolonial, kini kembali
          menggunakan nama Semarang.
        </p>

        <p className="mt-5">
          Dengan pembagian wilayah seperti Semarang Tengah, Timur, Selatan,
          Barat, dan Utara, kota ini memudahkan dalam memberikan pelayanan.
        </p>
      </motion.div>
    </>
  );
};

export default IbukotaEmpat;
