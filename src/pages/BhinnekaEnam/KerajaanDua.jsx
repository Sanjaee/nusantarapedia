import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const KerajaanDua = () => {
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
          Kerajaan Samudra Pasai
        </h1>
        <p className="mt-5">
          Kesultanan Pasai, juga dikenal sebagai Samudera Darussalam atau
          Samudera Pasai, adalah kerajaan Islam yang terletak di pesisir pantai
          utara Sumatra, khususnya di sekitar Kota Lhokseumawe dan Kabupaten
          Aceh Utara, Provinsi Aceh, Indonesia. Kerajaan ini didirikan oleh
          Meurah Silu, yang juga bergelar Sultan Malik as-Saleh, sekitar tahun
          1267.
        </p>
        <p className="mt-5">
          Penelusuran sejarawan mengenai Kesultanan Pasai didasarkan pada
          sumber-sumber seperti Hikayat Raja-raja Pasai, serta peninggalan
          sejarah, adat istiadat, dan budaya lokal yang masih dilestarikan oleh
          masyarakat pesisir pantai utara Sumatra. Bukti sejarah tersebut
          termasuk makam-makam raja yang pertama kali muncul pada tahun 710
          Masehi, serta penemuan koin emas dan perak yang mencantumkan nama
          keturunan raja. Penemuan makam tersebut menunjukkan bahwa Kesultanan
          Pasai telah berdiri sebelum tahun 710 Masehi, menandakan kehadiran
          Islam di Nusantara sebelum periode tersebut.
        </p>

        <p className="mt-5">
          Kesultanan Pasai juga tercatat dalam kitab "Rihlah ila l-Masyriq"
          (Pengembaraan ke Timur) karya Abu Abdullah ibn Batuthah (1304–1368),
          seorang musafir asal Maroko yang singgah di negeri ini pada tahun
          1345. Kesultanan Pasai akhirnya runtuh setelah mengalami serangan dari
          Portugal pada tahun 1521.
        </p>
      </motion.div>
    </>
  );
};

export default KerajaanDua;
