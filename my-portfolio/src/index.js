import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { IntlProvider } from "react-intl";

import Spanish from "./app/i18n/constants/es-Es.json";
import English from "./app/i18n/constants/en-Es.json";

const locale = navigator.language;
let lang;
if (locale === "es") {
  lang = Spanish;
} else {
  locale === "en";
  lang = English;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={Spanish}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);
