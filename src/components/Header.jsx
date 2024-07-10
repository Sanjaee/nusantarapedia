import React from "react";

const Header = () => {
  return (
    <div id="beranda" className="pt-44 justify-center flex items-center">
      <div className="w-full max-w-[1157px] flex justify-center items-center">
        <div>
          <img className="" src="./bgheder1.png" alt="" />
        </div>
        <div className="text-center w-[732px] px-14 ml-20">
          <h1 className="text-[30px] font-bold">Menelusuri Indonesia</h1>
          <p className="mt-5 text-[20px]">
            Selamat datang di laman Nusantarapedia. Ruang edukasi digital untuk
            mengekplorasi berbagai informasi yang dapat dinikmati lintas usia
            tentang ke-Indonesia-an. Informasi yang edukatif, lengkap dan
            mendalam disajikan dalam perpaduan permainan Sejak berdiri pada
            tahun 2017.
          </p>
          <p className="text-[20px]">
            Nusantarapedia dengan tekun mengembangkan berbagai permainan edukasi
            kebangsaan yang dilandasi Pancasila, UUD 1945, Bhineka Tunggal Ika
            dan Negara Kesatuan Republik Indonesia.Selamat bermain!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
