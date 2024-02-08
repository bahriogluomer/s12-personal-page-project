export default function Project() {
  return (
    <>
      <div className="flex flex-col xl:w-[23vw] lg:w-[20vw] md:w-[25vw] w-[27vw]">
        <img className="h-[180px] object-cover" src="/project1.png" alt="" />
        <h3 className="xl:text-[30px] lg:text-[26px] md:text-[20px] text-[16px] font-medium leading-7 text-[#4338CA] xl:my-5 lg:my-3 md:my-2 my-1 dark:text-[#CFCBFF]">
          Workintech
        </h3>
        <p className="text-[14px]  text-gray-800 dark:text-white">
          Project Description
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
        <div className="flex justify-between">
          <a href="">
            <button className="font-medium flex-1 underline dark:text-[#E1E1FF] text-[#3730A3] xl:text-base md:text-sm text-xs">
              Github
            </button>
          </a>
          <a href="">
            <button className="font-medium flex underline dark:text-[#E1E1FF] text-[#3730A3] xl:text-base md:text-sm text-xs">
              View Site
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
