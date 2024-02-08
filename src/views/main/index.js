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
// darkMode tailwind  ile eklenecek
// i18n next.js ile locale objesi ve en-tr datalari olusturulacak(video)
// olusturulan datalar t() fonksiyonu ile eklenecek
// projects objesini nasil olustururz? nasil mapleriz?
// language switch nasil yapilacak context mi ?
// tema ve dil seceneklerini localStorage'a atmak
// css optimize edilecek
// responsive hale getirilecek

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
