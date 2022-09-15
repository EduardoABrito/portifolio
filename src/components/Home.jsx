import React from "react";
import Perfil from "../assets/perfil.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Inicio"
      className="h-screen w-full bg-gradient-to-t from-indigo-900 via-black to-neutral-900">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Eduardo Brito
            FullStack
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Sou um desenvolverdor focado em back-end, com experiencia profissional M2C Multi. Sempre buscando novas maneiras de obter conhecimentos
          </p>

          <div>
            <Link
              to="Projetos"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-700 to-indigo-900 cursor-pointer"
            >
              Projetos
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Perfil}
            alt="perfil"
            className="rounded-2xl border-2 border-black mx-auto w-2/1 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
