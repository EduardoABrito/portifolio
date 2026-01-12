"use client";

import { useEffect, useState } from "react";
import { Progress } from "@heroui/react";

const softSkills = [
  { name: "Metodologias Ágeis (Scrum/Kanban)", level: 95 },
  { name: "Resolução de Problemas Complexos", level: 90 },
  { name: "Visão de Negócio e Processos", level: 85 },
  { name: "Inglês Técnico (Leitura/Docs)", level: 65 },
];

export function SoftSkills() {
  const [values, setValues] = useState(softSkills.map(() => 0));

  useEffect(() => {
    softSkills.forEach((skill, index) => {
      const timeout = setTimeout(() => {
        setValues((prev) => {
          const newValues = [...prev];
          newValues[index] = skill.level;
          return newValues;
        });
      }, index * 400);
      return () => clearTimeout(timeout);
    });
  }, []);

  return (
    <section className="space-y-6">
      <h3 className="text-xl font-bold capitalize">Soft Skills & Idiomas</h3>
      <ul className="space-y-5 bg-content2 p-6 rounded-2xl border border-default">
        {softSkills.map((skill, i) => (
          <li key={skill.name} className="space-y-3">
            <div className="flex justify-between items-end">
              <span className="font-semibold text-foreground-800">
                {skill.name}
              </span>
              <span className="text-sm font-semibold text-primary">
                {values[i]}%
              </span>
            </div>

            <Progress
              value={values[i]}
              color="primary"
              size="sm"
              radius="full"
              aria-label={`Nível de competência em ${skill.name}`}
              className="transition-all duration-1000 ease-out"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
