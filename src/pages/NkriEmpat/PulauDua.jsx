import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const PulauDua = () => {
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
          Pulau Miangas
        </h1>
        <p className="mt-5">
          Miangas merupakan pulau terluar Indonesia yang terletak di utara dan
          dekat perbatasan dengan Filipina. Pulau ini termasuk dalam Desa
          Miangas, Kecamatan Miangas, Kabupaten Kepulauan Talaud, Provinsi
          Sulawesi Utara, Indonesia. Miangas menjadi bagian dari gugusan
          Kepulauan Nanusa dan berbatasan langsung dengan Filipina.
        </p>
        <p className="mt-5">
          Sebagai salah satu pulau terluar Indonesia, Miangas menghadapi
          berbagai tantangan, termasuk masalah perbatasan, potensi terorisme,
          dan penyelundupan. Pulau ini memiliki luas sekitar 3,15 km² dan jumlah
          penduduk sekitar 678 jiwa pada tahun 2003, dengan mayoritas penduduk
          berasal dari Suku Talaud. Karena kedekatannya dengan Filipina,
          perkawinan antara penduduk Miangas dan warga Filipina sering terjadi,
          bahkan mata uang yang digunakan di pulau ini disebut-sebut sebagai
          peso.
        </p>
        <p className="mt-5">
          Sejarah penguasaan Miangas mencakup masa kekuasaan Belanda sejak tahun
          1677. Filipina juga mengklaim kepemilikan pulau ini sejak tahun 1891,
          menyebutnya Las Palmas dalam peta mereka. Sengketa antara Belanda dan
          Filipina akhirnya diselesaikan oleh Mahkamah Arbitrase Internasional
          pada tanggal 4 April 1928, dengan keputusan bahwa Miangas menjadi
          milik sah Belanda (Hindia Belanda), yang kemudian diterima oleh
          Filipina.
        </p>

        <p className="mt-5">
          Pulau Miangas dapat diakses melalui kapal angkutan dari pelabuhan
          Bitung. Layanan kapal ini melayani trayek
          Bitung-Siau-Lirung-Tahuna-Melong-Karatung-Miangas-Marore dua kali
          sebulan.
        </p>
      </motion.div>
    </>
  );
};

export default PulauDua;
