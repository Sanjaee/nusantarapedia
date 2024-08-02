import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const LaguNasionalSatu = () => {
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
          Halo Halo Bandung
        </h1>
        <p className="mt-5">
          "Halo, Halo Bandung" adalah sebuah masterpiece ciptaan Ismail Marzuki
          yang melukiskan semangat perjuangan rakyat kota Bandung pasca
          kemerdekaan Indonesia pada tahun 1946, terutama dalam peristiwa
          bersejarah Bandung Lautan Api pada 23 Maret 1946. Lagu ini tidak hanya
          sekadar komposisi musik, melainkan sebuah cerminan kuatnya semangat
          patriotisme dan kebersamaan.
        </p>
        <p className="mt-5">
          Dalam liriknya, "Halo, Halo Bandung" merangkai kisah heroik tentang
          perlawanan dan semangat kebersamaan dalam menghadapi tantangan berat.
          Ismail Marzuki, melalui kepiawaiannya, mampu menangkap esensi
          peristiwa bersejarah tersebut dan mentransformasikannya menjadi karya
          seni yang timeless.
        </p>
        <p className="mt-5">
          Lagu ini menjadi simbol kekuatan dan tekad rakyat Bandung yang tidak
          kenal menyerah di tengah-tengah cobaan. Melalui melodi yang menggugah
          dan lirik yang menyentuh, "Halo, Halo Bandung" tetap menjadi bagian
          tak terpisahkan dari warisan budaya Indonesia, mengabadikan semangat
          perjuangan dan kebangkitan sebuah kota yang tangguh.
        </p>

        <p className="mt-5">
          Semoga karya megah ini terus dihargai dan menginspirasi
          generasi-generasi yang akan datang, menjadi pengingat akan kekuatan
          rakyat dalam menghadapi cobaan sejarah.
        </p>
      </motion.div>
    </>
  );
};

export default LaguNasionalSatu;
