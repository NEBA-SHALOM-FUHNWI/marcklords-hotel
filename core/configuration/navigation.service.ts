import { navigationConfig } from "@/config/navigation.config";
import { featureService } from "./feature.service";

export const navigationService = {
  getSidebarItems() {
    return navigationConfig.filter((item) => {
      if (!item.feature) return true;

      return featureService.isEnabled(item.feature);
    });
  },
};