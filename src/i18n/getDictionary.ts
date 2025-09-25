import { en } from "./dictionaries/en";
import { uk } from "./dictionaries/uk";
export type Locale = "uk" | "en";
export function getDictionary(locale: Locale) {
  return locale === "en" ? en : uk;
}
export const locales: Locale[] = ["uk", "en"];
