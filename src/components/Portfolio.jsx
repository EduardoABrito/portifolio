import React from "react";
import PortalFilmes from "../assets/projetos/portalFilmes.png";
import PainelWolffox from "../assets/projetos/painelWolffox.png";
import Wolffox from "../assets/projetos/wolffox.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: PortalFilmes,
      code:"https://github.com/EduardoABrito/Projeto_Site_filmes",
      live:"https://eduardoabrito.github.io/Projeto_Site_filmes/",        
    },
    {
      id: 2,
      src: PainelWolffox,
      live:"https://painel.wolffoxevents.com.br/login",  
      privado:true      
    },
    {
      id: 3,
      src: Wolffox,
      live:"https://wolffoxevents.com.br",  
      privado:true      
    },
  ];

  return (
    <div
      name="Projetos"
      className="bg-gradient-to-t from-indigo-900 via-black to-neutral-900 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projetos
          </p>
          <p className="py-6">Aqui esta alguns projetos que participei ou desenvolvi.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, code, live, privado }) => (
            <div key={id} className="shadow-md shadow-purple-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={live} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Live
                </a>
                <a href={code} target="_blank" rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  {privado ? "Privado":"Codigo"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
