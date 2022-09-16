import React from "react";
import Perfil from "../assets/perfil.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Home = () => {
  var typewriter = new Typewriter({
    loop: true,
    delay: 75,
  });
  return (
    <div
      name="Inicio"
      className="h-screen w-full bg-gradient-to-t from-indigo-900 via-black to-neutral-900">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white" id="titulo">
              
              <Typewriter
  
       onInit={(typewriter)=> {
        typewriter        
       .pauseFor(1000)
       .deleteAll()
       .typeString("Eduardo Brito FullStack")
       .start()
       
       }}
       />
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Sou um desenvolverdor focado em back-end, com experiencia profissional M2C Multi. Sempre buscando novas maneiras de obter conhecimentos
          </p>

          <div className="flex">
            <a
              href="https://github.com/EduardoABrito"
              target="_blank"
              rel="noreferrer"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-l from-cyan-700 to-gray-900 cursor-pointer mr-3"
            >
              GitHub
              <span>
                <FaGithub size={25} className="ml-1" />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/eduardo-a-brito"
              target="_blank"
              rel="noreferrer"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-l from-cyan-700 to-blue-900 cursor-pointer"
            >
              LinkedIn
              <span>
                <FaLinkedin size={25} className="ml-1" />
              </span>
            </a>
          </div>
        </div>

        <div>
          <img
            src={Perfil}
            alt="perfil"
            className="rounded-2xl border-2  mx-auto w-2/1 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
