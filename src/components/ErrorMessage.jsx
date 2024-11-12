import React from 'react';
import styles from './css/ErrorMessage.module.css';

const ErrorMessage = ({ message }) => (
  <div className={styles.error}>
    {message}
  </div>
);

export default ErrorMessage;
