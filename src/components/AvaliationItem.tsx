import { Check, X } from "phosphor-react";

interface AvaliationItemProps{
    question: string,
    passed: boolean 
}

export function AvaliationItem({question, passed}: AvaliationItemProps) {
    return (
        <div           
            data-aos="fade-up"               
            data-aos-delay="50"
            data-aos-duration="1000"                        
            data-aos-once="false"            
            className='flex items-center gap-3'>                        
            {
            passed? 
                <div className="bg-[#B7EECE] rounded-full w-12 h-12 flex items-center justify-center
                ">
                <Check
                className=' text-[#219653]'
                size={40} />
                </div>
            :
                <div className="bg-[#EEB7B7] rounded-full w-12 h-12 flex items-center justify-center
               ">
                    <X
                    
                    className=' text-[#EB5757]'
                    size={35} />
                </div>
            }
                        
            <h2
                className='text-white font-medium text-2xl max-w-xl pt-1'>
                {question}
            </h2>
        </div>
    )
}