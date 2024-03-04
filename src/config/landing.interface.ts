export interface LandingPageData {
  title: string;
  headerData: HeaderData;
  heroData: HeroData;
  servicesData: ServicesData;
  adventajesData: AdventajesData;
  brandsData: BrandsData;
  footerData: FooterData;
}

export interface HeaderData {
  logo: string;
  links: Link[];
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

export interface FooterData {
  logo: string;
  description: string;
  links: Link[];
  socials: Social[];
}

export interface Link {
  label: string;
  href: string;
}

export interface Social {
  icon: string;
  href: string;
}

export interface BrandsData {
  title: string;
  description: string;
  brands: Brand[];
}

export interface Brand {
  label: string;
  icon: string;
  href: string;
}

export type Icon =
  | "DevIcon"
  | "FileIcon"
  | "PlanetIcon"
  | "ConfigIcon"
  | "CheckIcon"
  | "InstagramIcon"
  | "GithubIcon"
  | "TwitterIcon"
  | "FacebookIcon"
  | "ReactIcon"
  | "SvelteIcon"
  | "SolidIcon"
  | "VueIcon"
  | "VercelIcon"
  | "NetlifyIcon";
