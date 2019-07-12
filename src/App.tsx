import React from "react";
import "./App.css";
import { Trans } from "@lingui/macro";

interface IAppProps {
  switchToFrench(): void;
  switchToEnglish(): void;
}

interface IAppState {
  date: Date;
}

class App extends React.Component<IAppProps, IAppState> {
  private timerID: number;

  constructor(props: IAppProps) {
    super(props);
    this.state = {
      date: new Date()
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
      date: new Date()
    });
  }

  render() {
    const { switchToEnglish, switchToFrench } = this.props;

    return (
      <div>
        <h1>
          <Trans>Hello World!</Trans>
        </h1>
        <h2>It is {this.state.date.toLocaleTimeString()} now.</h2>
        <button onClick={switchToEnglish}>English</button>
        <button onClick={switchToFrench}>Français</button>
      </div>
    );
  }
}

export default App;
