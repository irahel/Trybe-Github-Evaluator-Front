import { AvaliationItem } from "../components/AvaliationItem";
import { setDarkState } from "../utils/DarkMode";
import svg90 from "../../public/emojs/90.svg";
import svg60 from "../../public/emojs/60.svg";
import svg40 from "../../public/emojs/40.svg";
import svg20 from "../../public/emojs/20.svg";
import svg0 from "../../public/emojs/0.svg";
import * as HoverCard from "@radix-ui/react-hover-card";
import {
  ArrowDown,
  ArrowsClockwise,
  CaretDoubleDown,
  CaretDoubleUp,
  GithubLogo,
  Moon,
  Sun,
} from "phosphor-react";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/main.css";

ChartJS.register(ArcElement);

export function Profile() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const githubaval = location.state;

  const [darkMode, _setDarkMode] = useState(location.state.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("bg-trybelight");
      document.body.classList.add("bg-trybe");
    } else {
      document.body.classList.remove("bg-trybe");
      document.body.classList.add("bg-trybelight");
    }
    setDarkState(darkMode);
  }, [darkMode]);

  const [showButton, setShowButton] = useState(false);
  const [copied, setCopied] = useState(false);

  const apiMarkdown = `<img src='https://tgs.fly.dev/${githubaval?.github_user}'/>`;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowButton(window.pageYOffset > 300);
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const grade_color =
    githubaval.grade >= 90
      ? "#E76CF2"
      : githubaval.grade >= 60
      ? "#0376E2"
      : githubaval.grade >= 40
      ? "#FDCF36"
      : githubaval.grade >= 20
      ? "#E22859"
      : "#B4B9C0";

  const grade_color_hover =
    githubaval.grade >= 90
      ? "#b956c2"
      : githubaval.grade >= 60
      ? "#025eb5"
      : githubaval.grade >= 40
      ? "#caa62b"
      : githubaval.grade >= 20
      ? "#b52047"
      : "#90949a";

  const grade_emoj =
    githubaval.grade >= 90
      ? svg90
      : githubaval.grade >= 60
      ? svg60
      : githubaval.grade >= 40
      ? svg40
      : githubaval.grade >= 20
      ? svg20
      : svg0;

  const data = {
    labels: ["I"],
    datasets: [
      {
        data: [100 - githubaval.grade, githubaval.grade],
        backgroundColor: ["white", grade_color],
        hoverBackgroundColor: ["white", grade_color_hover],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center scrollbar-hide">
      {darkMode ? (
        <Moon
          className="self-end mr-12 mt-8
            text-[#1DB702]
            hover:text-[#A0F046]
            text-[50px]"
          onClick={() => _setDarkMode(false)}
        />
      ) : (
        <Sun
          className="self-end mr-12 mt-8
            text-[#A0F046]
            hover:text-[#034422]
            text-[50px]"
          onClick={() => _setDarkMode(true)}
        />
      )}
      <section className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-white font-bold text-6xl flex flex-row justify-center">
          Seu perfil é nota:
          <span data-aos="fade-down" data-aos-duration="1000">
            {" "}
            {Number(githubaval?.grade) / 10}
          </span>
        </h1>

        <div className="w-72 h-72 mt-20 relative items-center justify-center">
          <Doughnut
            options={{
              responsive: true,
              maintainAspectRatio: true,
            }}
            data={data}
          />

          {/*TODO: pre-load image in loading screen*/}
          <img
            className="rounded-full w-60 h-60 absolute top-[25px] right-[25px]"
            src={githubaval?.img_url}
          />

          <img
            data-aos="fade-up"
            data-aos-duration="1000"
            src={grade_emoj}
            className="w-20 h-20 absolute top-[210px] right-[5px]                    
                    "
          />
        </div>

        <h2 className="text-white font-bold text-4xl mt-12">
          {githubaval?.github_user}
        </h2>

        <CaretDoubleDown
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-white mt-24 animate-bounce"
          size={96}
        />
      </section>

      <section className="flex flex-col items-start gap-14 mt-14">
        <AvaliationItem
          question="Foto de perfil mostra seu rosto?"
          passed={githubaval?.has_photo ? true : false}
        />

        <AvaliationItem
          question="Tem um README só seu?"
          passed={githubaval?.has_readme ? true : false}
        />

        <AvaliationItem
          question="Colocou seu email no README?"
          passed={githubaval?.has_email ? true : false}
        />

        <AvaliationItem
          question="Colocou seu LinkedIn no GitHub?"
          passed={githubaval?.has_linkedin ? true : false}
        />

        <AvaliationItem
          question="Tem 5 ou mais tecnologias no seu README?"
          passed={githubaval?.has_five_or_more_stacks ? true : false}
        />

        <AvaliationItem
          question="Tem 10 ou mais tecnologias no seu README?"
          passed={githubaval?.has_ten_or_more_stacks ? true : false}
        />

        <AvaliationItem
          question="Tem 4 ou mais repositórios públicos no seu GitHub?"
          passed={githubaval?.has_five_or_more_repos ? true : false}
        />

        <AvaliationItem
          question="Tem 10 ou mais repositórios públicos no seu GitHub?"
          passed={githubaval?.has_ten_or_more_repos ? true : false}
        />

        <AvaliationItem
          question="Tem no mínimo 2 repositórios fixados no seu perfil?"
          passed={githubaval?.has_two_or_more_pinned ? true : false}
        />

        <AvaliationItem
          question="Tem 4 ou mais repositórios fixados no seu perfil?"
          passed={githubaval?.has_four_or_more_pinned ? true : false}
        />
      </section>

      <div className="flex flex-row items-center justify-center gap-8 mt-14">
        <button
          data-aos="fade-up"
          className={`bg-white w-48 h-14 flex items-center justify-center gap-2 group
                    rounded-2xl 
                    ${darkMode ? "hover:bg-[#1DB702]" : "hover:bg-[#034422]"}
                     `}
          onClick={() => navigate("/")}
        >
          <ArrowDown
            size={22}
            className={`
                    ${
                      darkMode ? "text-[#034422]" : "text-[#1DB702]"
                    } group-hover:text-white`}
          />
          <h2
            className={`
                    ${darkMode ? "text-[#034422]" : "text-[#1DB702]"}
                    group-hover:text-white font-semibold text-base
                    pt-1`}
          >
            Fazer novo teste
          </h2>
        </button>

        <div className="flex justify-center">
          <HoverCard.Root openDelay={300} closeDelay={100}>
            <HoverCard.Trigger>
              <CopyToClipboard
                text={apiMarkdown}
                onCopy={() => {
                  setCopied(true);
                  setTimeout(() => setCopied(false), 666);
                }}
              >
                <button
                  data-aos="fade-up"
                  className={`bg-transparent w-14 h-14 flex items-center justify-center group
                        rounded-full border-[3px] border-white                         
                        ${
                          darkMode ? "hover:bg-[#1DB702]" : "hover:bg-[#034422]"
                        }`}
                >
                  <GithubLogo color="white" size={32} />
                </button>
              </CopyToClipboard>
            </HoverCard.Trigger>
            <HoverCard.Portal>
              <HoverCard.Content
                align="center"
                side="right"
                className="bg-transparent rounded-2xl border-[2px]
                    border-dashed border-white w-32 h-14
                    flex items-center justify-center opacity-80
                    "
              >
                <HoverCard.Arrow
                  className="opacity-80"
                  width={9}
                  height={9}
                  fill="white"
                />
                <h3
                  className="text-white italic text-center opacity-80
                        text-sm"
                >
                  Adicione ao GitHub!
                </h3>
              </HoverCard.Content>
            </HoverCard.Portal>
          </HoverCard.Root>
          {copied && (
            <h3
              className="absolute pt-16 font-bold text-white text-base"
              data-aos="fade-down"
            >
              Copiado!
            </h3>
          )}
        </div>
      </div>
      <h2
        data-aos="fade-up"
        className="font-bold text-white text-xl max-w-[250px] text-center mt-16"
      >
        Avaliação realizada em: {githubaval?.evaluation_date}
      </h2>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="back-to-top text-white my-8 animate-bounce"
        >
          <CaretDoubleUp
            className={`
          ${darkMode ? "hover:text-[#A0F046]" : "hover:text-[#034422]"}
            `}
            size={32}
          />
        </button>
      )}

      <div
        className={`text-white text-xl text-center 
            flex items-center justify-center
            h-24 w-full 
            ${darkMode ? "bg-[#034422]" : "bg-[#1FC101]"}`}
      >
        <h1>
          Developed by:
          <a
            className="hover:text-[#B7EECE]"
            target="_blank"
            href="https://github.com/irahel"
          >
            <strong
              className={`
            ${
              darkMode
                ? "text-[#A0F046] hover:text-[#FCF1CF]"
                : "text-[#0376E2] hover:text-[#FCF1CF]"
            }
            `}
            >
              {" "}
              irahel
            </strong>
          </a>{" "}
          and
          <a
            className="hover:text-[#B7EECE]"
            target="_blank"
            href="https://github.com/felipmartins"
          >
            <strong
              className={`
            ${
              darkMode
                ? "text-[#A0F046] hover:text-[#FCF1CF]"
                : "text-[#0376E2] hover:text-[#FCF1CF]"
            }
            `}
            >
              {" "}
              felipmartins
            </strong>
          </a>
        </h1>
      </div>
    </div>
  );
}
