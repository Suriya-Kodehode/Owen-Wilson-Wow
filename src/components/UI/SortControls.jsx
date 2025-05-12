
import React from 'react';
import styles from "../../CSSModules/displayApi.module.css"; 

const SortControls = ({ sortField, sortOrder, setSortField, setSortOrder }) => {
  return (
    <div className={styles.sortContainer}>
      <label>
        Sort by:&nbsp;
        <select value={sortField} onChange={(e) => setSortField(e.target.value)}>
          <option value="movie">Movie Name</option>
          <option value="year">Year</option>
          <option value="director">Director</option>
        </select>
      </label>
      <label>
        Order:&nbsp;
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
    </div>
  );
};

export default SortControls;
