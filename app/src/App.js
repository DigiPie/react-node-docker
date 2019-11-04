import React from 'react';
import { FaGithub, FaReact, FaNodeJs, FaDocker } from 'react-icons/fa';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <a href='https://github.com/DigiPie/react-node-docker' color='white' 
            className='App-link' title="View DigiPie/React-Node-Docker on Github">
          <h1><FaGithub /> DigiPie/<FaReact />-<FaNodeJs />-<FaDocker /></h1>
        </a>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <code>process.env.PUBLIC_URL=
          {process.env.PUBLIC_URL ? `${process.env.PUBLIC_URL}` : 'undefined'}
          </code>
          <br />
          Set <code>process.env.PUBLIC_URL</code> if you are deploying from a 
          sub-directory or a sub-domain.
          <br />
          You can do so by adding a <code>.env</code> file containing 
          <code> PUBLIC_URL</code> in the same folder as <code>package.json</code>.
        </p>
        <p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          <span> | </span>
          <a
            className='App-link'
            href='https://github.com/DigiPie/react-node-docker'
          >
            View source code
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
