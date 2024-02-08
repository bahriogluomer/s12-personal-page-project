import { useEffect, useState } from "react";
import { projectStore } from "@/stores/languageStore";
import { languageStore } from "@/stores/projectsStore";

export default function Project() {
  const [projects, setProjects] = useState([]);
  const activeLang = languageStore((state) => state.activeLang);

  useEffect(() => {
    const unsubscribe = projectStore.subscribe((projects) => {
      setProjects(projects);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      {projects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col xl:w-[23vw] lg:w-[20vw] md:w-[25vw] w-[27vw]"
        >
          <img className="h-[180px] object-cover" src={project.img} alt="" />
          <h3 className="xl:text-[30px] lg:text-[26px] md:text-[20px] text-[16px] font-medium leading-7 text-[#4338CA] xl:my-5 lg:my-3 md:my-2 my-1 dark:text-[#CFCBFF]">
            {activeLang === "en" ? project.title.en : project.title.tr}
          </h3>
          <p className="text-[14px]  text-gray-800 dark:text-white">
            {activeLang === "en"
              ? project.description.en
              : project.description.tr}
          </p>
          <div className="flex flex-row items-center gap-2 xl:my-5 lg:my-3 md:my-2 my-1 xl:text-base md:text-sm text-xs"></div>
          <div className="flex justify-between">
            <a href={project.githublink}>
              <button className="font-medium flex-1 underline dark:text-[#E1E1FF] text-[#3730A3] xl:text-base md:text-sm text-xs">
                {activeLang === "en" ? "Github" : "Github"}
              </button>
            </a>
            <a href={project.viewSiteLink}>
              <button className="font-medium flex underline dark:text-[#E1E1FF] text-[#3730A3] xl:text-base md:text-sm text-xs">
                {activeLang === "en" ? "View Site" : "Sayfayı Görüntüle"}
              </button>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
