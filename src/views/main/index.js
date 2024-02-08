"use client";
import { useState } from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Profile from "./Profile";
import Projects from "./Projects";
import Skills from "./Skills";
import ThemeModeSelector from "./ThemeModeSelector";

//TODO
// projects objesini nasil olustururz? nasil mapleriz?
// tema ve dil seceneklerini localStorage'a atmak
// css optimize edilecek
// daha responsive hale getirilecek

export default function Main() {
  return (
    <div className="w-full bg-light-background dark:bg-dark-background">
      <div className="w-full container mx-auto my-auto ">
        <ThemeModeSelector />
        <NavBar />
        <Hero />
        <Skills />
        <div className="w-full h-[1px] bg-gray-300 my-4"></div>
        <Profile />
        <div className="w-full h-[1px] bg-gray-300 my-4"></div>
        <Projects />
      </div>
      <div className="bg-gray-100 dark:bg-[#141414] ">
        <Footer />
      </div>
    </div>
  );
}
