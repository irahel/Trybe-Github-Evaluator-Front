import { CircleWavyWarning } from "phosphor-react";
import '../styles/main.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Error() {  
    useEffect(() => {
        AOS.init();
        AOS.refresh();
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
                className="text-medium text-7xl text-white max-w-6xl text-center mt-12">
                Ops, looks like an error has occurred, are you lost?
            </h1>
        </div>
    )
}