import { I18n } from "i18n-js";
import en from "./locales/en";
import RNLocalize from "react-native-localize";

const i18n = new I18n({
    en,
});

i18n.enableFallback = true;
i18n.defaultLocale = "en";
i18n.locale = RNLocalize.getLocales()[0].languageCode;

i18n.missingBehavior = "guess";

export default i18n;
export const t = i18n.t;