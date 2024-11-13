import React, { useState, useRef } from 'react';
import axios from 'axios';
import SearchHeader from './components/SearchHeader';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import LoadMoreBtn from './components/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage';
import ImageModal from './components/ImageModal';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);


  const galleryRef = useRef(null);

  const UNSPLASH_API_KEY = 'OsORAcy42rHPijqVIrToN6YT6oVebzT7aTZFZmgDhLU';

  const fetchImages = async (searchQuery, currentPage = 1) => {
    if (!searchQuery) return;
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: searchQuery,
          client_id: UNSPLASH_API_KEY,
          page: currentPage,
          per_page: 12,
        },
      });

      if (currentPage === 1) {
        setImages(response.data.results);
      } else {
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      }
    } catch (error) {
      setError('Something went wrong! Please try again later.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (query) => {
    setQuery(query);
    setPage(1);
    fetchImages(query, 1);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(query, nextPage);

 
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchHeader onSubmit={handleSubmit} />
      {error && <ErrorMessage message={error} />}
      {isLoading && <Loader />}
      
      
      <div ref={galleryRef}>
        {!isLoading && images.length > 0 && <ImageGallery images={images} openModal={openModal} />}
      </div>

      {images.length > 0 && !isLoading && (
        <div>
          <LoadMoreBtn onClick={handleLoadMore} />
        </div>
      )}
      
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          isOpen={isModalOpen}
          onRequestClose={closeModal}
        />
      )}
    </div>
  );
};

export default App;
