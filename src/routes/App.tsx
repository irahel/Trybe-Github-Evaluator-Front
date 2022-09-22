import '../styles/main.css';
import { GithubLogo, MagnifyingGlass } from 'phosphor-react';
import { Search } from '../components/Search';
import {Loading } from '../components/Loading';
import { useState } from 'react';

function App() {
  
  const [loading, setLoading] = useState(false);

  return (
    <div className='max-w-[1366px] max-h-[768px] mx-auto flex flex-col items-center my-[150px]'>      
      <GithubLogo 
        className=''
        color='white'
        size={100} />

      <h1 className='text-white font-black text-6xl mt-8'>
        trybe-github-evaluator
      </h1>
    
      <h2 className='text-white font-medium italic text-3xl mt-8'>
        Descubra a nota do seu perfil:
      </h2>

      {loading? <Loading /> : <Search />}      

    </div>
  )
}

export default App
