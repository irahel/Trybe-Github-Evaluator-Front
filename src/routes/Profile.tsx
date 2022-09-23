import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from 'chart.js';
import { ArrowDown, ArrowsClockwise, CaretDoubleDown, CaretDoubleUp } from 'phosphor-react';
import { AvaliationItem } from '../components/AvaliationItem';
import '../styles/main.css';
import svg90 from '../../public/emojs/90.svg'
import svg60 from '../../public/emojs/60.svg'
import svg40 from '../../public/emojs/40.svg'
import svg20 from '../../public/emojs/20.svg'
import svg0 from '../../public/emojs/0.svg'
import AOS from "aos";
import "aos/dist/aos.css";


ChartJS.register(ArcElement);

export function Profile() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    const navigate = useNavigate();
    const location = useLocation();
    const githubaval = location.state;
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setShowButton(window.pageYOffset > 300);
        });
      }, []);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    
    const grade_color = 
        githubaval.grade >= 90? '#0067F5' : 
        githubaval.grade >= 60? '#8958A3' : 
        githubaval.grade >= 40? '#A38958' : 
        githubaval.grade >= 20? '#C12F2F' : 
                                '#322626';
    
    const grade_color_hover = 
        githubaval.grade >= 90? '#0052c4' : 
        githubaval.grade >= 60? '#6e4682' : 
        githubaval.grade >= 40? '#826e46' : 
        githubaval.grade >= 20? '#9a2626' : 
                                '#281e1e';

    const grade_emoj= 
    githubaval.grade >= 90?  svg90 :  
    githubaval.grade >= 60?  svg60 : 
    githubaval.grade >= 40?  svg40 : 
    githubaval.grade >= 20?  svg20: 
                             svg0   

    const data = {
        labels: ["I"],
        datasets: [
          {
            data: [100-githubaval.grade, githubaval.grade],
            backgroundColor: ["white", grade_color],
            hoverBackgroundColor: ["white", grade_color_hover],
            borderWidth: 0
          }
        ]
      };

    return (
    <div className='flex flex-col items-center scrollbar-hide'>      
        <section className='h-screen flex flex-col items-center justify-center'>
            <h1                 
                className='text-white font-bold text-6xl flex flex-row justify-center'>
                Seu perfil é nota: 
                <span
                    data-aos="fade-down"
                    data-aos-duration="1000"         >  {githubaval?.grade}</span>
            </h1>

            <div className="w-72 h-72 mt-20 relative items-center justify-center">
                <Doughnut             
                    options={{            
                        responsive: true,
                        maintainAspectRatio: true,            
                    }}
                    data={data}/>

                {/*TODO: pre-load image in loading screen*/}
                <img             
                    className="rounded-full w-60 h-60 absolute top-[25px] right-[25px]"
                    src={githubaval?.img_url} />
                
                <img
                    data-aos="fade-up"       
                    data-aos-duration="1000"                             
                    src={grade_emoj} 
                    className='w-20 h-20 absolute top-[210px] right-[5px]'/>

            </div>

            <h2 
                
                className='text-white font-bold text-4xl mt-12'>
                {githubaval?.github_user}
            </h2>

            <CaretDoubleDown 
                data-aos="fade-down"    
                data-aos-duration="1000"             
                className='text-white mt-24 animate-bounce'
                size={96} />

        </section>

        <section        
            className='flex flex-col items-start gap-14 mt-14'>

            <AvaliationItem                 
                question="Foto de perfil mostra seu rosto?"
                passed={githubaval?.has_photo? true : false }/>
            
            <AvaliationItem 
                question="Tem um README só seu?"
                passed={githubaval?.has_linkedin? true : false }/>

            <AvaliationItem 
                question="Colocou seu email no README?"
                passed={githubaval?.has_email? true : false }/>

            <AvaliationItem 
                question="Colocou seu LinkedIn no GitHub?"
                passed={githubaval?.has_linkedin? true : false}/>
            
            <AvaliationItem 
                question="Tem mais de 4 tecnologias no seu README?"
                passed={githubaval?.has_five_or_more_stacks? true : false}/>

            <AvaliationItem 
                question="Tem mais de 9 tecnologias no seu README?"
                passed={githubaval?.has_ten_or_more_stacks? true : false}/>

            <AvaliationItem 
                question="Tem mais de 4 repositórios públicos no seu GitHub?"
                passed={githubaval?.has_five_or_more_repos? true : false}/>

            <AvaliationItem 
                question="Tem mais de 9 repositórios públicos no seu GitHub?"
                passed={githubaval?.has_ten_or_more_repos? true : false}/>

            <AvaliationItem 
                question="Tem mais de 1 repositório fixado no seu perfil?"
                passed={githubaval?.has_two_or_more_pinned? true : false}/>

            <AvaliationItem 
                question="Tem mais de 4 repositórios fixado no seu perfil?"
                passed={githubaval?.has_four_or_more_pinned? true : false}/>

        </section>
        
        <div className='flex flex-row items-center justify-center gap-8 mt-14'>
            <button
                data-aos="fade-up"  
                className='bg-white w-48 h-14 flex items-center justify-center gap-2 group
                rounded-2xl 
                hover:bg-[#1A9D7E] '>
                <ArrowDown size={22}  className="text-[#3FBB90] group-hover:text-white"/>
                <h2 className="text-[#3FBB90]
                 group-hover:text-white font-semibold text-base
                 pt-1">Baixar resultado</h2>            
            </button>
            
            <button
                data-aos="fade-up"  
                className='bg-transparent w-48 h-14 flex items-center justify-center gap-2 group
                rounded-2xl border-[3px] border-white
                hover:bg-[#1A9D7E]'
                onClick={() => navigate('/')}>
                <ArrowsClockwise size={22}  className="text-white"/>
                <h2 className="text-white font-semibold text-base pt-1
                 ">Fazer novo teste</h2>            
            </button>
        </div>

        <h2
            data-aos="fade-up"  
            className='font-bold text-white text-xl max-w-[250px] text-center mt-16'>
        Avaliação realizada em: 21 de Setembro de 2022
        </h2>
                
        {showButton && (            
        <button onClick={scrollToTop} className="back-to-top text-white my-8 animate-bounce">
          <CaretDoubleUp size={32} />
        </button>
      )}
        
        <div 
        
        className="text-white text-xl text-center 
        flex items-center justify-center
        h-24 w-full bg-[#1A9D7E]
        ">
            <h1>
            Developed by:  
            <a 
            className='hover:text-[#B7EECE]'
            target="_blank" href='https://github.com/irahel'><strong> irahel</strong></a>  and  

            <a 
            className='hover:text-[#B7EECE]'
            target="_blank" href='https://github.com/felipmartins'><strong> felipmartins</strong></a>                          
            </h1>
        </div>
                
    </div>
    )
}