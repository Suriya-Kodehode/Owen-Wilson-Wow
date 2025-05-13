import React from 'react';
import { useOutletContext } from 'react-router-dom';
import styles from '../CSSModules/startPage.module.css';
import GetApi from '../components/util/getApi.jsx';

const StartPage = () => {
  const { endpoint, refreshKey } = useOutletContext();

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
