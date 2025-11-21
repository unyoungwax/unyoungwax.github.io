import { createInstance } from "i18next";
import { createContext } from "react";

export const I18nContext = createContext({
  i18n: createInstance(),
});
