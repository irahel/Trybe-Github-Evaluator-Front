import '../styles/main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Profile }  from './Profile';
import ReactDOM from "react-dom/client";

export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="aval" element={<Profile />} />
          {/*<Route path="*" element={<NoMatch />} />*/}
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);