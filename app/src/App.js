import React from "react";
import { FaGithub, FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { Button, ButtonGroup } from "react-bootstrap";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          href="https://github.com/DigiPie/react-node-docker"
          color="white"
          className="App-link"
          title="View DigiPie/React-Node-Docker on Github"
        >
          <h1>
            <FaGithub />-<FaReact />-<FaNodeJs />-<FaDocker />
          </h1>
        </a>
        <h2>A React-Node-Docker boilerplate</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-text">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            <code>
              process.env.PUBLIC_URL=
              {process.env.PUBLIC_URL
                ? `${process.env.PUBLIC_URL}`
                : "undefined"}
            </code>
            <br />
            Set <code>process.env.PUBLIC_URL</code> if you are deploying from a
            sub-directory or a sub-domain.
            <br />
            You can do so by adding a <code>.env</code> file containing
            <code> PUBLIC_URL</code> in the same folder as{" "}
            <code>package.json</code>.
          </p>
          <p>
            <ButtonGroup>
              <Button
                variant="light"
                href="https://github.com/DigiPie/react-node-docker"
              >
                Source Code
              </Button>
              <Button variant="dark" href="https://reactjs.org">
                Learn React
              </Button>
            </ButtonGroup>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
