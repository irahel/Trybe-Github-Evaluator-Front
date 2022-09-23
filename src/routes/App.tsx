import '../styles/main.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Profile }  from './Profile';

function App() {
  
  return (
    <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="aval" element={<Profile />} />
        {/*<Route path="*" element={<NoMatch />} />*/}
      </Routes>
  )
}

export default App
