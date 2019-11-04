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
          {process.env.PUBLIC_URL ? `Running at ${process.env.PUBLIC_URL}` 
              : 'process.env.PUBLIC_URL is undefined. Set it if you are'
                  + ' deploying from a sub-directory or sub-domain.'}
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
        </p>
      </header>
    </div>
  );
}

export default App;
