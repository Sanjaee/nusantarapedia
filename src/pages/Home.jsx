import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <div className="background-1  lg:flex hidden flex-col ">
        <Navbar />
        <Header />
        <Main />
      </div>
      <div className="background-1-mobile lg:hidden flex flex-col  ">
        <Navbar />
        <Header />
        <Main />
      </div>
    </>
  );
};

export default Home;
