import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const PulauEmpat = () => {
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
          Pulau Weh
        </h1>
        <p className="mt-5">
          Pulau Weh, atau dikenal sebagai Pulau Sabang, merupakan sebuah pulau
          vulkanik kecil yang terletak di barat laut Pulau Sumatra. Pada zaman
          Pleistosen, pulau ini pernah terhubung dengan Pulau Sumatra sebelum
          akhirnya terpisah oleh laut setelah letusan gunung berapi terakhir.
          Pulau Weh terletak di Laut Andaman, dan kota terbesarnya, Sabang,
          adalah kota paling barat di Indonesia.
        </p>
        <p className="mt-5">
          Keistimewaan Pulau Weh terletak pada ekosistemnya yang kaya.
          Pemerintah Indonesia telah menetapkan wilayah seluas 60 km² di sekitar
          pulau sebagai suaka alam, baik di darat maupun di laut. Pulau ini
          dikenal sebagai habitat hiu bermulut besar di pantainya. Selain itu,
          Pulau Weh juga menjadi tempat tinggal satu-satunya spesies katak yang
          terancam, Bufo valhallae (genus Bufo). Terumbu karang di sekitar pulau
          menyajikan habitat bagi berbagai spesies ikan yang beragam.
        </p>
      </motion.div>
    </>
  );
};

export default PulauEmpat;
