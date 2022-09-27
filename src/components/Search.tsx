import { FormEvent} from "react";
import { Link, useNavigate } from "react-router-dom";
import { MagnifyingGlass } from "phosphor-react";
import axios from 'axios';

export interface responseProps{
  github_user: string,
  img_url: string,
  has_photo: boolean,
  has_email: boolean,
  has_linkedin: boolean,
  has_five_or_more_stacks: boolean,
  has_ten_or_more_stacks: boolean,
  has_five_or_more_repos: boolean,
  has_ten_or_more_repos: boolean,
  has_two_or_more_pinned: boolean,
  has_four_or_more_pinned: boolean,
  grade: number
}
export interface formProps{
  loadingIndicator: Function,
  redirectIndicator: Function  
}

export function Search({loadingIndicator, redirectIndicator}: formProps){

  const navigate = useNavigate();
        
  async function handleCalculateAval(event: FormEvent){
    event.preventDefault();
    loadingIndicator(true);
    
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);     
    
    const bodyFormData = new FormData();
    bodyFormData.append('github_user', data.github_user);
    bodyFormData.append('refresh', 'true');
    
    try {
      let response = await axios(
        {
          method: "post",
          url: "https://avaliadorgit.com/teste/",
          data: bodyFormData,
          headers: { "Content-Type": "multipart/form-data" }                      
        }
        );        
        redirectIndicator({
          ...response.data
        });  
        loadingIndicator(false);                         
    } 
    catch (err: any) 
    {       
      if(err.response.status == 412)
      {
        navigate('/notfound',{state:data.github_user});
      }
      else
      {
        navigate('/error');
      }                  
    }
     
  }

    return (      
        <form 
        data-aos="fade-right"
        data-aos-duration="1000"
        className='mt-32 ' onSubmit={handleCalculateAval} >
          <div className='relative items-center flex group'>
            <input 
            
              className="rounded-full w-[580px] h-20 bg-white
              text-2xl text-[#0B5A47]
              pl-9                 
              peer
              outline-none"
              required
              name="github_user"
              id="github_user" 
              type="text"                   
              />
              <label htmlFor="github_user" className="transform transition-transform
                absolute top-0 left-0 h-full flex 
                items-center 
                group-focus-within:text-2xl
                group-focus-within:text-white
                peer-valid:text-2xl 
                group-focus-within:h-1/2 
                peer-valid:h-1/2 
                group-focus-within:-translate-y-full 
                peer-valid:-translate-y-full 
                group-focus-within:pl-6 peer-valid:pl-6
                text-opacity-40 text-2xl text-black pl-9                        
              ">
                Digite o usuário do seu Github:
              </label>
            <button 
              data-aos="fade-left"              
              className='w-32 h-32 bg-[#30B084] 
              rounded-full absolute left-[463px] 
              border-white border-8
              flex
              justify-center
              items-center
              hover:bg-[#0B5A47]
              hover:border-[10px]'              
              >
                <Link to={`aval/irahel`}/>
              <MagnifyingGlass color='white' size={60} />
            </button>
          </div>

          <h2 
          data-aos="zoom-in"
          data-aos-duration="1000"
          className='text-white text-start font-medium italic text-xl mt-2 pl-8'>
            Ou que tal fazer <a className='text-[#0B5A47]'>múltiplas avaliações</a> via csv
          </h2>
      </form>      
    )
}