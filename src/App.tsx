import React from 'react';
import './App.css';
import { Trans } from '@lingui/macro';
import C4C from './images/cfc.jpg';
import NEB from './images/neb.jpg';

interface IAppProps {
  switchLang(locale: string): void;
}

interface IAppState {
  date: Date;
}

class App extends React.Component<IAppProps, IAppState> {
  private timerID: number;

  constructor(props: IAppProps) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = window.setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    const { switchLang } = this.props;

    return (
      <div>
        <h1>
          <Trans>Hello World!</Trans>
        </h1>
        <h2>
          <Trans>It is {this.state.date.toLocaleTimeString()} now.</Trans>
        </h2>
        <button onClick={() => switchLang('en')}>English</button>
        <button onClick={() => switchLang('fr')}>Français</button>
        <div>
          <img
            src={C4C}
            className="img-fluid logos"
            alt="Code For Canada Logo"
          />
        </div>
        <div>
          <img
            src={NEB}
            className="img-fluid logos"
            alt="National Energy Board of Canada Logo"
          />
        </div>
      </div>
    );
  }
}

export default App;
