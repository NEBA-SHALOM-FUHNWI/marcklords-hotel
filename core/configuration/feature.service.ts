import { hotelFeatures } from "@/config/features.config";

export const featureService = {
  isEnabled(feature: keyof typeof hotelFeatures): boolean {
    return hotelFeatures[feature];
  },

  getAllFeatures() {
    return hotelFeatures;
  },
};