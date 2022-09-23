import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from 'chart.js';
import '../styles/main.css';
import { ArrowDown, ArrowsClockwise, CaretDoubleDown, CaretDoubleUp } from 'phosphor-react';
import { AvaliationItem } from '../components/AvaliationItem';

ChartJS.register(ArcElement);

export function Profile() {
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
      
    const data = {
        labels: ["I"],
        datasets: [
          {
            data: [100-githubaval.grade, githubaval.grade],
            backgroundColor: ["white", "#0067F5"],
            hoverBackgroundColor: ["white", "#0F5FCC"],
            borderWidth: 0
          }
        ]
      };

    return (
    <div className='flex flex-col items-center mt-24 scrollbar-hide'>      

        <h1 className='text-white font-bold text-6xl'>
            Seu perfil é nota: {githubaval?.grade}
        </h1>

        <div className="w-72 h-72 mt-20 relative items-center justify-center">
            <Doughnut             
                options={{            
                    responsive: true,
                    maintainAspectRatio: true,            
                }}
                data={data}/>

            <img 
                className="rounded-full w-60 h-60 absolute top-[25px] right-[25px]"
                src={githubaval?.img_url} />
             
            <h1 className='text-7xl absolute top-[210px] right-[5px]'>
                {/*&#129321;*/}
            </h1>
        </div>

        <h2 className='text-white font-bold text-4xl mt-12'>
            {githubaval?.github_user}
        </h2>

        <CaretDoubleDown 
            className='text-white mt-24 animate-bounce'
            size={96} />

        <div
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

        </div>
        
        <div className='flex flex-row items-center justify-center gap-8 mt-14'>
            <button
                className='bg-white w-48 h-14 flex items-center justify-center gap-2 group
                rounded-2xl 
                hover:bg-[#1A9D7E] '>
                <ArrowDown size={22}  className="text-[#3FBB90] group-hover:text-white"/>
                <h2 className="text-[#3FBB90]
                 group-hover:text-white font-semibold text-base
                 pt-1">Baixar resultado</h2>            
            </button>
            
            <button
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
            className='font-bold text-white text-xl max-w-[250px] text-center mt-16'>
        Avaliação realizada em: 21 de Setembro de 2022
        </h2>
                
        {showButton && (            
        <button onClick={scrollToTop} className="back-to-top text-white my-8 animate-bounce">
          <CaretDoubleUp size={32} />
        </button>
      )}
        
        <div className="text-white text-xl text-center 
        flex items-center justify-center
        h-24 w-full bg-[#1A9D7E]">
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