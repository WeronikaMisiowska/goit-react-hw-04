import React, { useState } from 'react';
import ImageModal from './ImageModal';
import styles from './css/ImageCard.module.css';

const ImageCard = ({ image }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <div className={styles.card} onClick={handleModalOpen}>
      <img src={image.urls.small} alt={image.alt_description} className={styles.cardImage} />
      {showModal && (
        <ImageModal image={image} onClose={handleModalClose} />
      )}
    </div>
  );
};

export default ImageCard;
