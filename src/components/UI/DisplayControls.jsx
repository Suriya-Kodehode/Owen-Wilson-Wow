import React from 'react';
import SearchBar from './SearchBar.jsx';
import SortControls from './sortControls.jsx';
import styles from "../../CSSModules/displayApi.module.css";

const DisplayControls = ({
  searchQuery,
  setSearchQuery,
  sortField,
  sortOrder,
  setSortField,
  setSortOrder,
  hideSort = false,
}) => {
  const titleStyle = { marginTop: 0, marginBottom: "0.8rem", fontSize: "2rem" };
  return (
    <div className={styles.utilContainer}>
      <h2 style={{ ...titleStyle }}>Owen Wilson says Wow</h2>
      <SearchBar query={searchQuery} onQueryChange={setSearchQuery} />
      {!hideSort && (
        <SortControls
          sortField={sortField}
          sortOrder={sortOrder}
          setSortField={setSortField}
          setSortOrder={setSortOrder}
        />
      )}
    </div>
  );
};

export default DisplayControls;
