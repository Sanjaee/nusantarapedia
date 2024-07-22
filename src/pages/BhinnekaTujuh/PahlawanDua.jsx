import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const PahlawanDua = () => {
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
          Martha Christina Tiahahu
        </h1>
        <p className="mt-5">
          Martha Christina Tiahahu, lahir pada 4 Januari 1800 di desa Abubu,
          Nusalaut, Maluku Tengah, merupakan seorang pejuang kemerdekaan
          Indonesia. Pada usia 17 tahun, ia berani mengangkat senjata melawan
          tentara Belanda. Ayahnya, Kapitan Paulus Tiahahu, adalah seorang
          kapitan dari negeri Abubu yang turut membantu Thomas Matulessy dalam
          Perang Pattimura pada tahun 1817.
        </p>
        <p className="mt-5">
          M.C. Tiahahu terkenal karena keberaniannya dalam pertempuran melawan
          Belanda. Meskipun masih remaja, ia aktif berpartisipasi dalam
          perjuangan, mendampingi ayahnya dalam setiap pertempuran, baik di
          Pulau Nusalaut maupun di Pulau Saparua. Keberaniannya terlihat di Desa
          Ouw-Ullath, Pulau Saparua, di mana ia turut menggempur musuh bersama
          pejuang lainnya.
        </p>
        <p className="mt-5">
          Setelah terjadi penangkapan dan penghukuman terhadap para pejuang,
          termasuk ayahnya yang dihukum mati tembak, Martha Christina Tiahahu
          berusaha untuk membebaskan ayahnya. Namun, ia sendiri tertangkap dan
          diasingkan ke Pulau Jawa. Meskipun jatuh sakit, ia menolak pengobatan
          dari orang Belanda.
        </p>

        <p className="mt-5">
          Martha Christina Tiahahu meninggal di Kapal Perang Eversten dan
          jasadnya dihormati dengan dilemparkan ke Laut Banda antara Pulau Buru
          dan Pulau Manipa pada tanggal 2 Januari 1818. Pengorbanan dan
          perjuangannya diakui oleh Pemerintah Republik Indonesia, dan ia
          dinyatakan sebagai Pahlawan Kemerdekaan Nasional.
        </p>
      </motion.div>
    </>
  );
};

export default PahlawanDua;
