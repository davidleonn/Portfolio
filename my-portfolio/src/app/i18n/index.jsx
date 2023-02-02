import en_Es from "./constants/en-Es.json";
import es_Es from "./constants/es-Es.json";

const LANGUAGE_DEFAULT = es_Es;
const LOCALE = navigator.language;
let language = LOCALE === "en-Es" ? en_Es : LANGUAGE_DEFAULT;

export { LOCALE, language };
