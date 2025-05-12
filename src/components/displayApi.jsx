import React, { useState, useEffect } from 'react';
import { filterApiData } from '../components/util/searchUtil.jsx';
import { sortData } from '../components/util/sortUtil.jsx';
import DisplayControls from './UI/DisplayControls.jsx';
import MovieCard from './UI/MovieCard.jsx';
import styles from "../CSSModules/displayApi.module.css";

import { useClickOutsideSelector } from './hooks/useGeneral.jsx';
import { useMoviesDetails } from './hooks/useMoviesDetails.jsx';

const DisplayApi = ({ endpoint, data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  
  const [sortField, setSortField] = useState("movie");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    if (sortField === "year" && sortOrder !== "desc") {
      setSortOrder("desc");
    }
  }, [sortField, sortOrder]);

  useClickOutsideSelector(`.${styles.apiCard}`, () => setSelectedCardIndex(null));

  if (!data) return <p>No data available.</p>;

  const filteredData = Array.isArray(data)
    ? filterApiData(data, searchQuery)
    : data;

  const moviesDetails = useMoviesDetails(endpoint, data);
  let displayData = filteredData;
  if (endpoint === "movies") {
    if (moviesDetails.length === 0) {
      return (
        <div className={styles.apiContainer}>
          <div className={styles.utilContainer}>
            <h2>Endpoint: {endpoint}</h2>
            <DisplayControls
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              sortField={sortField}
              sortOrder={sortOrder}
              setSortField={setSortField}
              setSortOrder={setSortOrder}
            />
          </div>
          <p>Loading movie details...</p>
        </div>
      );
    }
    displayData = filterApiData(moviesDetails, searchQuery);
  }

  if (Array.isArray(displayData)) {
    displayData = sortData(displayData, sortField, sortOrder);
  }

  return (
    <div className={styles.apiContainer}>
      <DisplayControls
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortField={sortField}
        sortOrder={sortOrder}
        setSortField={setSortField}
        setSortOrder={setSortOrder}
      />
      <div className={styles.cardsContainer}>
        {Array.isArray(displayData) ? (
          displayData.length > 0 ? (
            displayData.map((item, index) => (
              <MovieCard
                key={index}
                item={item}
                index={index}
                isSelected={selectedCardIndex === index}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCardIndex(selectedCardIndex === index ? null : index);
                }}
              />
            ))
          ) : (
            <p>No matching results found.</p>
          )
        ) : (
          <MovieCard
            item={displayData}
            index={0}
            isSelected={selectedCardIndex === 0}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedCardIndex(selectedCardIndex === 0 ? null : 0);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default DisplayApi;
