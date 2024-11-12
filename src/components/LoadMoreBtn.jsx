import React from 'react';
import styles from './css/LoadMoreBtn.module.css';


const LoadMoreBtn = ({ onClick }) => (
  <div className={styles.buttonContainer}>
  <button className={styles.button} onClick={onClick}>
    Load more
    </button>
    </div>
);


export default LoadMoreBtn;
