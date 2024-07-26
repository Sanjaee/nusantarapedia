import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Header from "../components/Header";

const Home = () => {
  const [bgClass, setBgClass] = useState("background-1-mobile");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1000) {
        setBgClass("background-1");
      } else {
        setBgClass("background-1-mobile");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial class based on initial window size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`${bgClass} flex-col`}>
      <Navbar />
      <Header />
      <Main />
    </div>
  );
};

export default Home;
