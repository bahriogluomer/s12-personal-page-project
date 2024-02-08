import { langMap, languageStore } from "@/stores/languageStore";

export default function Profile() {
  const activeLang = languageStore((state) => state.activeLang);
  return (
    <div className="xl:mt-10 xl:mb-20 lg:mt-5 lg:mb-10 mt-2 mb-5">
      <h2 className="xl:text-[48px] lg:text-[40px] md:text-[32px] text-[24px] font-semibold xl:mb-10 lg:mb-6 md:mb-4 mb-2 dark:text-[#AEBCCF]">
        {langMap.profile[activeLang]}
      </h2>
      <div className="profile-section2 xl:flex lg:flex md:flex flex-none xl:gap-4 md:gap-2 gap-1 w-full xl:mb-5 lg:mb-3 mb-2   justify-between">
        <div className="flex-none gap-2 ">
          <h3 className="flex xl:text-[30px] lg:text-[26px] md:text-[20px] text-[16px] text-[#4338CA] dark:text-[#B7AAFF] xl:mb-5  md:mb-3  mb-1">
            {langMap.profile[activeLang]}
          </h3>
          <div className="flex flex-row">
            <div className="flex flex-col xl:gap-5 md:gap-2 gap-1 items-start  xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] font-semibold dark:text-white ">
              <span>{langMap.birthDate[activeLang]}</span>
              <span>{langMap.city[activeLang]}</span>
              <span>{langMap.education[activeLang]}</span>
              <span>{langMap.preferredRole[activeLang]}</span>
            </div>
            <div className="flex flex-col xl:gap-5 md:gap-2 gap-1   xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] items-start font-normal xl:ml-10 lg:ml-5 md:ml-3 ml-1 text-[#000000] dark:text-white ">
              <span>19.09.1996</span>
              <span>İstanbul</span>
              <span>{langMap.educationDesc[activeLang]}</span>
              <span>Frontend, UI</span>
            </div>
          </div>
        </div>
        <div className="flex  flex-auto flex-col  xl:gap-4 md:gap-2 gap-1 xl:ml-[56px] lg:ml-[20px] md:ml-[10px] ml-[4px] xl:w-[48vw] lg:w-[30vw] md:w-[20vw] w-[80vw] xl:mr-[130px] lg:mr-[16px] md:mr-[10px] mr-[4px]">
          <h3 className="xl:text-[30px] lg:text-[26px] md:text-[20px] text-[16px] text-[#4338CA] dark:text-[#B7AAFF]">
            {langMap.aboutMe[activeLang]}
          </h3>
          <p className="text-[#6B7280] xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] dark:text-white">
            {langMap.aboutMeDesc1[activeLang]}
          </p>
          <p className="text-[#6B7280]  xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] dark:text-white">
            {langMap.aboutMeDesc2[activeLang]}
          </p>
        </div>
      </div>
    </div>
  );
}
