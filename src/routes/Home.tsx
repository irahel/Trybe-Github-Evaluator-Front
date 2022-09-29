import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GithubLogo } from "phosphor-react";
import { Search } from '../components/Search';
import { Loading } from "../components/Loading";
import { responseProps } from '../components/Search';
import AOS from "aos";
import "aos/dist/aos.css";

export function Home(){
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

    const navigate = useNavigate();
    const NavigateToAval=(github_aval: responseProps)=>{        
      navigate('/aval',{state:github_aval});
    }
    const [loading, setLoading] = useState(false);    

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
      
    useEffect(() => {
      if (darkMode) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
      const json = JSON.stringify(darkMode);
      localStorage.setItem("site-dark-mode", json);
    }, [darkMode]);
    
    {darkMode?                       
      document.body.classList.add("bg-trybe")                                              
    :              
      document.body.classList.add("bg-trybelight")
    }

    return (
        <div className={
          `max-w-[1366px] max-h-[768px] mx-auto flex flex-col items-center my-[150px]`
        }>              
          <GithubLogo 
          data-aos="fade-down"
          data-aos-duration="1000"            
            color='white'
            size={100} />
          
          <h1 
            data-aos="fade-down"
            className='text-white font-black text-6xl mt-8'>
            trybe-github-evaluator
          </h1>
        {/*{`${darkMode? "text-red-500" : "text-blue-500"}`}*/ }
          <h2 
          data-aos="fade-left"
          className='text-white font-medium italic text-3xl mt-8'>
            Descubra a nota do seu perfil:
          </h2>
    
          {loading? <Loading /> : <Search 
          loadingIndicator={setLoading}
          redirectIndicator={NavigateToAval}       
            />}   
    
        </div>
      )
}