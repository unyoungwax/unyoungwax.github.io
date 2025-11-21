import { createInstance, type i18n, type Resource } from "i18next";

export function createI18n(resources: Resource): i18n {
  return createInstance({
    fallbackLng: "en",
    resources: {
      ...resources,
    },
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
  });
}
