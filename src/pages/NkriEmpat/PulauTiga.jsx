import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const PulauTiga = () => {
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
          Pulau Rote
        </h1>
        <p className="mt-5">
          Kepulauan Rote, atau Kepulauan Roti, adalah sebuah kepulauan di
          Provinsi Nusa Tenggara Timur, Indonesia, yang terletak di wilayah
          paling selatan Indonesia. Daerah ini terkenal dengan budidaya lontar,
          keindahan pantai, musik sasando, dan topi adat Ti'i langga. Pulau
          terbesar di kepulauan ini adalah Pulau Rote, serta beberapa pulau
          kecil di sekitarnya.
        </p>
        <p className="mt-5">
          Kepulauan Rote memiliki status sebagai kabupaten dan dikenal dengan
          nama Kabupaten Rote Ndao, sesuai dengan Undang-Undang Nomor 9 Tahun
          2002. Wilayah ini menawarkan keunikan budaya dan alam, menjadikannya
          destinasi menarik untuk menjelajahi keanekaragaman Indonesia.
        </p>
      </motion.div>
    </>
  );
};

export default PulauTiga;
