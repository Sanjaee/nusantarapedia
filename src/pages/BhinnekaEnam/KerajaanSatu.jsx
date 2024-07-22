import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const KerajaanSatu = () => {
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
          Kerajaan Luwu
        </h1>
        <p className="mt-5">
          Kedatuan Luwu, yang juga dieja sebagai Luwuq, Wareq, Luwok, atau
          Luwu', merupakan salah satu kerajaan Bugis tertua. Pada tahun 1889,
          Gubernur Hindia Belanda di Makassar menyatakan bahwa masa kejayaan
          Luwu terjadi antara abad ke-10 hingga abad ke-14, namun tidak ada
          bukti lebih lanjut yang dapat mendukung klaim ini. Luwu, bersama
          dengan Wewang Nriwuk dan Tompotikka, adalah tiga kerajaan Bugis
          pertama yang disebutkan dalam epik "I La Galigo," karya orang Bugis.
          Meskipun demikian, "I La Galigo" tidak dapat dianggap sebagai teks
          sejarah yang akurat karena penuh dengan mitos, sehingga keberadaan
          kerajaan-kerajaan ini masih dipertanyakan.
        </p>
        <p className="mt-5">
          Pusat kerajaan Luwu terletak di Malangke, yang saat ini merupakan
          bagian dari Kabupaten Luwu Utara, Sulawesi Selatan. Kerajaan Luwu juga
          disebutkan dalam kitab Kakawin Nagarakretagama pada abad ke-14 sebagai
          daerah di bawah pengaruh kerajaan Majapahit, bersama dengan Lombok
          Mirah (Lombok), Bantayan (Bantaeng), dan Udamakatraya (Kepulauan
          Talaud) serta pulau-pulau di sekitarnya pada periode pemerintahan
          Prabu Hayam Wuruk (1350-1389 M). Meskipun tidak ada bukti sejarah
          penaklukan kerajaan Luwu oleh Majapahit, namun catatan sejarah
          mencatat hubungan melalui pernikahan antara kedua kerajaan tersebut.
        </p>
      </motion.div>
    </>
  );
};

export default KerajaanSatu;
