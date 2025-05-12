import React, { useState } from 'react';
import StartPage from './pages/startPage';
import FetchButton from './components/UI/FetchButton.jsx';
import './App.css';

function App() {
  const [endpoint, setEndpoint] = useState('movies');
  const [refreshKey, setRefreshKey] = useState(Date.now());

  const fetchRandom = () => {
    setEndpoint('random');
    setRefreshKey(Date.now());
  };

  const fetchMovies = () => {
    setEndpoint('movies');
    setRefreshKey(Date.now());
  };

  return (
    <div className="globalPage">
      <header>
        <FetchButton onClick={fetchRandom} label="Fetch Random" />
        <FetchButton onClick={fetchMovies} label="Fetch Movies" />
      </header>
      <main>
        <StartPage endpoint={endpoint} refreshKey={refreshKey} />
      </main>
      <footer>
        <p></p>
      </footer>
    </div>
  );
}

export default App;
