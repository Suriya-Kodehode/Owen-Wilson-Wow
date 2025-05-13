import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import FetchButton from './components/UI/FetchButton.jsx';
import './App.css';

function App() {
  const [endpoint, setEndpoint] = useState('movies');
  const [refreshKey, setRefreshKey] = useState(Date.now());
  const location = useLocation();

  const fetchRandom = () => {
    setEndpoint('random');
    setRefreshKey(Date.now());
  };

  const fetchMovies = () => {
    setEndpoint('movies');
    setRefreshKey(Date.now());
  };

  const isVideoPage = location.pathname === '/video';
  const commonBgStyle = isVideoPage ? { backgroundColor: "inherit" } : {};

  const headerContent = isVideoPage ? (
    <h2 style={{ margin: "1rem 0" }}>
      {location.state?.movie?.movie || "No movie selected"}
    </h2>
  ) : (
    <>
      <FetchButton onClick={fetchRandom} label="Fetch Random" />
      <FetchButton onClick={fetchMovies} label="Fetch All Movies" />
    </>
  );

  return (
    <div className="globalPage">
      <header style={commonBgStyle}>{headerContent}</header>
      <main>
        <Outlet context={{ endpoint, refreshKey }} />
      </main>
      <footer style={commonBgStyle}>
        <p></p>
      </footer>
    </div>
  );
}

export default App;
