import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const LaguNasionalDua = () => {
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
          Hari Merdeka
        </h1>
        <p className="mt-5">
          "Hari Merdeka" oleh H. Mutahar adalah sebuah ciptaan yang melambangkan
          semangat kemerdekaan Indonesia. Dirilis pada tahun 1946, lagu ini
          menjadi bagian penting dari perjalanan sejarah musik nasional.
          Komposisi yang menggugah ini mencerminkan semangat juang dan
          kegembiraan atas kemerdekaan yang baru diraih.
        </p>
        <p className="mt-5">
          Dalam liriknya, "Hari Merdeka" mengisahkan perjuangan bangsa Indonesia
          dalam merebut kemerdekaan dari belenggu penjajahan. Setiap bait dan
          melodi membawa pendengar pada perjalanan emosional, merangsang rasa
          kebanggaan dan semangat patriotisme.
        </p>
        <p className="mt-5">
          H. Mutahar, melalui kepiawaian musiknya, mampu menyampaikan
          pesan-pesan penting mengenai arti kemerdekaan dan perjuangan. "Hari
          Merdeka" tidak hanya sebuah lagu, tetapi juga sebuah narasi musikal
          yang mengabadikan semangat pejuang dan momen bersejarah.
        </p>

        <p className="mt-5">
          Sebagai karya nasional kedua dari H. Mutahar, "Hari Merdeka" menjadi
          bagian tak terpisahkan dari warisan budaya Indonesia. Semoga lagu ini
          terus dikenang dan menginspirasi generasi-generasi mendatang.
        </p>
      </motion.div>
    </>
  );
};

export default LaguNasionalDua;
