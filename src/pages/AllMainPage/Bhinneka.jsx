import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loading from "../../components/Loading";
import { useEffect, useState } from "react";

const Bhinneka = () => {
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
      {/* Desktop */}
      <Navbar />
      <div className="w-full justify-center flex items-center  ">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="custom-1000:mt-24 custom-200:mt-24 max-w-screen-2xl custom-1200:mt-32 px-5 sm:px-10 flex flex-col justify-center items-center text-[#000000]"
        >
          <h1 className="text-3xl text-center lg:text-start font-bold  text-[#0054A3]">
            Bhinneka Tunggal Ika
          </h1>
          <p className="mt-5 text-sm">
            Bhinneka Tunggal Ika adalah semboyan yang mencerminkan semangat
            persatuan dan kesatuan dalam keberagaman di Indonesia. Motto ini
            tercetus dari bahasa Jawa Kuno dan memiliki makna mendalam, yaitu
            "Berbeda-beda tetapi tetap satu." Beberapa poin penting yang dapat
            dijelaskan dari makna Bhinneka Tunggal Ika adalah:
          </p>

          <ol className="mt-5 text-sm list-decimal list-outside">
            <li>
              Keragaman Budaya: Indonesia dikenal sebagai negara dengan
              keragaman budaya yang kaya. Bhinneka Tunggal Ika menekankan bahwa
              meskipun terdapat perbedaan suku, agama, ras, dan golongan, bangsa
              Indonesia tetap satu kesatuan yang utuh.
            </li>
            <li>
              Hidup Bermasyarakat: Semboyan ini menekankan pentingnya hidup
              bersama dalam harmoni dan menghargai perbedaan. Meskipun
              masyarakat Indonesia memiliki latar belakang yang beragam,
              semangat Bhinneka Tunggal Ika mengajarkan untuk hidup saling
              menghormati dan bekerja sama.
            </li>
            <li>
              Persatuan Bangsa: Bhinneka Tunggal Ika adalah cermin dari
              keberhasilan Indonesia sebagai bangsa yang mampu menyatukan
              perbedaan menjadi kekuatan bersama. Persatuan ini menjadi pondasi
              bagi Negara Kesatuan Republik Indonesia.
            </li>
            <li>
              Toleransi dan Keharmonisan: Semboyan ini juga memiliki akar budaya
              dalam ajaran kakawin Sutasoma yang mengajarkan toleransi antara
              umat Hindu Siwa dan umat Buddha. Hal ini mencerminkan semangat
              toleransi dan keharmonisan antarumat beragama di Indonesia.
            </li>
            <li>
              Identitas Nasional: Bhinneka Tunggal Ika bukan hanya semboyan,
              tetapi juga menjadi bagian dari identitas nasional Indonesia.
              Kata-kata ini terpatri dalam Lambang Negara Garuda Pancasila dan
              mencerminkan nilai-nilai Pancasila.
            </li>
          </ol>

          <p className="mt-5 text-sm">
            Makna mendalam dari Bhinneka Tunggal Ika terus dijunjung tinggi
            sebagai landasan moral dan spiritual dalam kehidupan masyarakat
            Indonesia. Semboyan ini mengajarkan bahwa keberagaman adalah
            kekayaan, bukan pemisah, dan bahwa bersatu dalam perbedaan adalah
            kunci keharmonisan bangsa.
          </p>
          <img className="mt-16" src="./bgbtk.png" alt="" />
        </motion.div>
      </div>

      {/* Desktop */}
      <div className="w-full  justify-center lg:flex hidden   text-[#696969]">
        <div className="w-full background-2 max-w-screen-2xl  justify-center  flex-col items-center  px-10 pt-52 text-[#696969]">
          {/* Lagu Daerah */}
          <div className=" w-full mt-40 px-10 py-10 max-w-screen-2xl">
            <h1 className="text-[30px] text-[#0054A3]  font-bold">
              {" "}
              Lagu Daerah
            </h1>
            <div className="mx-10 text-[#4796E0] mt-10">
              <div className="  flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 w-full border border-[#696969] rounded-xl"
                  to="/lagu-1"
                >
                  <p className="text-[20px]">Kicir Kicir</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg  mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/lagu-2"
                >
                  <p className="text-[20px]">Cublak Cublak Suweng</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg  mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/lagu-3"
                >
                  <p className="text-[20px]">Anging Mammirik</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg  mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/lagu-4"
                >
                  <p className="text-[20px]">Yamko Rambe Yamko</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>

          {/* Tarian Tradisional */}

          <div className=" w-full  px-10 py-10 mt-5 max-w-screen-2xl">
            <h1 className="text-[30px] text-[#0054A3]   font-bold">
              {" "}
              Tarian Tradisional
            </h1>

            <div className="mx-10 text-[#4796E0] mt-10">
              <div className="mt-10  flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/tarian-1"
                >
                  <p className="text-[20px]">Bedaya Ketawang</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/tarian-2"
                >
                  <p className="text-[20px]">Jaipongan</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/tarian-3"
                >
                  <p className="text-[20px]">Kecak</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/tarian-4"
                >
                  <p className="text-[20px]">Kipas Pakarena</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>

          {/* Hasil Tambang */}
          <div className=" w-full  px-10 py-10 mt-5 max-w-screen-2xl">
            <h1 className="text-[30px] text-[#0054A3]   font-bold">
              Hasil Tambang
            </h1>

            <div className="mx-10  text-[#4796E0] mt-10">
              <div className="mt-10  flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/tambang-1"
                >
                  <p className="text-[20px]">Tambang Emas</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/tambang-2"
                >
                  <p className="text-[20px]">Tambang Nikel</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/tambang-3"
                >
                  <p className="text-[20px]">Tambang Timah</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/tambang-4"
                >
                  <p className="text-[20px]">Tambang Besi</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>

          {/* Satwa & Puspa */}
          <div className=" w-full  px-10 py-10 mt-5 max-w-screen-2xl">
            <h1 className="text-[30px] text-[#0054A3]   font-bold">
              Satwa & Puspa
            </h1>
            <div className="mx-10  text-[#4796E0] mt-10">
              <div className="mt-10  flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/satwa-1"
                >
                  <p className="text-[20px]">Anoa</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/satwa-2"
                >
                  <p className="text-[20px]">Orang Utan</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/satwa-3"
                >
                  <p className="text-[20px]">Anggrek</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/satwa-4"
                >
                  <p className="text-[20px]">Rafflesia Arnoldi</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>

          {/* Gunung & Sungai */}
          <div className=" w-full  px-10 py-10 mt-5 max-w-screen-2xl">
            <h1 className="text-[30px] text-[#0054A3]   font-bold">
              Gunung & Sungai
            </h1>
            <div className="mx-10  text-[#4796E0] mt-10">
              <div className="mt-10  flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/gunung-1"
                >
                  <p className="text-[20px]">Gunung Lawit</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/gunung-2"
                >
                  <p className="text-[20px]">Gunung Merapi</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/gunung-3"
                >
                  <p className="text-[20px]">Sungai Kapuas</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/gunung-4"
                >
                  <p className="text-[20px]">Sungai Landak</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>

          {/* Kerajaan */}
          <div className=" w-full  px-10 py-10 mt-5 max-w-screen-2xl">
            <h1 className="text-[30px] text-[#0054A3]   font-bold">Kerajaan</h1>
            <div className="mx-10  text-[#4796E0] mt-10">
              <div className="mt-10  flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/kerajaan-1"
                >
                  <p className="text-[20px]">Kerajaan Luwu</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/kerajaan-2"
                >
                  <p className="text-[20px]">Kerajaan Samudra Pasai</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/kerajaan-3"
                >
                  <p className="text-[20px]">Kerajaan Singasari</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/kerajaan-4"
                >
                  <p className="text-[20px]">Kerajaan Ternate</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>

          {/* Pahlawan Nasional */}
          <div className=" w-full  px-10 py-10 mt-5 max-w-screen-2xl">
            <h1 className="text-[30px] text-[#0054A3]   font-bold">
              Pahlawan Nasional
            </h1>
            <div className="mx-10  text-[#4796E0] mt-10">
              <div className="mt-10  flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/pahlawan-1"
                >
                  <p className="text-[20px]">Jendral Sudirman</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/pahlawan-2"
                >
                  <p className="text-[20px]">Martha Christina Tiahahu</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/pahlawan-3"
                >
                  <p className="text-[20px]">Sultan Hasanuddin</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/pahlawan-4"
                >
                  <p className="text-[20px]">Tuanku Imam Bonjol</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="w-full   justify-center lg:hidden flex   text-[#696969]">
        <div className="w-full background-2-mobile max-w-screen-2xl  justify-center  flex-col items-center  px-5 pt-72 -mt-40 text-[#696969]">
          {/* Lagu Daerah */}
          <div className=" w-full  py-5 max-w-screen-2xl">
            <h1 className="text-[17px] text-[#0054A3]  font-bold">
              {" "}
              Lagu Daerah
            </h1>
            <div className=" text-[#4796E0] mt-5">
              <div className="  flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 w-full border border-[#696969] rounded-lg"
                  to="/lagu-1"
                >
                  <p className="text-[15px]">Kicir Kicir</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg  mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/lagu-2"
                >
                  <p className="text-[15px]">Cublak Cublak Suweng</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg  mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/lagu-3"
                >
                  <p className="text-[15px]">Anging Mammirik</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg  mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/lagu-4"
                >
                  <p className="text-[15px]">Yamko Rambe Yamko</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>

          {/* Tarian Tradisional */}

          <div className=" w-full  py-5 mt-5 max-w-screen-2lg">
            <h1 className="text-[17px] text-[#0054A3]   font-bold">
              {" "}
              Tarian Tradisional
            </h1>

            <div className=" text-[#4796E0] mt-5">
              <div className=" flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/tarian-1"
                >
                  <p className="text-[15px]">Bedaya Ketawang</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/tarian-2"
                >
                  <p className="text-[15px]">Jaipongan</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/tarian-3"
                >
                  <p className="text-[15px]">Kecak</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/tarian-4"
                >
                  <p className="text-[15px]">Kipas Pakarena</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>

          {/* Hasil Tambang */}
          <div className=" w-full  py-5 mt-5 max-w-screen-2lg">
            <h1 className="text-[17px] text-[#0054A3]   font-bold">
              Hasil Tambang
            </h1>

            <div className="  text-[#4796E0] mt-5">
              <div className="  flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/tambang-1"
                >
                  <p className="text-[15px]">Tambang Emas</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/tambang-2"
                >
                  <p className="text-[15px]">Tambang Nikel</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/tambang-3"
                >
                  <p className="text-[15px]">Tambang Timah</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/tambang-4"
                >
                  <p className="text-[15px]">Tambang Besi</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>

          {/* Satwa & Puspa */}
          <div className=" w-full  py-5 mt-5 max-w-screen-2lg">
            <h1 className="text-[17px] text-[#0054A3]   font-bold">
              Satwa & Puspa
            </h1>
            <div className="  text-[#4796E0] mt-5">
              <div className="  flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/satwa-1"
                >
                  <p className="text-[15px]">Anoa</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/satwa-2"
                >
                  <p className="text-[15px]">Orang Utan</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/satwa-3"
                >
                  <p className="text-[15px]">Anggrek</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/satwa-4"
                >
                  <p className="text-[15px]">Rafflesia Arnoldi</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>

          {/* Gunung & Sungai */}
          <div className=" w-full  py-5 mt-5 max-w-screen-2lg">
            <h1 className="text-[17px] text-[#0054A3]   font-bold">
              Gunung & Sungai
            </h1>
            <div className="  text-[#4796E0] mt-5">
              <div className="  flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/gunung-1"
                >
                  <p className="text-[15px]">Gunung Lawit</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/gunung-2"
                >
                  <p className="text-[15px]">Gunung Merapi</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/gunung-3"
                >
                  <p className="text-[15px]">Sungai Kapuas</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/gunung-4"
                >
                  <p className="text-[15px]">Sungai Landak</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>

          {/* Kerajaan */}
          <div className=" w-full  py-5 mt-5 max-w-screen-2lg">
            <h1 className="text-[17px] text-[#0054A3]   font-bold">Kerajaan</h1>
            <div className="  text-[#4796E0] mt-5">
              <div className=" flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/kerajaan-1"
                >
                  <p className="text-[15px]">Kerajaan Luwu</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/kerajaan-2"
                >
                  <p className="text-[15px]">Kerajaan Samudra Pasai</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/kerajaan-3"
                >
                  <p className="text-[15px]">Kerajaan Singasari</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/kerajaan-4"
                >
                  <p className="text-[15px]">Kerajaan Ternate</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>

          {/* Pahlawan Nasional */}
          <div className=" w-full  py-5 mt-5 max-w-screen-2lg">
            <h1 className="text-[17px] text-[#0054A3]   font-bold">
              Pahlawan Nasional
            </h1>
            <div className="  text-[#4796E0] mt-5">
              <div className="  flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/pahlawan-1"
                >
                  <p className="text-[15px]">Jendral Sudirman</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/pahlawan-2"
                >
                  <p className="text-[15px]">Martha Christina Tiahahu</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/pahlawan-3"
                >
                  <p className="text-[15px]">Sultan Hasanuddin</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/pahlawan-4"
                >
                  <p className="text-[15px]">Tuanku Imam Bonjol</p>
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

export default Bhinneka;
