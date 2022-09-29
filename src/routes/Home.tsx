import { Search } from '../components/Search';
import { Loading } from "../components/Loading";
import { responseProps } from '../components/Search';
import {loadDarkState, setDarkState} from "../utils/DarkMode";
import { GithubLogo, Moon, Sun } from "phosphor-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


export function Home(){
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

    const navigate = useNavigate();
    const NavigateToAval=(github_aval: responseProps)=>{        
      navigate('/aval',{state:{...github_aval, darkMode }});
    }
    const [loading, setLoading] = useState(false);    

    const [darkMode, _setDarkMode] = useState(loadDarkState());
                
    useEffect(() => {
      if (darkMode) {
        document.body.classList.remove("bg-trybelight");
        document.body.classList.add("bg-trybe");        
      } else {
        document.body.classList.remove("bg-trybe");
        document.body.classList.add("bg-trybelight");
      }
      setDarkState(darkMode)
    }, [darkMode]);
        
    return (        
        <div className={
          `max-w-[1366px] max-h-[768px] mx-auto flex flex-col items-center `
        }>         
        {darkMode? 
          <Moon
            className="self-end mr-12 mt-12
            text-[#1DB702]
            hover:text-[#A0F046]
            text-[50px]"
            onClick={() => _setDarkMode(false)}                    
            />
            :
          <Sun
            className="self-end mr-12 mt-12
            text-[#A0F046]
            hover:text-[#034422]
            text-[50px]"
            onClick={() => _setDarkMode(true)}                    
            />
          }             
          <GithubLogo 
          className="mt-16"
          data-aos="fade-down"
          data-aos-duration="1000"            
            color='white'
            size={100} />          
          <h1 
            data-aos="fade-down"
            className='text-white font-black text-6xl mt-8'>
            trybe-github-evaluator
          </h1>
        
          <h2 
          data-aos="fade-left"
          className='text-white font-medium italic text-3xl mt-8'>
            Descubra a nota do seu perfil:
          </h2>
    
          {loading? 
            <Loading 
              darkMode={darkMode}/> 
          : 
            <Search 
              loadingIndicator={setLoading}
              redirectIndicator={NavigateToAval}   
              darkMode={darkMode}    
            />}       
        </div>
      )
}