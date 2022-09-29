import { Coffee } from "phosphor-react";
import '../styles/main.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export function Tea() {  
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

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
    
    {darkMode?                       
        document.body.classList.add("bg-trybe")                                              
    :              
        document.body.classList.add("bg-trybelight")
    } 
    
    return (
        <div           
            data-aos-duration="1000"      
            className='flex flex-col justify-center items-center h-screen'>                      
            <Coffee       
            data-aos="fade-right"       
            data-aos-duration="1500"                                        
            size={160} color="white"/>
            <h1 
            data-aos="fade-left"       
            data-aos-duration="1500" 
            className="text-medium text-7xl text-white">
            Sim, eu gosto de chá e você?
            </h1>
        </div>
    )
}