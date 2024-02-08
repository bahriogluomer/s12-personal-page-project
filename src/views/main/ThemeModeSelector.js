import { langMap, languageStore } from "@/stores/languageStore";
export default function ThemeModeSelector({}) {
  const toggleDarkMode = () => {
    if (document.body.className == "") {
      document.body.className = "dark";
      document.getElementById("themeModeLabel").innerHTML =
        langMap.themeLight[activeLang];
    } else {
      document.body.className = "";
      document.getElementById("themeModeLabel").innerHTML =
        langMap.themeDark[activeLang];
    }
  };
  const switchLanguage = languageStore((state) => state.switchLanguage);
  const activeLang = languageStore((state) => state.activeLang);

  return (
    <div className="container mx-auto dark:bg-[#252128]">
      <div className=" flex items-center justify-between xl:pt-[23px] lg:pt-[15px] md:pt-[10px] pt-[5px]">
        <div></div>
        <div className="flex items-center xl:gap-4 lg:gap-2 gap-1 xl:text-[15px] lg:text-[12px] text-[10px] letter-spacing: 0.1em font-semibold xl:mb-[24px] lg:mb-[16px]  mb-[10px]">
          <label className="relative inline-flex items-center  cursor-pointer text-[#777777] dark:text-[#D9D9D9] ">
            <input
              onChange={toggleDarkMode}
              type="checkbox"
              value=""
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span
              id="themeModeLabel"
              className="ms-3 text-md font-medium text-gray-900 dark:text-gray-300"
            >
              DARK MODE
            </span>
          </label>
          |
          <button onClick={switchLanguage}>
            <span className="text-[#4731D3] cursor-pointer dark:text-[#BAB2E7s]">
              {activeLang == "en" ? "TÜRKÇE'YE GEÇ" : "SWITCH TO ENGLISH"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
