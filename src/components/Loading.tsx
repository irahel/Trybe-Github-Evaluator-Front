import { darkModeProps } from "../utils/DarkMode";

export function Loading({ darkMode }: darkModeProps) {
  return (
    <div data-aos="fade-down" data-aos-duration="1500">
      <div className="flex justify-center items-center mt-20">
        <div className="flex items-center gap-2 text-gray-500">
          <span
            className={`h-32 w-32 block 
                rounded-full border-[12px] border-white
                  animate-spin
                  ${darkMode ? "border-t-[#A0F046]" : "border-t-[#0376E2]"}`}
          ></span>
        </div>
      </div>
      <h2 className="text-white font-medium italic text-3xl mt-8">
        Calculando sua nota...
      </h2>
    </div>
  );
}
