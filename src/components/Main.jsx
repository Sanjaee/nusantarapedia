import { Link } from "react-router-dom";
import Footer from "./Footer";

const Main = () => {
  return (
    <div
      id="empatpilar"
      className="mt-96 flex items-center flex-col justify-center "
    >
      <h1 className="text-[20px] font-bold mb-10">Didukung oleh:</h1>
      <img src="./bgmain1.png" alt="" />
      {/* 1 */}
      <div className="mt-10 flex items-center">
        <img className="w-[450px]" src="./bgmain2.png" alt="" />
        <div className="flex flex-col w-[570px] pl-20">
          <h1 className="text-[50px] font-bold text-[#0054A3]">Pancasila</h1>
          <p className="text-[20px]">
            Temukan makna mendalam dari setiap sila dalam Pancasila. Ayo,
            jadikan nilai-nilai luhur ini sebagai pedoman dalam kehidupan kita
            sehari-hari. Yuk, mulai sekarang!
          </p>
          <div className="mt-5 ">
            <Link
              to="/pancasila"
              className="px-4 rounded-md py-2 border shadow-lg border-[#696969] text-[#4796E0]"
            >
              Selengkapnya &#10095;
            </Link>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="mt-60 flex items-center">
        <div className="flex flex-col w-[750px] ml-10">
          <h1 className="text-[50px] font-bold text-[#0054A3]">
            Undang-Undang Dasar Negara Republik Indonesia Tahun 1945
          </h1>
          <p className="text-[20px] w-[470px]">
            Ayo, tingkatkan kesadaran berbangsa dan bernegara dengan memahami
            UUD 1945. Kenali peran dan tanggung jawab kita sebagai warga negara
            dalam membangun Indonesia yang lebih baik. Yuk, mulai belajar
            sekarang!
          </p>
          <div className="mt-5 ">
            <Link
              to="/undang-undang-dasar-1945"
              className="px-4   shadow-lg rounded-md py-2 border border-[#696969] text-[#4796E0]"
            >
              Selengkapnya &#10095;
            </Link>
          </div>
        </div>

        <img className="w-[450px]" src="./bgmain3.png" alt="" />
      </div>

      {/* 3 */}
      <div id="main3" className="mt-60 flex items-center">
        <img className="w-[490px]" src="./bgmain4.png" alt="" />
        <div className="flex flex-col w-[570px] mr-10">
          <h1 className="text-[50px] font-bold text-[#0054A3]">
            Bhinneka Tunggal Ika
          </h1>
          <p className="text-[20px]">
            Ayo, eksplorasi berbagai budaya, bahasa, dan tradisi di Indonesia.
            Dengan memahami Bhinneka Tunggal Ika, kita bisa menghargai perbedaan
            dan memperkuat persatuan. Yuk, mulai petualangan belajarmu sekarang!
          </p>
          <div className="mt-5 ">
            <Link
              to="/bti"
              className="px-4  shadow-lg rounded-md py-2 border border-[#696969] text-[#4796E0]"
            >
              Selengkapnya &#10095;
            </Link>
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className="mt-60 flex items-center">
        <div className="flex flex-col  ml-10">
          <h1 className="text-[50px] w-[570px] font-bold text-[#0054A3]">
            Negara Kesatuan Republik Indonesia
          </h1>
          <p className="text-[20px] w-[570px] mr-10">
            Mari pelajari lebih dalam tentang NKRI, kesatuan yang harus kita
            jaga bersama. Kenali sejarah, nilai-nilai, dan prinsip-prinsip yang
            membentuk bangsa Indonesia. Yuk, mulai sekarang dan jaga keutuhan
            NKRI!
          </p>
          <div id="mitra" className="mt-5 ">
            <Link
              to="/negara-kesatuan-republik-indonesia"
              className="px-4  shadow-lg rounded-md py-2 border border-[#696969] text-[#4796E0]"
            >
              Selengkapnya &#10095;
            </Link>
          </div>
        </div>

        <img className="w-[350px] " src="./bgmain5.png" alt="" />
      </div>

      <div className="mt-52 text-center px-20">
        <h1 className=" text-[50px] font-bold text-[#0054A3] mb-10">
          Mitra Kami
        </h1>
        <img src="./bgmain6.png" alt="" />
      </div>

      <div id="galeri" className="mt-52 text-center px-10">
        <h1 className="text-[50px] font-bold text-[#0054A3]">Galeri</h1>
        <div className="mt-10 grid grid-cols-3 gap-4 custom-1200:gap-6">
          {/* galeri */}
          <div className="w-full min-w-[300px] custom-1200:min-w-[390px] bg-slate-400 h-[400px]">
            <img className="object-cover h-full" src="./galeri1.png" alt="" />
          </div>
          <div className="w-full min-w-[300px] custom-1200:min-w-[390px] bg-slate-400 h-[400px]">
            <img className="object-cover h-full" src="./galeri2.png" alt="" />
          </div>
          <div className="w-full min-w-[300px] custom-1200:min-w-[390px] bg-slate-400 h-[400px]">
            <img className="object-cover h-full" src="./galeri3.png" alt="" />
          </div>
          <div className="w-full min-w-[300px] custom-1200:min-w-[390px] bg-slate-400 h-[400px]">
            <img className="object-cover h-full" src="./galeri4.png" alt="" />
          </div>
          <div className="w-full min-w-[300px] custom-1200:min-w-[390px] bg-slate-400 h-[400px]">
            <img className="object-cover h-full" src="./galeri5.png" alt="" />
          </div>
          <div className="w-full min-w-[300px] custom-1200:min-w-[390px] bg-slate-400 h-[400px]">
            <img className="object-cover h-full" src="./galeri6.png" alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Main;
