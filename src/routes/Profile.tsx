import '../styles/main.css';
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from 'chart.js';

ChartJS.register(ArcElement);



export function Profile() {

    const data = {
        labels: ["I"],
        datasets: [
          {
            data: [20, 80],
            backgroundColor: ["white", "#0067F5"],
            hoverBackgroundColor: ["white", "#0F5FCC"],
            borderWidth: 0
          }
        ]
      };

    return (
    <div className='max-w-[1366px] max-h-[768px] mx-auto flex flex-col items-center my-24'>      

        <h1 className='text-white font-bold text-6xl'>
            Seu perfil é nota: 8
        </h1>
        {/*
        <div className='bg-white w-72 h-72 mt-12 rounded-full  
        border-[25px] border-[#0067F5] border-t-white border-l-yellow-400'/>
    */}
        <div className="w-72 h-72 mt-12">
            <Doughnut 
            
            options={{            
                responsive: true,
                maintainAspectRatio: true,            
            }}
            data={data}/>;
        </div>
        

 

    </div>
    )
}