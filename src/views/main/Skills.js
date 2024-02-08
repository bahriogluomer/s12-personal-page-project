import { langMap, languageStore } from "@/stores/languageStore";

export default function Skills() {
  const activeLang = languageStore((state) => state.activeLang);
  return (
    <section>
      <div className="flex flex-col xl:gap-4 md:gap-2 gap-1 w-full xl:mt-20 xl:mb-20 lg:mt-24 lg:mb-6 md:mt-16 md:mb-3 mt-2 mb-1">
        <h2 className="xl:text-[48px] lg:text-[40px] md:text-[32px] text-[24px]  font-semibold dark:text-[#AEBCCF]">
          {langMap.skills[activeLang]}
        </h2>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-4 w-[300px]">
            <div className="text-indigo-700 xl:text-[30px] lg:text-[26px] md:text-[20px] text-[16px] dark:text-[#B7AAFF]">
              JavaScript
            </div>
            <p className="xl:text-[14px] text-[12px] text-[#6B7280] dark:text-white">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-[300px]">
            <div className="text-indigo-700 xl:text-[30px] lg:text-[26px] md:text-[20px] text-[16px] dark:text-[#B7AAFF]">
              React.Js
            </div>
            <p className="xl:text-[14px] text-[12px] text-[#6B7280] dark:text-white">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="flex flex-col gap-4 w-[300px]">
            <div className="text-indigo-700 xl:text-[30px] lg:text-[26px] md:text-[20px] text-[16px] dark:text-[#B7AAFF]">
              Node.Js
            </div>
            <p className="xl:text-[14px] text-[12px] text-[#6B7280] dark:text-white">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
