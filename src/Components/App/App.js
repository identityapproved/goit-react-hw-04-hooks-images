import { fetchImages } from 'Services/api';
import { LoadMoreBtn } from 'Components/Button/button';
import { ImageGallery } from 'Components/ImageGalleryList/ImageGalleryList';
import OnLoading from 'Components/Loader/Loader';
import Modal from 'Components/Modal/Modal';
import SearchBar from 'Components/SearchBar/SearchBar';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [largeImage, setLargeImage] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }

    if (page === 1) {
      setImages([]);
    }

    setIsLoading(true);

    fetchImages(query, page)
      .then(data => {
        setImages(prev => [...prev, ...data]);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .finally(setIsLoading(false));
  }, [page, query]);

  const onInputChange = query => {
    setQuery(query.toLowerCase());
    setPage(1);
    // this.setState({ images: [], query: query, page: 1 });
  };

  const onImageClick = largeImageUrl => {
    setLargeImage(largeImageUrl);
    setShowModal(prev => !prev);
  };

  return (
    <>
      <SearchBar onSubmit={onInputChange}></SearchBar>

      <ImageGallery images={images} onImageClick={onImageClick} />

      {isLoading && <OnLoading />}

      {images.length > 0 && (
        <LoadMoreBtn
          onClick={() => {
            setPage(prev => prev + 1);
          }}
        />
      )}

      {showModal && (
        <Modal
          toggleModal={() => {
            setShowModal(prev => !prev);
          }}
          url={largeImage}
        />
      )}
    </>
  );
}
