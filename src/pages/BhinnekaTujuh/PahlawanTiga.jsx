import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const PahlawanTiga = () => {
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
          Sultan Hasanuddin
        </h1>
        <p className="mt-5">
          Sultan Hasanuddin, yang dijuluki Ayam Jantan dari Timur oleh Belanda,
          adalah sosok pahlawan nasional Indonesia yang lahir pada 12 Januari
          1631 dengan nama Muhammad Bakir I Mallombasi Daeng Mattawang Karaeng
          Bonto Mangape. Ia merupakan Sultan Gowa ke-16.
        </p>
        <p className="mt-5">
          Setelah naik takhta, ia dikenal sebagai Sultan Hasanuddin. Namun,
          setelah meninggal, ia digelar Tumenanga Ri Balla Pangkana.
          Keberaniannya membuatnya dijuluki De Haantjes van Het Osten oleh
          Belanda, yang artinya Ayam Jantan dari Timur. Pahlawan ini dimakamkan
          di Katangka, Kabupaten Gowa.
        </p>
        <p className="mt-5">
          Sultan Hasanuddin diangkat sebagai Pahlawan Nasional melalui Surat
          Keputusan Presiden No. 087/TK/1973, tanggal 6 November 1973. Sebagai
          tokoh yang berani dan penuh semangat, warisannya terus dihormati dalam
          sejarah Indonesia.
        </p>
      </motion.div>
    </>
  );
};

export default PahlawanTiga;
