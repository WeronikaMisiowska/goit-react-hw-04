import React from 'react';
import styles from './css/Loader.module.css';

const Loader = () => (
  <div className={styles.loader}>
    <div className={styles.spinner}></div>
  </div>
);

export default Loader;
