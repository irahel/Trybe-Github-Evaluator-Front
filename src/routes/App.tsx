import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Tea } from "./Tea";
import { Profile } from "./Profile";
import { Error } from "./Error";
import { NotFound } from "./NotFound";
import "../styles/main.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="aval" element={<Profile />} />
        <Route path="tea" element={<Tea />} />
        <Route path="418" element={<Tea />} />
        <Route path="notfound" element={<NotFound />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
