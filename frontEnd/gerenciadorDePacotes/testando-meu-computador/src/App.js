import logo from './logo.svg';
import './App.css';

function App() {

  const testJSX = <h1>Hello JSX</h1>;

  return (
    <div className="App">
      <header className="App-header">
      {testJSX}
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
    </div>
  );
}

export default App;
