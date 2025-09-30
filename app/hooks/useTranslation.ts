import { useRouter } from "next/router";
import en from "../locales/en.json";
import es from "../locales/es.json";

export default function useTranslation() {
  const { locale } = useRouter();
  const translations = locale === "es" ? es : en;
  return translations;
}
