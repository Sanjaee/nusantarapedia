import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const KerajaanEmpat = () => {
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
          Kerajaan Ternate
        </h1>
        <p className="mt-5">
          Kesultanan Ternate, atau dikenal sebagai Kerajaan Gapi, merupakan
          salah satu dari empat kerajaan Islam di Kepulauan Maluku dan salah
          satu kerajaan Islam tertua di Nusantara. Kerajaan ini didirikan oleh
          Baab Mashur Malamo pada tahun 1257 dan memainkan peran penting di
          kawasan timur Nusantara dari abad ke-13 hingga ke-19.
        </p>
        <p className="mt-5">
          Kesultanan Ternate mencapai puncak kejayaannya pada paruh abad ke-16,
          terutama berkat perdagangan rempah-rempah dan kekuatan militernya yang
          hebat. Pada masa jaya kekuasaannya, wilayahnya meliputi Maluku,
          Sulawesi bagian utara, timur, dan tengah, serta sebagian selatan
          kepulauan Filipina hingga Kepulauan Marshall di Pasifik.
        </p>
        <p className="mt-5">
          Dalam catatan sejarah, kesultanan ini memiliki dampak yang signifikan
          dalam membentuk hubungan dagang dan politik di kawasan tersebut.
          Kesultanan Ternate dikenal sebagai pusat perdagangan rempah-rempah,
          terutama cengkih dan pala, yang sangat berharga pada masa itu.
        </p>
      </motion.div>
    </>
  );
};

export default KerajaanEmpat;
