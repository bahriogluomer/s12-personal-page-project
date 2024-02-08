import { langMap, languageStore } from "@/stores/languageStore";

export default function Footer() {
  const activeLang = languageStore((state) => state.activeLang);
  return (
    <div className="mx-auto xl:h-[250px] lg:h-[210px] md:h-[180px] h-[150px]">
      <div className="flex flex-col gap-2 justify-center xl:p-[60px] lg:p-[40px] md:p-[30px] p-[20px]">
        <span className="xl:text-[42px] lg:text-2xl md:text-xl text-base font-semibold dark:text-[#AEBCCF]">
          {langMap.footerText1[activeLang]} <br />
          <br />
          {langMap.footerText2[activeLang]}
        </span>
      </div>
      <div className="flex items-center justify-between  xl:px-[60px] lg:px-[30px] md:px-[20px] px-[10px]">
        <span className="flex items-center gap-2 text-[#AF0C48] dark:text-[#BAB2E7] xl:text-[20px] md:text-[12px] text-[10px]">
          <span className="text-sm">&#128073;</span>
          bahriogluomer@gmail.com
        </span>
        <ul className="flex items-center gap-4">
          <li className="xl:text-[16px] md:text-[12px] text-[10px] font-semibold cursor-pointer dark:text-[#E1E1FF]">
            {langMap.footerPersonalBlog[activeLang]}
          </li>
          <li className="xl:text-[16px] md:text-[12px] text-[10px] font-semibold cursor-pointer text-[#17D18B]">
            Github
          </li>
          <li className="xl:text-[16px] md:text-[12px] text-[10px] font-semibold cursor-pointer text-[#0BA6F6]">
            Linkedin
          </li>
        </ul>
      </div>
    </div>
  );
}
