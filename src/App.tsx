import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Trans } from "@lingui/macro";
import C4C from "./images/cfc.jpg";
import NEB from "./images/neb.jpg";
import { Button, Container, Row, Col, Image } from "react-bootstrap";

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
    const { switchLang } = this.props;

    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h1>
                <Trans>Hello World!</Trans>
              </h1>
              <h2>
                <Trans>It is {this.state.date.toLocaleTimeString()} now.</Trans>
              </h2>
              <Button onClick={() => switchLang("en")}>English</Button>
              <Button onClick={() => switchLang("fr")}>Français</Button>
              <Row>
                <Col>
                  <Image fluid src={C4C} alt="Code For Canada Logo" />
                </Col>
                <Col>
                  <Image src={NEB} alt="National Energy Board of Canada Logo" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        {/* <h1>
          <Trans>Hello World!</Trans>
        </h1>
        <h2>
          <Trans>It is {this.state.date.toLocaleTimeString()} now.</Trans>
        </h2>
        <Button onClick={() => switchLang('en')}>English</Button>
        <Button onClick={() => switchLang('fr')}>Français</Button>
        <div>
          <img />
        </div>
        <div>
          <img
            src={NEB}
            className="img-fluid logos"
            alt="National Energy Board of Canada Logo"
          />
        </div> */}
      </div>
    );
  }
}

export default App;
