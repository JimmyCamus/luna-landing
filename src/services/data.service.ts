import landingData from "../data/landing.json";
import type { LandingPageData } from "../libs/interfaces/landing.interface";

export const getLandingData = async (): Promise<LandingPageData> => {
  const data: LandingPageData = landingData;
  return data;
};
