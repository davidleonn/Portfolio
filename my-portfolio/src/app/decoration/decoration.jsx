import { IntlProvider } from "react-intl";

import { language, LOCALE } from "../i18n/index";

const Decoration = (children) => {
  return (
    <IntlProvider locale={LOCALE} messages={language}>
      {children}
    </IntlProvider>
  );
};

export default Decoration;
