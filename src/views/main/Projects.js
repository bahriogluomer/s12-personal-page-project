/* eslint-disable @next/next/no-img-element */
//TODO:
//Project.js icinde komponenti olustur ve burada datadan cekip maple

import { langMap, languageStore } from "@/stores/languageStore";
import { projects } from "@/stores/projectsStore";

export default function Projects() {
  const activeLang = languageStore((state) => state.activeLang);
  const projectsArr = activeLang == "en" ? projects.en : projects.tr;
  console.log(projectsArr);

  return (
    <div className="flex flex-col gap-4 w-full xl:mt-20 xl:mb-40 lg:mt-10 lg:mb-20 md:mt-5 md:mb-10 mt-2 mb-5">
      <h2 className="xl:text-[48px] lg:text-[40px] md:text-[32px] text-[24px]  font-semibold dark:text-[#AEBCCF] xl:mb-5 lg:mb-3 md:mb-2 mb-1">
        {langMap.projects[activeLang]}
      </h2>
      <div className="flex justify-between xl:gap-5 lg:gap-3 md:gap-2 gapy-1 px-3">
        {projectsArr.map((project) => (
          <div
            key={project.id}
            className="flex flex-col xl:w-[23vw] lg:w-[20vw] md:w-[25vw] w-[27vw]"
          >
            <img className="h-[180px] object-cover" src={project.img} alt="" />
            <h3 className="xl:text-[30px] lg:text-[26px] md:text-[20px] text-[16px] font-medium leading-7 text-[#4338CA] xl:my-5 lg:my-3 md:my-2 my-1 dark:text-[#CFCBFF]">
              {project.title}
            </h3>
            <p className="text-[14px]  text-gray-800 dark:text-white">
              {project.description}
            </p>
            <div className="flex flex-row items-center gap-2 xl:my-5 lg:my-3 md:my-2 my-1 xl:text-base md:text-sm text-xs flex-wrap">
              <div className="py-1 px-3 border border-[#3730A3] rounded text-[#3730A3] dark:text-[#8F88FF] dark:border-[#383838]">
                react
              </div>
              <div className="py-1 px-3 border border-[#3730A3] rounded text-[#3730A3] dark:text-[#8F88FF] dark:border-[#383838]">
                redux
              </div>
              <div className="py-1 px-3 border border-[#3730A3] rounded text-[#3730A3] dark:text-[#8F88FF] dark:border-[#383838]">
                axios
              </div>
            </div>

            <div className="flex flex-row items-center gap-2 xl:my-5 lg:my-3 md:my-2 my-1 xl:text-base md:text-sm text-xs"></div>
            <div className="flex justify-between">
              <a href={project.githublink}>
                <button className="font-medium flex-1 underline dark:text-[#E1E1FF] text-[#3730A3] xl:text-base md:text-sm text-xs">
                  Github
                </button>
              </a>
              <a href={project.viewSiteLink}>
                <button className="font-medium flex underline dark:text-[#E1E1FF] text-[#3730A3] xl:text-base md:text-sm text-xs pt-1">
                  {langMap.viewSite[activeLang]}
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
