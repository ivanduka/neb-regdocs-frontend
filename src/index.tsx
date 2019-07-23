import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { I18nProvider } from "@lingui/react";
import Cookies from "js-cookie";
import catalogFr from "./locales/fr/messages.js";
import catalogEn from "./locales/en/messages.js";

const catalogs = { fr: catalogFr, en: catalogEn };

const LOCALE_COOKIE = "__locale";

export type Language = "en" | "fr";

interface IProps {}

interface IState {
  locale: Language;
}

class TranslationWrapper extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      locale: "en"
    };
  }

  componentDidMount() {
    const cookieLocale = Cookies.get(LOCALE_COOKIE) || "en";
    let locale: Language = "en";
    if (cookieLocale === "fr") {
      locale = "fr";
    }

    this.setState({
      locale
    });
  }

  switchLang(locale: Language) {
    this.setState({
      locale
    });

    Cookies.set(LOCALE_COOKIE, locale);
  }

  render() {
    return (
      <I18nProvider language={this.state.locale} catalogs={catalogs}>
        <App
          switchLang={(locale: Language) => this.switchLang(locale)}
          currentLanguage={this.state.locale}
        />
      </I18nProvider>
    );
  }
}

ReactDOM.render(<TranslationWrapper />, document.getElementById("root"));
