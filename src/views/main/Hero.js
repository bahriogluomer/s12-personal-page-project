import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { langMap, languageStore } from "@/stores/languageStore";

export default function Hero() {
  const activeLang = languageStore((state) => state.activeLang);
  return (
    <div className="flex flex-col  w-full xl:mt-14 lg:mt-8 md:mt-5 mt-2">
      <div className="flex ">
        <div className="flex flex-col xl:gap-[50px] lg:gap-[20px] md:gap-[10px] gap-[5px] relative">
          <div className="flex items-center xl:gap-3 gap-1 ">
            <div className="xl:w-[100px] lg:w-[80px] md:w-[6px] w-[50px] h-[1px] bg-gradient-to-r from-[#4338CA] via-[#4338CA] to-[#4338CA] dark:bg-[#BAB2E7]"></div>
            <div className="xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px]  font-medium text-[#4338CA] dark:text-[#B7AAFF]">
              Ömer Bahrioğlu
            </div>
          </div>
          <div>
            <h1 className="xl:text-6xl lg:text-4xl  text-xl font-bold text-[#1F2937] dark:text-[#AEBCCF]">
              {langMap.heroHeader1[activeLang]}
              <br />
              {langMap.heroHeader2[activeLang]}
            </h1>
          </div>
          <p className="hero_description xl:text-[18px] lg:text-[14px] text-[12px] text-[#6B7280] dark:text-white">
            {langMap.heroDescription[activeLang]}
          </p>
          <div className="flex items-center xl:gap-3 md:gap-2 gap-1 bottom-1 left-0 font-semibold">
            <a
              className=" bg-indigo-800 text-white xl:px-8 xl:py-2 lg:px-5 lg:py-1 px-4 py-1 rounded dark:text-black dark:bg-[#E1E1FF]"
              href=""
            >
              {langMap.hireMe[activeLang]}
            </a>
            <a
              className="flex items-center gap-2  xl:px-5 xl:py-2 px-2 py-1 rounded border border-indigo-800 text-indigo-800 dark:bg-[#383838] dark:text-[#E1E1FF]"
              href=""
            >
              <FontAwesomeIcon icon={faGithub} /> Github
            </a>
            <a
              className="flex items-center gap-2  xl:px-5 xl:py-2 px-2 py-1 rounded border  border-indigo-800 text-indigo-800 dark:bg-[#383838] dark:text-[#E1E1FF]"
              href=""
            >
              <FontAwesomeIcon icon={faLinkedin} /> Linkedin
            </a>
          </div>
        </div>
        <div className="w-full h-full relative p-4">
          <img
            className=" xl:w-[620px] xl:h-[375px] lg:w-[490px] lg:h-[335px] md:w-[425px] md:h-[250px] sm:h-[180px] sm:w-[300px] xs:display-none object-cover rounded-[18px] absolute right-0"
            src="https://picsum.photos/seed/picsum/200/300"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
