import { useEffect, useState } from "react";

export function Loading(){
    const [darkMode, _setDarkMode] = useState(false);
    useEffect(() => {
      const json = localStorage.getItem("site-dark-mode");
      const currentMode = JSON.parse(json as string);
      if (currentMode) {
        _setDarkMode(true);
      } else {
        _setDarkMode(false);
      }
    }, []);
    

    return (
    <div
    data-aos="fade-down"
    data-aos-duration="1500">
        <div         
            className="flex justify-center items-center mt-20">
            <div className="flex items-center gap-2 text-gray-500">
                <span className={`h-32 w-32 block 
                rounded-full border-[12px] border-white
                  animate-spin
                  ${darkMode? "border-t-[#A0F046]" : "border-t-[#0376E2]"}`}></span>            
            </div>            
        </div>
        <h2 className='text-white font-medium italic text-3xl mt-8'>
            Calculando sua nota...
        </h2>    
    </div>    
    )
}