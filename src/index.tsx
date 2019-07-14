import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { I18nProvider } from '@lingui/react';
import Cookies from 'js-cookie';
import catalogFr from './locales/fr/messages.js';
import catalogEn from './locales/en/messages.js';

const catalogs = { fr: catalogFr, en: catalogEn };

const LOCALE_COOKIE = '__locale';

interface IProps {}

interface IState {
  locale: string;
}

class TranslationWrapper extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      locale: '',
    };
  }

  componentDidMount() {
    this.setState({
      locale: Cookies.get(LOCALE_COOKIE) || 'en',
    });
  }

  switchLang(locale: string) {
    this.setState({
      locale,
    });

    Cookies.set(LOCALE_COOKIE, locale);
  }

  render() {
    return (
      <I18nProvider language={this.state.locale} catalogs={catalogs}>
        <App
          switchToFrench={() => this.switchLang('fr')}
          switchToEnglish={() => this.switchLang('en')}
        />
      </I18nProvider>
    );
  }
}

ReactDOM.render(<TranslationWrapper />, document.getElementById('root'));
