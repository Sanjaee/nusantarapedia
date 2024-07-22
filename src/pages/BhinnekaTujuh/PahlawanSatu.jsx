import React from "react";
import AllMenu from "../AllMenu";
import { motion } from "framer-motion";

const PahlawanSatu = () => {
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
          Jendral Sudirman
        </h1>
        <p className="mt-5">
          Jenderal Besar TNI (Anumerta) Raden Soedirman, lahir pada 24 Januari
          1916 dan meninggal pada 29 Januari 1950, merupakan seorang perwira
          tinggi Indonesia yang memegang peran kunci selama Revolusi Nasional
          Indonesia. Sebagai Panglima Besar Tentara Nasional Indonesia (TNI)
          pertama, Soedirman dihormati sebagai sosok penting dalam sejarah
          Indonesia.
        </p>
        <p className="mt-5">
          Soedirman lahir dari keluarga biasa di Purbalingga, Hindia Belanda,
          namun diadopsi oleh pamannya yang merupakan seorang priyayi. Setelah
          keluarganya pindah ke Cilacap pada tahun 1916, Soedirman tumbuh
          menjadi siswa rajin dan aktif dalam kegiatan ekstrakurikuler, termasuk
          program kepanduan yang dijalankan oleh organisasi Islam Muhammadiyah.
        </p>
        <p className="mt-5">
          Setelah menjadi seorang guru pada tahun 1936, Soedirman terlibat dalam
          kegiatan Muhammadiyah dan memimpin Kelompok Pemuda Muhammadiyah pada
          tahun 1937. Selama pendudukan Jepang pada tahun 1942, ia tetap
          mengajar dan bahkan bergabung dengan tentara Pembela Tanah Air (PETA)
          yang disponsori oleh Jepang.
        </p>

        <p className="mt-5">
          Setelah proklamasi kemerdekaan Indonesia pada 17 Agustus 1945,
          Soedirman melarikan diri dari pusat penahanan dan pergi ke Jakarta
          untuk bertemu dengan Presiden Soekarno. Ia terlibat dalam proses
          penyerahan diri tentara Jepang di Banyumas dan memimpin Divisi V
          setelah diangkat oleh panglima sementara Oerip Soemohardjo pada 20
          Oktober 1945. Soedirman kemudian terpilih sebagai Panglima Besar
          Tentara Keamanan Rakyat (TKR) pada 12 November 1945.
        </p>

        <p className="mt-5">
          Selama tiga tahun berikutnya, Soedirman menyaksikan negosiasi dengan
          Belanda yang berakhir dengan Perjanjian Linggarjati dan Perjanjian
          Renville. Ia juga menghadapi pemberontakan dan upaya kudeta pada 1948.
          Pada Desember 1948, Soedirman mengalami sakit tuberkulosis yang
          mengakibatkan paru-paru kanannya kempes.
        </p>

        <p className="mt-5">
          Pada 19 Desember 1948, beberapa hari setelah keluar dari rumah sakit,
          Belanda melancarkan Agresi Militer II untuk menduduki Yogyakarta.
          Soedirman dan sekelompok kecil tentara melawan pasukan Belanda, dan
          setelah melalui serangkaian perlawanan gerilya, ia meninggal pada 29
          Januari 1950. Kematian Soedirman menjadi duka bagi rakyat Indonesia,
          dan ia diangkat sebagai Pahlawan Nasional Indonesia pada 10 Desember
          1964. Soedirman terus dihormati, dengan namanya diabadikan dalam
          berbagai jalan, universitas, museum, dan monumen di Indonesia.
        </p>
      </motion.div>
    </>
  );
};

export default PahlawanSatu;
