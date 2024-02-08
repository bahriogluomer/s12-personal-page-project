export default function Project() {
  return (
    <>
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
          <div className="flex flex-row items-center gap-2 xl:my-5 lg:my-3 md:my-2 my-1 xl:text-base md:text-sm text-xs">
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
              <button className="font-medium flex underline dark:text-[#E1E1FF] text-[#3730A3] xl:text-base md:text-sm text-xs">
                {langMap.viewSite[activeLang]}
              </button>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
