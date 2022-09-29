import { ArrowUUpLeft, CircleWavyWarning } from "phosphor-react";
import '../styles/main.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadDarkState, setDarkState } from "../utils/DarkMode";

export function Error() {  
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    const navigate = useNavigate();
    
    const darkMode = loadDarkState();
    useEffect(() => {
      setDarkState(darkMode);
    }, []);

    return (
        <div           
            data-aos-duration="1000"      
            className='flex flex-col justify-center items-center h-screen'>                      
            <CircleWavyWarning       
                data-aos="fade-down"       
                data-aos-duration="200"                                        
                size={160} color="white"/>
            <h1 
                data-aos="fade-left"       
                data-aos-duration="350" 
                className="text-medium text-7xl text-white max-w-4xl text-center mt-12">
                Ops, parece que algo deu errado!
            </h1>

            <button
                data-aos="fade-up"  
                className={`mt-12 bg-transparent w-48 h-14 flex items-center justify-center gap-2 group
                rounded-2xl border-[3px] border-white
                ${darkMode? "hover:bg-[#1DB702]" : "hover:bg-[#0B5A47]"}
                `}
                onClick={() => navigate('/')}>
                <ArrowUUpLeft size={22}  className="text-white"/>
                <h2 className="text-white font-medium text-base pt-1
                 ">Voltar ao início</h2>            
            </button>
        </div>
    )
}