import { create } from "zustand";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const languageStore = create((set) => ({
  activeLang: "en",
  switchLanguage: () =>
    set((state) =>
      state.activeLang == "en" ? { activeLang: "tr" } : { activeLang: "en" }
    ),
}));

export const langMap = {
  skills: {
    en: "Skills",
    tr: "Yetenekler",
  },
  hireMe: {
    en: "Hire me",
    tr: "İletişime geç",
  },
  projects: {
    en: "Projects",
    tr: "Projeler",
  },
  themeDark: {
    en: "DARK MODE",
    tr: "KARANLIK TEMA",
  },
  themeLight: {
    en: "LIGHT MODE",
    tr: "AYDINLIK TEMA",
  },

  heroHeader1: {
    en: "Creative Thinker",
    tr: "Yaratıcı Düşünür",
  },
  heroHeader2: {
    en: "Minimalism Lover",
    tr: "Minimalizm Tutkunu",
  },
  heroDescription: {
    en: "Hi, I’m Ömer. I’m a fullstack developer. If you are looking for a Developer who can craft solid and scalable frontend products with great user experiences, let’s work together.",
    tr: "Merhaba, Ben Ömer. Fullstack web geliştiriciyim. Güçlü ve ölçeklenebilir frontend ürünleri oluşturabilen, harika kullanıcı deneyimleri sunabilen bir geliştirici arıyorsanız, birlikte çalışalım.",
  },
  profile: {
    en: "Profile",
    tr: "Profil",
  },
  birthDate: {
    en: "Birth Date",
    tr: "Doğum Tarihi",
  },
  city: {
    en: "City",
    tr: "Şehir",
  },
  education: {
    en: "Education",
    tr: "Eğitim",
  },
  educationDesc: {
    en: "Yildiz Tech. University BSc. Marine Engineering, 2020",
    tr: "Yıldız Tek. Ünv. Gemi Makineleri İşl. Mühendisliği, 2020",
  },

  preferredRole: {
    en: "Preferred Role",
    tr: "Tercih Edilen Rol",
  },

  aboutMe: {
    en: "About Me",
    tr: "Hakkımda",
  },
  aboutMeDesc1: {
    en: " As a full-stack web developer, I specialize in creating seamless digital experiences that fuse elegant design with powerful functionality. With expertise in both frontend and backend technologies, I thrive in architecting scalable applications and implementing robust solutions. ",
    tr: " Fullstack web geliştirici olarak, şık tasarımı güçlü işlevsellikle birleştiren sorunsuz dijital deneyimler oluşturmada uzmanım. Hem frontend hem de backend teknolojilerinde uzmanlığım ile ölçeklenebilir uygulamaları tasarlarken ve güçlü çözümler uygularken başarılıyım.",
  },
  aboutMeDesc2: {
    en: "From responsive user interfaces using HTML, CSS, and JavaScript to building resilient server-side applications with Node.js and Spring Boot, I am committed to staying at the forefront of technology trends to deliver innovative web experiences. With a collaborative approach and a focus on exceeding expectations, I am passionate about driving meaningful impact through every project.",
    tr: "HTML, CSS ve JavaScript kullanarak duyarlı kullanıcı arayüzleri oluşturmaktan, Next.js ve Spring Boot ile sağlam sunucu tarafı uygulamaları geliştirmeye kadar, yenilikçi web deneyimleri sunmak için teknoloji trendlerinin önünde kalmaya kararlıyım. İşbirlikçi bir yaklaşımla ve beklentileri aşmaya odaklanarak, her projede anlamlı bir etki yaratmaktan tutkulu olduğumu belirtmek isterim.",
  },
  projectsDesc: {
    en: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
    tr: "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmelerine izin veren basit, özelleştirilebilir, minimal kurulum çerez eklentisi. Bu, vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuş olup bir NPM paketi olarak mevcuttur ve git deposu kod ve temalar üzerinde her türlü özelleştirmeye imkan tanır.",
  },

  viewSite: {
    en: "View Site",
    tr: "Sayfayı Görüntüle",
  },

  footerText1: {
    en: "Let's work together on",
    tr: "Yeni ürününüzde",
  },

  footerText2: {
    en: "your next product.",
    tr: "birlikte çalışalım.",
  },

  footerPersonalBlog: {
    en: "Personal Blog",
    tr: "Kişisel Blog",
  },
};
