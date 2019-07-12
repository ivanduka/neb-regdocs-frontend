import React from "react";
import "./App.css";

interface IAppProps {}

interface IAppState {
  date: Date;
}

class App extends React.Component<IAppProps, IAppState> {
  private timerID: number;

  constructor(props: {}) {
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
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default App;
