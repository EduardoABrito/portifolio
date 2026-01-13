"use client";

import { Card } from "@heroui/card";
import { Button } from "@heroui/button";
import Image from "next/image";
import { Icon } from "@iconify/react";

interface PortfolioCardProps {
  name: string;
  description: string;
  image: string;
  demo?: string;
}

export function PortfolioCard({
  name,
  description,
  image,
  demo,
}: PortfolioCardProps) {
  return (
    <Card
      className="relative rounded-2xl overflow-hidden border border-default group cursor-pointer transition-all duration-500 
    hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:border-primary"
      key={`portfolio-card-${name}`}
    >
      <div className="relative w-full h-60 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-black/60">
        <h4 className="text-white font-bold">{name}</h4>
      </div>

      <div className="absolute inset-0 bg-black/30 backdrop-blur-md flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-all duration-500">
        <p className="text-white/80 text-sm mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform delay-100 duration-500 px-4">
          {description}
        </p>

        {demo && (
          <Button
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            variant="flat"
            color="primary"
            isIconOnly
            radius="full"
            className="hover:scale-110 hover:shadow-[0_0_15px_cyan] transition-transform duration-300"
            size="lg"
          >
            <Icon icon="mdi:eye-outline" className="w-5 h-5 animate-pulse" />
          </Button>
        )}
      </div>
    </Card>
  );
}
