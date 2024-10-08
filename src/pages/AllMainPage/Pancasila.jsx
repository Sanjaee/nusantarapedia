import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";

const Pancasila = () => {
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
      <div className="w-full flex-col flex justify-center mb-20  items-center ">
        <div className="custom-1000:mt-24 custom-1200:mt-32 custom-300:mt-24 px-5 sm:px-10 max-w-[1440px] flex flex-col text-[#000000] sm:flex-row sm:justify-between items-center">
          <div className="flex items-center  justify-center min-w-[300px]">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              src="./garuda.png"
              className="max-h-[270.48px]  w-full h-full max-w-[270.48px] custom-1400:max-w-[400px] custom-1400:max-h-[400px]"
              alt="logo"
            />
          </div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="max-w-[866px] w-full sm:ml-10 mt-10 sm:mt-0"
          >
            <h1 className="text-4xl font-bold text-center lg:text-start text-[#0054A3]">Pancasila</h1>
            <div className="mt-5 text-sm custom-1400:text-xl ">
              <p >
                Pancasila adalah dasar negara Indonesia. Nama ini terdiri dari
                dua kata dari bahasa Sanskerta: पञ्च "pañca" berarti lima dan
                शीला "śīla" berarti prinsip atau asas. Pancasila merupakan
                rumusan dan pedoman kehidupan berbangsa dan bernegara bagi
                seluruh rakyat Indonesia.
              </p>
              <p className="mt-5 ">
                Lima ideologi utama penyusun Pancasila merupakan lima sila
                Pancasila. Ideologi utama tersebut tercantum pada alinea keempat
                dalam Pembukaan Undang-Undang Dasar 1945:
              </p>
              <ol className="mt-5  list-decimal list-inside">
                <li>Ketuhanan yang Maha Esa</li>
                <li>Kemanusiaan yang adil dan beradab</li>
                <li>Persatuan Indonesia</li>
                <li>
                  Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam
                  permusyawaratan/perwakilan
                </li>
                <li>Keadilan sosial bagi seluruh rakyat Indonesia</li>
              </ol>
              <p className="mt-5 ">
                Sekalipun terjadi perubahan isi dan urutan lima sila Pancasila
                yang berlangsung dalam beberapa tahap selama masa perumusan
                Pancasila pada tahun 1945, tanggal 1 Juni diperingati bersama
                sebagai hari lahirnya Pancasila
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Desktop */}
      <div className="w-full   justify-center lg:flex hidden   text-[#696969]">
        <div className="w-full  background-1 justify-center  flex-col items-center  px-10 lg:pt-20 text-[#696969]">
          {/* sila 1 */}
          <div className=" w-full mt-40  px-10 py-10">
            <h1 className="text-[30px] text-[#0054A3]  font-bold">
              {" "}
              Sila Ke-1: Ketuhanan Yang Maha Esa
            </h1>
            <div className="mx-10 text-[#4796E0] mt-10">
              <div className="  flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 w-full border border-[#696969] rounded-xl"
                  to="/sila-satu-1"
                >
                  <p className="text-[20px]">Menghormati Antar Agama</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg  mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/sila-satu-2"
                >
                  <p className="text-[20px]">Tidak Paksakan Kepercayaan</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg  mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/sila-satu-3"
                >
                  <p className="text-[20px]">Taat Beribadah</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg  mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/sila-satu-4"
                >
                  <p className="text-[20px]">Hidup Sederhana</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>

          {/* sila 2 */}

          <div className=" w-full  px-10 py-10 mt-5 ">
            <h1 className="text-[30px] text-[#0054A3]   font-bold">
              {" "}
              Sila Ke-2: Kemanusiaan Yang Adil Dan Beradab
            </h1>

            <div className="mx-10 text-[#4796E0] mt-10">
              <div className="mt-10  flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/sila-dua-1"
                >
                  <p className="text-[20px]">
                    Menjunjung Tinggi Nilai Kemanusiaan
                  </p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/sila-dua-2"
                >
                  <p className="text-[20px]">
                    Gemar Melakukan Kegiatan Kemanusiaan
                  </p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/sila-dua-3"
                >
                  <p className="text-[20px]">Tenggang Rasa dan Tepa Selira</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/sila-dua-4"
                >
                  <p className="text-[20px]">Saling Tolong Menolong</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>

          {/* sila 3 */}
          <div className=" w-full  px-10 py-10 mt-5 ">
            <h1 className="text-[30px] text-[#0054A3]   font-bold">
              {" "}
              Sila Ke-3: Persatuan Indonesia
            </h1>
            <div className="mx-10 text-[#4796E0] mt-10">
              <div className="mt-10  flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/sila-tiga-1"
                >
                  <p className="text-[20px]">Cinta Tanah Air dan Bangsa</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/sila-tiga-2"
                >
                  <p className="text-[20px]">Bangga Sebagai Bangsa Indonesia</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/sila-tiga-3"
                >
                  <p className="text-[20px]">
                    Berkorban untuk Bangsa dan Negara
                  </p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/sila-tiga-4"
                >
                  <p className="text-[20px]">
                    Jaga Persatuan dan Kesatuan Bangsa
                  </p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>

          {/* sila 4 */}
          <div className=" w-full  px-10 py-10 mt-5 ">
            <h1 className="text-[30px] text-[#0054A3]   font-bold">
              Sila Ke-4: Kerakyatan Yang Dipimpin Oleh Hikmat Kebijaksanaan
              Dalam Permusyawaratan Perwakilan
            </h1>

            <div className="mx-10  text-[#4796E0] mt-10">
              <div className="mt-10  flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/sila-empat-1"
                >
                  <p className="text-[20px]">Hormati Hasil Musyawarah</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/sila-empat-2"
                >
                  <p className="text-[20px]">Menjunjung Nilai Kebenaran</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/sila-empat-3"
                >
                  <p className="text-[20px]">Musyawarah dan Mufakat</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/sila-empat-4"
                >
                  <p className="text-[20px]">Tidak Paksakan Kehendak</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>

          {/* sila 5 */}
          <div className=" w-full  px-10 py-10 mt-5 ">
            <h1 className="text-[30px] text-[#0054A3]   font-bold">
              Sila Ke-5: Keadilan Sosial Bagi Seluruh Rakyat Indonesia
            </h1>
            <div className="mx-10  text-[#4796E0] mt-10">
              <div className="mt-10  flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/sila-lima-1"
                >
                  <p className="text-[20px]">Adil Terhadap Sesama</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/sila-lima-2"
                >
                  <p className="text-[20px]">Hormati Hak Orang Lain</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/sila-lima-3"
                >
                  <p className="text-[20px]">Musyawarah dan Mufakat</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-xl"
                  to="/sila-lima-4"
                >
                  <p className="text-[20px]">Bekerja Keras</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="w-full   justify-center lg:hidden flex   text-[#696969]">
        <div className="w-full background-2-mobile  max-w-screen-2xl  justify-center  flex-col items-center  px-5 pt-10 text-[#696969]">
          {/* sila 1 */}
          <div className=" w-full   py-10 ">
            <h1 className="text-[17px] text-[#0054A3]  font-bold">
              {" "}
              Sila Ke-1: Ketuhanan Yang Maha Esa
            </h1>
            <div className=" text-[#4796E0] mt-5">
              <div className="  flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 w-full border border-[#696969] rounded-lg"
                  to="/sila-satu-1"
                >
                  <p className="text-[13px]">Menghormati Antar Agama</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg  mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/sila-satu-2"
                >
                  <p className="text-[13px]">Tidak Paksakan Kepercayaan</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg  mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/sila-satu-3"
                >
                  <p className="text-[13px]">Taat Beribadah</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg  mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/sila-satu-4"
                >
                  <p className="text-[13px]">Hidup Sederhana</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>

          {/* sila 2 */}

          <div className=" w-full   py-5 ">
            <h1 className="text-[17px] text-[#0054A3]   font-bold">
              {" "}
              Sila Ke-2: Kemanusiaan Yang Adil Dan Beradab
            </h1>

            <div className=" text-[#4796E0] ">
              <div className="mt-5  flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/sila-dua-1"
                >
                  <p className="text-[13px]">
                    Menjunjung Tinggi Nilai Kemanusiaan
                  </p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/sila-dua-2"
                >
                  <p className="text-[13px]">
                    Gemar Melakukan Kegiatan Kemanusiaan
                  </p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/sila-dua-3"
                >
                  <p className="text-[13px]">Tenggang Rasa dan Tepa Selira</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/sila-dua-4"
                >
                  <p className="text-[13px]">Saling Tolong Menolong</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>

          {/* sila 3 */}
          <div className=" w-full   py-10  ">
            <h1 className="text-[17px] text-[#0054A3]   font-bold">
              {" "}
              Sila Ke-3: Persatuan Indonesia
            </h1>
            <div className=" text-[#4796E0] mt-5">
              <div className=" flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/sila-tiga-1"
                >
                  <p className="text-[13px]">Cinta Tanah Air dan Bangsa</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/sila-tiga-2"
                >
                  <p className="text-[13px]">Bangga Sebagai Bangsa Indonesia</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/sila-tiga-3"
                >
                  <p className="text-[13px]">
                    Berkorban untuk Bangsa dan Negara
                  </p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/sila-tiga-4"
                >
                  <p className="text-[13px]">
                    Jaga Persatuan dan Kesatuan Bangsa
                  </p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>

          {/* sila 4 */}
          <div className=" w-full   py-5 ">
            <h1 className="text-[17px] text-[#0054A3]   font-bold">
              Sila Ke-4: Kerakyatan Yang Dipimpin Oleh Hikmat Kebijaksanaan
              Dalam Permusyawaratan Perwakilan
            </h1>

            <div className="  text-[#4796E0] mt-5">
              <div className=" flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/sila-empat-1"
                >
                  <p className="text-[13px]">Hormati Hasil Musyawarah</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/sila-empat-2"
                >
                  <p className="text-[13px]">Menjunjung Nilai Kebenaran</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/sila-empat-3"
                >
                  <p className="text-[13px]">Musyawarah dan Mufakat</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/sila-empat-4"
                >
                  <p className="text-[13px]">Tidak Paksakan Kehendak</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
              </div>
            </div>
          </div>

          {/* sila 5 */}
          <div className=" w-full   py-5 ">
            <h1 className="text-[17px] text-[#0054A3]   font-bold">
              Sila Ke-5: Keadilan Sosial Bagi Seluruh Rakyat Indonesia
            </h1>
            <div className="  text-[#4796E0] mt-5">
              <div className="  flex  flex-col w-full">
                <Link
                  className="shadow-lg  flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/sila-lima-1"
                >
                  <p className="text-[13px]">Adil Terhadap Sesama</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/sila-lima-2"
                >
                  <p className="text-[13px]">Hormati Hak Orang Lain</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/sila-lima-3"
                >
                  <p className="text-[13px]">Musyawarah dan Mufakat</p>
                  <img className=" h-3" src="./arrow.png" alt="bg" />
                </Link>
                <Link
                  className="shadow-lg mt-4 flex p-2 justify-between items-center px-6 border border-[#696969] rounded-lg"
                  to="/sila-lima-4"
                >
                  <p className="text-[13px]">Bekerja Keras</p>
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

export default Pancasila;
