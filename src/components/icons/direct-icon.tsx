import React from "react";

import { Icon, IconProps } from "@iconify/react";

const DirectionRotateMap = {
  left: 180,
  right: 0,
  up: 270,
  down: 90,
} as const;

export type DirectionMap<T extends Record<string, number>> = keyof T & string;

export interface DirectionIconsProps<
  T extends Record<string, number> = typeof DirectionRotateMap
> extends IconProps {
  icon: string;
  direction?: DirectionMap<T>;
  rotateMap?: T;
  size?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export const DirectionIcon = <
  T extends Record<string, number> = typeof DirectionRotateMap
>({
  icon,
  direction,
  rotateMap,
  className,
  style,
  ...props
}: DirectionIconsProps<T>) => {
  const map = (rotateMap ?? (DirectionRotateMap as unknown)) as T;
  const defaultDirection = (Object.keys(map)[0] ?? "right") as DirectionMap<T>;
  const dir = (direction ?? defaultDirection) as keyof T;
  const rotation = map[dir] ?? 0;

  const mergedStyle: React.CSSProperties = {
    transform: `rotate(${rotation}deg)`,
    ...style,
  };

  return (
    <Icon icon={icon} className={className} style={mergedStyle} {...props} />
  );
};
