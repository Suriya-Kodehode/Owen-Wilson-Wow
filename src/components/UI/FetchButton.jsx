
import React from 'react';
import styles from '../../CSSModules/fetchButton.module.css';

const FetchButton = ({ onClick, label }) => {
  return (
    <button onClick={onClick} className={styles.fetchButton}>
      {label}
    </button>
  );
};

export default FetchButton;
