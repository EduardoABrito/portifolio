import packageJson from "../../package.json";

const personalEnvironment = {
  NAME: "Eduardo Brito",
  ROLE: "Full stack developer",
  EMAIL: "tzeduardo71@gmail.com",
  PHONE: "5531995567831",
  BIRTHDAY: "2003-06-11",
  LOCATION: "Belo Horizonte, MG - Brazil",
  EXPERIENCE_START_DATE: "2022-03-02",
};

const APIS = {
  GITHUB_API: "https://api.github.com",
  LASTFM_API: "https://ws.audioscrobbler.com",
  LASTFM_API_KEY: process.env.NEXT_PUBLIC_LASTFM_API_KEY || "",
};

const SOCIAL = {
  GITHUB_USERNAME: "eduardoabrito",
  LASTFM_USERNAME: "eduardoabrito",
  LINKEDIN_USERNAME: "eduardo-a-brito",
};

export const environment = {
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_API_BASE_URL:
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api",
  VERSION: packageJson.version,
  NEXT_PUBLIC_BASE_URL:
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
  PERSONAL_ENVIRONMENT: personalEnvironment,
  APIS,
  SOCIAL,
};
