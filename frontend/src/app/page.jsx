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
      <div className="carteImage"></div>
      <Footer />
    </>
  );
}
