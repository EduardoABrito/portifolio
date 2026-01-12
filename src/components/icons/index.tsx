import { Icon, IconProps } from "@iconify/react";

import { DirectionIcon, DirectionIconsProps } from "./direct-icon";

export const DarkIcon = () => <Icon icon={"line-md:moon-loop"} fontSize={25} />;

export const LightIcon = () => (
  <Icon icon={"line-md:sun-rising-loop"} fontSize={25} />
);

export const ChevronIcon = ({
  fontSize = 20,
  ...props
}: OmitTyped<DirectionIconsProps, "icon">) => (
  <DirectionIcon
    icon={`line-md:chevron-right`}
    fontSize={fontSize}
    {...props}
  />
);

export const MailIcon = ({
  fontSize = 20,
  ...props
}: OmitTyped<IconProps, "icon">) => (
  <Icon icon="ic:outline-mail-outline" fontSize={fontSize} {...props} />
);

export const PhoneIcon = ({
  fontSize = 20,
  ...props
}: OmitTyped<IconProps, "icon">) => (
  <Icon icon="ic:outline-phone-android" fontSize={fontSize} {...props} />
);

export const CalendarIcon = ({
  fontSize = 20,
  ...props
}: OmitTyped<IconProps, "icon">) => (
  <Icon icon="ic:outline-calendar-today" fontSize={fontSize} {...props} />
);

export const LocationIcon = ({
  fontSize = 20,
  ...props
}: OmitTyped<IconProps, "icon">) => (
  <Icon icon="ic:outline-location-on" fontSize={fontSize} {...props} />
);

export const GithubIcon = ({
  fontSize = 20,
  ...props
}: OmitTyped<IconProps, "icon">) => (
  <Icon icon="mdi:github" fontSize={fontSize} {...props} />
);

export const LinkedinIcon = ({
  fontSize = 20,
  ...props
}: OmitTyped<IconProps, "icon">) => (
  <Icon icon="mdi:linkedin" fontSize={fontSize} {...props} />
);

export const WhatsappIcon = ({
  fontSize = 20,
  ...props
}: OmitTyped<IconProps, "icon">) => (
  <Icon icon="mdi:whatsapp" fontSize={fontSize} {...props} />
);

export const DesingIcon = ({
  fontSize = 20,
  ...props
}: OmitTyped<IconProps, "icon">) => (
  <Icon icon="clarity:design-solid" fontSize={fontSize} {...props} />
);

export const BusinessIcon = ({
  fontSize = 20,
  ...props
}: OmitTyped<IconProps, "icon">) => (
  <Icon icon="mdi:briefcase-outline" fontSize={fontSize} {...props} />
);

export const LayoutIcon = ({
  fontSize = 20,
  ...props
}: OmitTyped<IconProps, "icon">) => (
  <Icon icon="mdi:view-grid-outline" fontSize={fontSize} {...props} />
);

export const ServerIcon = ({
  fontSize = 20,
  ...props
}: OmitTyped<IconProps, "icon">) => (
  <Icon icon="mdi:server-outline" fontSize={fontSize} {...props} />
);

export const DatabaseIcon = ({
  fontSize = 20,
  ...props
}: OmitTyped<IconProps, "icon">) => (
  <Icon icon="mdi:database-outline" fontSize={fontSize} {...props} />
);

export const CloudIcon = ({
  fontSize = 20,
  ...props
}: OmitTyped<IconProps, "icon">) => (
  <Icon icon="mdi:cloud-outline" fontSize={fontSize} {...props} />
);
