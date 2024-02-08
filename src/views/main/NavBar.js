import { langMap, languageStore } from "@/stores/languageStore";

export default function NavBar() {
  const activeLang = languageStore((state) => state.activeLang);
  return (
    <div className="flex items-center justify-between w-full h-[62px]">
      <div className="flex items-center justify-center w-[50px] h-[50px] rounded-[50%] bg-[#EEEBFF] dark:bg-[#4731D3]">
        {/* yuvarlak profil resmi ile degistir ö yü*/}
        <span className="text-[25px]   text-[#7B61FF] font-semibold dark:text-[#8F88FF]">
          Ö
        </span>
      </div>
      <nav>
        <ul className="flex items-center xl:gap-16 lg:gap-4 md:gap-2 gap-1 xl:text-lg lg:text-base md:text-sm text-xs leading-7 font-medium text-gray-600">
          <li className="cursor-pointer xl:px-4 xl:py-2 px-2 py-1  text-[#6B7280] ">
            <a href="">{langMap.skills[activeLang]}</a>
          </li>
          <li className="cursor-pointer xl:px-4 xl:py-2 px-2 py-1 text-[#6B7280] ">
            {langMap.projects[activeLang]}
          </li>
          <li className="cursor-pointer border border-[#3730A3] text-[#3730A3] bg-white px-4 py-2 rounded outline-none ">
            {langMap.hireMe[activeLang]}
          </li>
        </ul>
      </nav>
    </div>
  );
}
