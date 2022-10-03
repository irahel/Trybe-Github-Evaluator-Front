import { loadDarkState, setDarkState } from "../utils/DarkMode";
import { Coffee } from "phosphor-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/main.css";

export function Tea() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    setDarkState(loadDarkState());
  }, []);

  return (
    <div
      data-aos-duration="1000"
      className="flex flex-col justify-center items-center h-screen"
    >
      <Coffee
        data-aos="fade-right"
        data-aos-duration="1500"
        size={160}
        color="white"
      />
      <h1
        data-aos="fade-left"
        data-aos-duration="1500"
        className="text-medium text-7xl text-white"
      >
        Sim, eu gosto de chá e você?
      </h1>
    </div>
  );
}
