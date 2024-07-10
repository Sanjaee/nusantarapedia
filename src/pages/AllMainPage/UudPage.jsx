import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import Loading from "../../components/Loading";

const UudPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500); // Simulate loading time
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="mt-24 px-5 sm:px-10 flex flex-col text-[#000000] "
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="w-[569px] flex justify-start"
        >
          <h1 className="text-4xl font-bold text-[#0054A3] ">
            Undang-Undang Dasar Negara Republik Indonesia Tahun 1945
          </h1>
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className=" flex justify-center items-center mt-10"
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center justify-center min-w-[300px]"
          >
            <img
              src="./uudbook.png"
              className="max-h-[270.48px] w-full h-full max-w-[270.48px]  "
              alt="logo"
            />
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="max-w-[866px] w-full sm:ml-10 mt-10 sm:mt-0"
          >
            <div className="mt-5">
              <p className="text-sm text-[#000000]">
                Undang-Undang Dasar Negara Republik Indonesia Tahun 1945
                (disingkat UUD 1945; terkadang juga disingkat UUD '45, UUD RI
                1945, atau UUD NRI 1945) adalah konstitusi dan sumber hukum
                tertinggi yang berlaku di Republik Indonesia. UUD 1945 menjadi
                perwujudan dari dasar negara (ideologi) Indonesia, yaitu
                Pancasila, yang disebutkan secara gamblang dalam Pembukaan UUD
                1945.
              </p>

              <p className="mt-5 text-sm text-[#000000]">
                Perumusan UUD 1945 dimulai dengan kelahiran dasar negara
                Pancasila pada tanggal 1 Juni 1945 dalam sidang pertama BPUPK.
                Perumusan UUD yang rill sendiri mulai dilakukan pada tanggal 10
                Juli 1945 dengan dimulainya sidang kedua BPUPK untuk menyusun
                konstitusi. UUD 1945 diberlakukan secara resmi sebagai
                konstitusi negara Indonesia oleh PPKI pada tanggal 18 Agustus
                1945. Pemberlakuannya sempat dihentikan selama 9 tahun dengan
                berlakunya Konstitusi RIS dan UUDS 1950. UUD 1945 kembali
                berlaku sebagai konstitusi negara melalui Dekret Presiden yang
                dikeluarkan oleh Presiden Soekarno pada tanggal 5 Juli 1959.
                Setelah memasuki masa reformasi, UUD 1945 mengalami empat kali
                perubahan (amendemen) dari tahun 1999–2002.
              </p>
            </div>
          </motion.div>
        </motion.div>
        <p className="mt-10 text-sm">
          UUD 1945 memiliki otoritas hukum tertinggi dalam sistem pemerintahan
          negara Indonesia, sehingga seluruh lembaga negara di Indonesia harus
          tunduk pada UUD 1945 dan penyelenggaraan negara harus mengikuti
          ketentuan UUD 1945. Selain itu, setiap peraturan perundang-undangan di
          Indonesia tidak boleh bertentangan dengan UUD 1945. Mahkamah
          Konstitusi berwenang melakukan pengujian atas undang-undang, sementara
          Mahkamah Agung atas peraturan di bawah undang-undang, yang
          bertentangan dengan ketentuan UUD 1945.
        </p>
        <p className="mt-5 text-sm">
          Wewenang untuk melakukan pengubahan terhadap UUD 1945 dimiliki Majelis
          Permusyawaratan Rakyat, seperti yang telah dilakukan oleh lembaga ini
          sebanyak empat kali. Ketentuan mengenai perubahan UUD 1945 diatur
          dalam Pasal 37 UUD 1945.
        </p>
      </motion.div>

      {/* uud */}
      <div className="background-3 mt-28 px-10">
        <h1 className="text-[30px] font-bold pt-20 text-white">
          Lembaga Negara
        </h1>
        <div className="mt-10 text-[#4796E0] flex ml-20 flex-col w-[538px]">
          <Link
            className="  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-lg"
            to="/uud-1"
          >
            <p className="text-[20px]">BPK (Badan Pengawas Keuangan)</p>
            <img className=" h-3" src="./arrowuud.png" alt="" />
          </Link>
          <Link
            className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
            to="/uud-2"
          >
            <p className="text-[20px]">Mahkamah Konstitusi</p>
            <img className=" h-3" src="./arrowuud.png" alt="" />
          </Link>
          <Link
            className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
            to="/uud-3"
          >
            <p className="text-[20px]">Komisi Yudisial</p>
            <img className=" h-3" src="./arrowuud.png" alt="" />
          </Link>
          <Link
            className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
            to="/uud-4"
          >
            <p className="text-[20px]">MPR/DPR</p>
            <img className=" h-3" src="./arrowuud.png" alt="" />
          </Link>
        </div>
        {/* bahasa */}
        <div className="flex flex-col">
          <h1 className="text-[30px] font-bold pt-20 text-white">
            Bahasa Daerah
          </h1>
          <div className="mt-10 text-[#4796E0] flex ml-20 flex-col w-[538px]">
            <Link
              className="  flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-lg"
              to="/bahasa-1"
            >
              <p className="text-[20px]">Bahasa Keyeli</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
            <Link
              className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
              to="/bahasa-2"
            >
              <p className="text-[20px]">Bahasa Melayu</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
            <Link
              className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
              to="/bahasa-3"
            >
              <p className="text-[20px]">Bahasa Minang</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
            <Link
              className=" mt-4 flex p-2 justify-between items-center px-6 border border-[#FFFFFF] rounded-md"
              to="/bahasa-4"
            >
              <p className="text-[20px]">Bahasa Bugis</p>
              <img className=" h-3" src="./arrowuud.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UudPage;
