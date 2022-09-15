import React from "react";

import html from "../assets/tecnologias/html.png";
import css from "../assets/tecnologias/css.png";
import javascript from "../assets/tecnologias/javascript.png";
import typescript from "../assets/tecnologias/typescript.png";
import jquery from "../assets/tecnologias/jquery.png";
import reactImage from "../assets/tecnologias/react.png";
import github from "../assets/tecnologias/github.png";
import node from "../assets/tecnologias/node.png";
import csharp from "../assets/tecnologias/csharp.png";
import aspnet from "../assets/tecnologias/aspnet.png";
import mysql from "../assets/tecnologias/mysql.png";
import java from "../assets/tecnologias/java.png";
import php from "../assets/tecnologias/php.png";
import bootstrap from "../assets/tecnologias/bootstrap.png";


const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: typescript,
      title: "TypeScript",
      style: "shadow-blue-700",
    },
    {
      id: 3,
      src: jquery,
      title: "Jquery",
      style: "shadow-blue-300",
    },
    {
      id: 4,
      src: node,
      title: "Node",
      style: "shadow-green-600",
    },
    {
      id: 4,
      src: csharp,
      title: "C#",
      style: "shadow-purple-400",
    },
    {
      id: 4,
      src: java,
      title: "Java",
      style: "shadow-orange-400",
    },
    {
      id: 4,
      src: php,
      title: "php",
      style: "shadow-indigo-400",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: aspnet,
      title: "Asp Net",
      style: "shadow-blue-600",
    },
    {
      id: 8,
      src: mysql,
      title: "Mysql",
      style: "shadow-indigo-500",
    },
  ];

  return (
    <div
      name="Experiencia"
      className="bg-gradient-to-t from-indigo-900 via-black to-neutral-900 w-full "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experiência
          </p>
          <p className="py-6">Experiência com as seguintes tecnologias.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
