import { create, useStore } from "zustand";
import { languageStore } from "./languageStore";

export const ProjectsStore = create((set) => ({
  setProjects: () => {
    const projectsArr = [];
    const activeLang = languageStore((state) => state.activeLang);

    set({ projectsArr: activeLang === "en" ? projects.en : projects.tr });
    console.log(projectsArr);
  },
}));

export const projects = {
  en: [
    {
      id: 1,
      img: "/project1.png",
      title: "Workintech",
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      githublink: "",
      viewSiteLink: "",
    },
    {
      id: 2,
      img: "/project2.png",
      title: "Random Jokes",
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      githublink: "",
      viewSiteLink: "",
    },
    {
      id: 3,
      img: "/project3.png",
      title: "Journey",
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      githublink: "",
      viewSiteLink: "",
    },
  ],
  tr: [
    {
      id: 1,
      img: "/project1.png",
      title: "Workintech",
      description:
        "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmelerine izin veren basit, özelleştirilebilir, minimal kurulum çerez eklentisi. Bu, vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuş olup bir NPM paketi olarak mevcuttur ve git deposu kod ve temalar üzerinde her türlü özelleştirmeye imkan tanır.",
      githublink: "",
      viewSiteLink: "",
    },
    {
      id: 2,
      img: "/project2.png",
      title: "Random Jokes",
      description:
        "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmelerine izin veren basit, özelleştirilebilir, minimal kurulum çerez eklentisi. Bu, vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuş olup bir NPM paketi olarak mevcuttur ve git deposu kod ve temalar üzerinde her türlü özelleştirmeye imkan tanır.",
      githublink: "",
      viewSiteLink: "",
    },
    {
      id: 3,
      img: "/project3.png",
      title: "Journey",
      description:
        "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmelerine izin veren basit, özelleştirilebilir, minimal kurulum çerez eklentisi. Bu, vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuş olup bir NPM paketi olarak mevcuttur ve git deposu kod ve temalar üzerinde her türlü özelleştirmeye imkan tanır.",
      githublink: "",
      viewSiteLink: "",
    },
  ],
};
