import { type Resource } from "i18next";
import { useMemo } from "react";
import { I18nextProvider } from "react-i18next";
import { createI18n } from "./i18n";

export type I18nProviderProps = {
  resource: Resource;
  children?: React.ReactNode;
};

export function I18nProvider(props: I18nProviderProps) {
  const { resource, children } = props;

  const i18n = useMemo(() => {
    return createI18n(resource);
  }, [resource]);

  return (
    <I18nextProvider i18n={i18n}>
      { children }
    </I18nextProvider>
  );
}
