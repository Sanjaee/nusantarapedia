import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const KerajaanTiga = () => {
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
          Kerajaan Singasari
        </h1>
        <p className="mt-5">
          Kerajaan Singasari, juga disebut Kerajaan Tumapel, adalah kerajaan
          Hindu-Buddha yang berdiri di Jawa Timur antara tahun 1222–1292.
          Didirikan oleh Sri Ranggah Rajasa, yang sering dipanggil Ken Arok,
          kerajaan ini memiliki sejarah yang erat kaitannya dengan sosok Ken
          Angrok (1222–1227), yang merupakan pendiri Wangsa Rajasa dan sekaligus
          kerajaan Tumapel.
        </p>
        <p className="mt-5">
          Lokasi pusat kerajaan ini diyakini berada di daerah Kecamatan
          Singasari, Kabupaten Malang, Provinsi Jawa Timur. Periode kejayaan
          kerajaan ini terjadi dalam rentang waktu yang cukup lama, membentang
          dari tahun 1222 hingga 1292.
        </p>

        <p className="mt-5">
          Sebagai kerajaan Hindu-Buddha, Singasari memiliki warisan budaya yang
          kaya, mencakup kepercayaan, seni, dan arsitektur. Kerajaan ini
          mencapai puncak kejayaannya di paruh pertama abad ke-13, menonjol
          dalam perdagangan dan memiliki pengaruh luas di kawasan sekitarnya.
        </p>

        <p className="mt-5">
          Ken Arok dan Ken Angrok adalah tokoh-tokoh sentral dalam cerita
          kerajaan ini. Mereka bukan hanya pemimpin politik, tetapi juga
          memiliki dampak yang mendalam dalam perkembangan budaya dan agama di
          Jawa Timur pada masa itu.
        </p>

        <p className="mt-5">
          Begitulah, Kerajaan Singasari adalah bagian penting dari sejarah Jawa
          Timur, menciptakan warisan yang masih tercermin dalam peninggalan
          budaya dan sejarah wilayah tersebut hingga saat ini.
        </p>
      </motion.div>
    </>
  );
};

export default KerajaanTiga;
