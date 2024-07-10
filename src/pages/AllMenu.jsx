import React from "react";
import Navbar from "../components/Navbar";
import LayoutMenu from "../components/LayoutMenu";
import Footer from "../components/Footer";

const AllMenu = () => {
  return (
    <>
      <Navbar />
      <LayoutMenu />
      <Footer isFixed="fixed" />
    </>
  );
};

export default AllMenu;
