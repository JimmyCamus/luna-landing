export interface LandingPageData {
  title: string;
  heroData: HeroData;
  servicesData: ServicesData;
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
  icon: Icon;
  description: string;
}

export type Icon = "DevIcon" | "FileIcon" | "PlanetIcon" | "ConfigIcon";
