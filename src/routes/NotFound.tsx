import '../styles/main.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Alien, FlyingSaucer } from 'phosphor-react';

export function NotFound() {  
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    const navigate = useNavigate();
    const location = useLocation();

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
        className='flex flex-col justify-center items-center h-screen'>                      
        <h1
        data-aos="fade-down" 
            className='text-white font-bold text-6xl'>
            Seu perfil é nota: <span className={
                `${darkMode? "text-[#A0F046]" : "text-[#E22859]"} 
                font-black`}>404</span> 
        </h1>
        <div
        data-aos="fade"  
        data-aos-duration="1000"
            className='bg-transparent w-72 h-72 
            rounded-full border-white border-[12px] mt-14 border-dashed
            flex items-center justify-center'
        >
            <Alien 
            data-aos="flip-up"  
            data-aos-duration="1000"
             color={`${darkMode? "#A0F046" : "#E22859" }`} size={150}/>
        </div>
        <h2
        data-aos="fade-up"  
        className='text-white font-semibold text-3xl mt-14'>
            {location.state}
        </h2>

        <button
            data-aos="fade-up"  
            data-aos-duration="1000" 
            className={`mt-12 bg-transparent w-96 h-20 flex items-center justify-center gap-2 group
            rounded-2xl border-[3px] border-white
            ${darkMode? "hover:bg-[#1DB702]" : "hover:bg-[#0B5A47]"}
            `}
            onClick={() => navigate('/')}>
            <FlyingSaucer 
            color={`${darkMode? "#A0F046" : "#E22859" }`}
                data-aos="fade-up-left"  
                data-aos-duration="1500" 
            size={40}  className="text-white"/>
            <h2 className="text-white font-medium text-3xl pt-1
                ">Voltar para casa</h2>            
        </button>

        </div>
    )
}