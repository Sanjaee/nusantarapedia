import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const IbukotaDua = () => {
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
          Manokwari
        </h1>
        <p className="mt-5">
          Kabupaten Manokwari, ibu kota Provinsi Papua Barat, Indonesia,
          membentang di luas wilayah seluas 3.168,28 km². Menurut data Badan
          Pusat Statistik Kabupaten Manokwari tahun 2021, jumlah penduduknya
          mencapai 192.633 jiwa. Kabupaten ini menjadi pusat administratif dan
          memiliki peran strategis dalam pembangunan provinsi. Dengan keindahan
          alam dan kekayaan budaya, Kabupaten Manokwari turut memperkaya
          keberagaman Papua Barat.
        </p>
      </motion.div>
    </>
  );
};

export default IbukotaDua;
