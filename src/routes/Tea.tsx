import { Coffee } from "phosphor-react";
import '../styles/main.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Tea() {  
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

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
            Yes, I like tea and you sir?
            </h1>
        </div>
    )
}