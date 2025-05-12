
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
}) => {
  return (
    <div className={styles.utilContainer}>
      <SearchBar query={searchQuery} onQueryChange={setSearchQuery} />
      <SortControls
        sortField={sortField}
        sortOrder={sortOrder}
        setSortField={setSortField}
        setSortOrder={setSortOrder}
      />
    </div>
  );
};

export default DisplayControls;
