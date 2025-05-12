import React from 'react';
import styles from '../CSSModules/startPage.module.css';
import GetApi from '../components/util/getApi.jsx';

const StartPage = ({ endpoint, refreshKey }) => {
  return (
    <div className={styles.generalContainer}>
      <div className={styles.asideLeft}>
      </div>
      <div className={styles.container}>
        <GetApi endpoint={endpoint} refreshKey={refreshKey} />
      </div>
      <div className={styles.asideRight}>
      </div>
    </div>
  );
};

export default StartPage;
