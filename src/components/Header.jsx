import React from "react";

const Header = () => {
  return (
    <>
      {/* Deksktop */}
      <div
        id="beranda"
        className="pt-28 justify-center lg:flex hidden items-center"
      >
        <div className="w-full max-w-[1157px] flex justify-center items-center">
          <div>
            <img className="" src="./bgheder1.png" alt="" />
          </div>
          <div className="text-center w-[732px] px-14 ml-20">
            <h1 className="text-[30px] font-bold">Menelusuri Indonesia</h1>
            <p className="mt-5 text-[20px]">
              Selamat datang di laman Nusantarapedia. Ruang edukasi digital
              untuk mengekplorasi berbagai informasi yang dapat dinikmati lintas
              usia tentang ke-Indonesia-an. Informasi yang edukatif, lengkap dan
              mendalam disajikan dalam perpaduan permainan Sejak berdiri pada
              tahun 2017.
            </p>
            <p className="text-[20px]">
              Nusantarapedia dengan tekun mengembangkan berbagai permainan
              edukasi kebangsaan yang dilandasi Pancasila, UUD 1945, Bhineka
              Tunggal Ika dan Negara Kesatuan Republik Indonesia.Selamat
              bermain!
            </p>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        id="kesatu"
        className="pt-20 justify-center lg:hidden flex flex-col items-center"
      >
        <div className="w-full max-w-[1157px] flex flex-col justify-center items-center">
         
          <div className="text-center px-5  ">
            <h1 className="text-lg font-bold">Menelusuri Indonesia</h1>
            <p className="mt-2 text-sm">
              Selamat datang di laman Nusantarapedia. Ruang edukasi digital
              untuk mengekplorasi berbagai informasi yang dapat dinikmati lintas
              usia tentang ke-Indonesia-an. Informasi yang edukatif, lengkap dan
              mendalam disajikan dalam perpaduan permainan Sejak berdiri pada
              tahun 2017.
            </p>
            <p className="text-sm">
              Nusantarapedia dengan tekun mengembangkan berbagai permainan
              edukasi kebangsaan yang dilandasi Pancasila, UUD 1945, Bhineka
              Tunggal Ika dan Negara Kesatuan Republik Indonesia.Selamat
              bermain!
            </p>
          </div>
          <div>
            <img className="w-40 mt-5"  src="./bgheder1.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
