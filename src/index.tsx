import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { I18nProvider } from "@lingui/react";
import Cookies from "js-cookie";
import catalogFr from "./locales/fr/messages.js";

const catalogs = { fr: catalogFr };
const LOCALE_COOKIE = "__locale";
const getLocaleFromCookies = () => Cookies.get(LOCALE_COOKIE) || "en";
const saveLocaleToCookies = (locale: string) =>
  Cookies.set(LOCALE_COOKIE, locale);

interface IProps {}

interface IState {
  locale: string;
}

class TranslationWrapper extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      locale: getLocaleFromCookies()
    };
  }

  switchLang(locale: string) {
    this.setState({
      locale
    });

    saveLocaleToCookies(locale);
  }

  render() {
    return (
      <I18nProvider language={this.state.locale} catalogs={catalogs}>
        <App
          switchToFrench={() => this.switchLang("fr")}
          switchToEnglish={() => this.switchLang("en")}
        />
      </I18nProvider>
    );
  }
}

ReactDOM.render(<TranslationWrapper />, document.getElementById("root"));
