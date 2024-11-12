import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './css/ImageModal.module.css';

const ImageModal = ({ image, isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      ariaHideApp={false} 
    >
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onRequestClose}>Close</button>
         <div className={styles.modalContentImage}>
          <img className={styles.modalImage} src={image.urls.regular} alt={image.alt_description} />
          </div>
        <div className={styles.modalInfo}>
      <p>Author: {image.user.name}</p>
      <p>Likes: {image.likes}</p>
          <p>{image.description || 'No description available'}</p>
          </div>
        </div>
    </Modal>
  );
};

export default ImageModal;
