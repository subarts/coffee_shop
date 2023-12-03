"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function Coffee() {
  return (
    <>
      <Header />
      <main className="wrapper">
        <h1 className="leading-[105%] text-[#403F3D] text-7xl font-semibold">
          Behind each of our cups
          <br /> hides an
          <span className="captionItalic">amazing surprise</span>
        </h1>
      </main>
      <Footer />
    </>
  );
}
