import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Trans } from "@lingui/macro";
import C4C from "./images/cfc.png";
import NEB from "./images/neb.jpg";
import {
  Button,
  Container,
  Row,
  Col,
  Image,
  ButtonToolbar
} from "react-bootstrap";

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
    const LOGO_SIZE = 500;

    return (
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">
              <Trans>Hello World!</Trans>
            </h1>
            <h2 className="text-center">
              <Trans>It is {this.state.date.toLocaleTimeString()} now.</Trans>
            </h2>
            <ButtonToolbar
              aria-label="Changing the website language"
              className="d-flex justify-content-center"
            >
              <Button className="m-1" onClick={() => switchLang("en")}>
                English
              </Button>
              <Button className="m-1" onClick={() => switchLang("fr")}>
                Français
              </Button>
            </ButtonToolbar>
            <Row>
              <Col className="d-flex justify-content-center flex-wrap">
                <a
                  href="https://codefor.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    fluid
                    className="border rounded m-1"
                    src={C4C}
                    alt="Code For Canada Logo"
                    width={LOGO_SIZE}
                  />
                </a>
                <a
                  href="http://neb-one.gc.ca/index-eng.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    fluid
                    className="border rounded m-1"
                    src={NEB}
                    width={LOGO_SIZE}
                    alt="National Energy Board of Canada Logo"
                  />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
