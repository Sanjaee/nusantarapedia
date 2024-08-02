import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

const NkriPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Navbar />
      {/* Desktop */}
      <div className="w-full justify-center flex mb-20 items-center ">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="custom-1000:mt-24 custom-200:mt-24 custom-1200:mt-32 max-w-screen-2xl  px-5 sm:px-10 flex flex-col justify-center items-center text-[#000000]"
        >
          <h1 className="text-3xl font-bold text-center lg:text-start  text-[#0054A3]">
            Negara Kesatuan Republik Indonesia
          </h1>
          <p className="mt-5 text-sm custom-1400:text-xl">
            Indonesia, atau Republik Indonesia, adalah negara kepulauan di Asia
            Tenggara, melintasi garis khatulistiwa. Dikenal sebagai negara
            lintas benua, Indonesia terbesar ke-14 di dunia dengan luas wilayah
            1.904.569 km², terdiri dari 17.504 pulau. Dengan penduduk lebih dari
            277 juta jiwa, Indonesia adalah negara berpenduduk terbanyak ke-4,
            dengan mayoritas penganut Islam.
          </p>

          <p className="mt-5 text-sm custom-1400:text-xl">
            Sejarah Indonesia dipengaruhi oleh bangsa pendatang dan penjajah.
            Sriwijaya, kerajaan Hindu-Buddha di Palembang, memainkan peran
            penting dalam perdagangan abad ke-7. Islam masuk di abad ke-8,
            diikuti penjajahan Eropa pada akhir abad ke-15. Indonesia meraih
            kemerdekaan pada 17 Agustus 1945, setelah era kolonial Belanda.
          </p>

          <p className="mt-5 text-sm custom-1400:text-xl">
            Dengan beragam suku, bahasa, dan agama, semboyan "Bhinneka Tunggal
            Ika" mencerminkan keberagaman yang menyatu. Ibu kota saat ini adalah
            Jakarta, dengan rencana pemindahan ke Ibu Kota Nusantara di
            Kalimantan. Indonesia adalah anggota berbagai organisasi
            internasional seperti PBB, ASEAN, dan APEC.
          </p>
          <img className="mt-16" src="./bgnkri.png" alt="" />
        </motion.div>
      </div>

      {/* Desktop */}
      <div className="w-full   justify-center lg:flex hidden   text-[#696969]">
        <div className="w-full background-4   justify-center  flex-col items-center  px-10 lg:pt-20  text-[#696969]">
          {/* Kuliner */}
          <div className=" w-full mt-40   px-10 py-10 ">
            <h1 className="text-[30px] text-[#0054A3]  font-bold"> Kuliner</h1>
            <div className="mx-10 text-[#4796E0] mt-10">
              <div className="  flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 w-full border border-[#696969] rounded-xl"
                  to="/kuliner-1"
                >
                  <p className="text-[20px]">Rendang</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg  mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/kuliner-2"
                >
                  <p className="text-[20px]">Karedok</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg  mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/kuliner-3"
                >
                  <p className="text-[20px]">Kerak Telor</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg  mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/kuliner-4"
                >
                  <p className="text-[20px]">Empal Gentong</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>

          {/* Ibu Kota Provinsi */}

          <div className=" w-full  px-10 py-10 mt-5 ">
            <h1 className="text-[30px] text-[#0054A3]   font-bold">
              {" "}
              Ibu Kota Provinsi
            </h1>

            <div className="mx-10 text-[#4796E0] mt-10">
              <div className="mt-10  flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/ibukota-1"
                >
                  <p className="text-[20px]">Denpasar</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/ibukota-2"
                >
                  <p className="text-[20px]">Manokwari</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/ibukota-3"
                >
                  <p className="text-[20px]">Samarinda</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/ibukota-4"
                >
                  <p className="text-[20px]">Semarang</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>

          {/* Lagu Nasional */}
          <div className=" w-full  px-10 py-10 mt-5 ">
            <h1 className="text-[30px] text-[#0054A3]   font-bold">
              {" "}
              Lagu Nasional
            </h1>
            <div className="mx-10 text-[#4796E0] mt-10">
              <div className="mt-10  flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/nasional-1"
                >
                  <p className="text-[20px]">Halo Halo Bandung</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/nasional-2"
                >
                  <p className="text-[20px]">Hari Merdeka</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/nasional-3"
                >
                  <p className="text-[20px]">Rayuan Pulau Kelapa</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/nasional-4"
                >
                  <p className="text-[20px]">Tanah Air Ku</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>

          {/* Pulau Terdepan & Terluar */}
          <div className=" w-full  px-10 py-10 mt-5 ">
            <h1 className="text-[30px] text-[#0054A3]   font-bold">
              Pulau Terdepan & Terluar
            </h1>

            <div className="mx-10  text-[#4796E0] mt-10">
              <div className="mt-10  flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/pulau-1"
                >
                  <p className="text-[20px]">Pulau Berhala</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/pulau-2"
                >
                  <p className="text-[20px]">Pulau Miangas</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/pulau-3"
                >
                  <p className="text-[20px]">Pulau Rote</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/pulau-4"
                >
                  <p className="text-[20px]">Pulau Weh</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}

      <div className="w-full   justify-center lg:hidden flex   text-[#696969]">
        <div className="w-full background-2-mobile max-w-screen-2xl  justify-center  flex-col items-center  px-5 pt-20  text-[#696969]">
          {/* Kuliner */}
          <div className=" w-full   py-5 max-w-screen-2xl">
            <h1 className="text-[17px] text-[#0054A3]  font-bold"> Kuliner</h1>
            <div className=" text-[#4796E0] mt-5">
              <div className="  flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 w-full border border-[#696969] rounded-lg"
                  to="/kuliner-1"
                >
                  <p className="text-[15px]">Rendang</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg  mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/kuliner-2"
                >
                  <p className="text-[15px]">Karedok</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg  mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/kuliner-3"
                >
                  <p className="text-[15px]">Kerak Telor</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg  mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/kuliner-4"
                >
                  <p className="text-[15px]">Empal Gentong</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>

          {/* Ibu Kota Provinsi */}

          <div className=" w-full   py-5 mt-5 max-w-screen-2lg">
            <h1 className="text-[17px] text-[#0054A3]   font-bold">
              {" "}
              Ibu Kota Provinsi
            </h1>

            <div className=" text-[#4796E0] mt-5">
              <div className=" flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/ibukota-1"
                >
                  <p className="text-[15px]">Denpasar</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/ibukota-2"
                >
                  <p className="text-[15px]">Manokwari</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/ibukota-3"
                >
                  <p className="text-[15px]">Samarinda</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/ibukota-4"
                >
                  <p className="text-[15px]">Semarang</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>

          {/* Lagu Nasional */}
          <div className=" w-full   py-5 mt-5 max-w-screen-2lg">
            <h1 className="text-[17px] text-[#0054A3]   font-bold">
              {" "}
              Lagu Nasional
            </h1>
            <div className=" text-[#4796E0] mt-5">
              <div className="  flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/nasional-1"
                >
                  <p className="text-[15px]">Halo Halo Bandung</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/nasional-2"
                >
                  <p className="text-[15px]">Hari Merdeka</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/nasional-3"
                >
                  <p className="text-[15px]">Rayuan Pulau Kelapa</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/nasional-4"
                >
                  <p className="text-[15px]">Tanah Air Ku</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>

          {/* Pulau Terdepan & Terluar */}
          <div className=" w-full   py-5 mt-5 max-w-screen-2lg">
            <h1 className="text-[17px] text-[#0054A3]   font-bold">
              Pulau Terdepan & Terluar
            </h1>

            <div className="  text-[#4796E0] mt-5">
              <div className=" flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/pulau-1"
                >
                  <p className="text-[15px]">Pulau Berhala</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/pulau-2"
                >
                  <p className="text-[15px]">Pulau Miangas</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/pulau-3"
                >
                  <p className="text-[15px]">Pulau Rote</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/pulau-4"
                >
                  <p className="text-[15px]">Pulau Weh</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NkriPage;
