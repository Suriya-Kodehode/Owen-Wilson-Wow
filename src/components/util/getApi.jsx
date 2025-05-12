
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayApi from '../displayApi.jsx';

const GetApi = ({ endpoint = 'random', refreshKey }) => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const getUrlByEndpoint = (ep) => {
    const baseUrl = 'https://owen-wilson-wow-api.onrender.com/wows/';
    
    if (ep === 'all') return baseUrl + 'ordered/0';
    
    if (ep.startsWith('http')) return ep;

    let url = baseUrl + ep;
    
    if (ep.includes('director=')) {
      url = url.replace(/(director=)([^&]+)/, (match, p1, p2) => {
        return p1 + encodeURIComponent(decodeURIComponent(p2));
      });
    }
    return url;
  };

  useEffect(() => {
    setLoading(true);
    const url = getUrlByEndpoint(endpoint);
    axios
      .get(url)
      .then((response) => {
        setApiData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setError('Error fetching data');
        setLoading(false);
      });
  }, [endpoint, refreshKey]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return <DisplayApi endpoint={endpoint} data={apiData} />;
};

export default GetApi;
