export interface LandingPageData {
  title: string;
  heroData: HeroData;
  servicesData: ServicesData;
  adventajesData: AdventajesData;
}

export interface HeroData {
  title: string;
  subTitle: string;
  primaryCta: string;
  secondaryCta: string;
  highlightedTitle: string;
}

export interface ServicesData {
  title: string;
  services: Service[];
}

export interface Service {
  title: string;
  icon: string;
  description: string;
}

export interface AdventajesData {
  title: string;
  adventajes: Adventaje[];
}

export interface Adventaje {
  title: string;
  description: string;
  img: string;
  imageAlt: string;
  checks: string[];
}

export type Icon =
  | "DevIcon"
  | "FileIcon"
  | "PlanetIcon"
  | "ConfigIcon"
  | "CheckIcon";
