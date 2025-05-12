
import React from 'react';
import styles from "../../CSSModules/searchBar.module.css";

const SearchBar = ({ query, onQueryChange }) => {
  return (
    <div className={styles.searchContainer}>
      <input 
        type="text"
        placeholder="Search by movie, director or quote..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        className={styles.searchInput}
      />
    </div>
  );
};

export default SearchBar;
