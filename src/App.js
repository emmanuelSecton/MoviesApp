import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          </header>
          <body className="App-body">
              <form>
                  <label>
                      Title:
                   <input type="text" name="title" />
                  </label>
                  <label>
                      Year:
                   <select type="text" name="year" />
                  </label>
                  <input type="submit" value="Submit" />
              </form>
          </body>
    </div>
  );
}

export default App;
