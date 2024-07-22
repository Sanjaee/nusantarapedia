import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const LaguNasionalEmpat = () => {
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
          Tanah Air Ku
        </h1>
        <p className="mt-5">
          "Tanah Airku" adalah sebuah karya indah yang lahir dari tangan kreatif
          Ibu Sud, seorang tokoh yang memberikan kontribusi besar dalam dunia
          musik Indonesia. Lagu ini membanggakan keelokan alam Indonesia melalui
          lirik yang sarat makna.
        </p>
        <p className="mt-5">
          Diciptakan sebagai lagu nasional Indonesia, "Tanah Airku" bukan hanya
          sekadar irama yang merdu, tetapi juga sebuah perwakilan suara bangsa.
          Melalui nada dan kata-kata, lagu ini mengajak pendengar untuk
          merenungkan kekayaan alam, keberagaman budaya, dan keindahan tanah air
          tercinta.
        </p>
        <p className="mt-5">
          Seperti sebuah karya seni, "Tanah Airku" menjadi simbol semangat
          persatuan dan cinta tanah air. Ibu Sud mampu merangkai kata-kata dan
          melodi dengan apik sehingga lagu ini tak hanya sekadar lagu, melainkan
          sebuah pengingat akan kebesaran Indonesia.
        </p>

        <p className="mt-5">
          Semoga "Tanah Airku" terus mengalun dan menyentuh hati setiap
          generasi, mengingatkan kita akan pentingnya menjaga, mencintai, dan
          membangun negeri tercinta ini.
        </p>
      </motion.div>
    </>
  );
};

export default LaguNasionalEmpat;
