"use client";

import "./page.css";
import "./globals.css";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
       {/* <Image
          className="voyage-details-image"
          width={250}
          height={250}
          src="/public/img/allmonde.jpg"
          alt="Image de monde"
        /> */}
      <Footer />
    </>
  );
}
