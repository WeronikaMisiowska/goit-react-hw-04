import React from 'react';
import styles from './css/ImageGallery.module.css'; 

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={styles.imageGallery}> 
      {images.map((image) => (
        <li key={image.id} className={styles.imageItem}> 
          <div className={styles.imageContainer} onClick={() => openModal(image)}> 
            <img className={styles.image} src={image.urls.small} alt={image.alt_description} /> 
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
