import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');
  useEffect(() => {
    const getData = async () => {
      const f = await fetch('/api/data');
      const data = await f.json();
      setData(data);
    }
    getData();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Response from api x:
          <div><code>{JSON.stringify({ data }, true, 2)}</code></div>
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
