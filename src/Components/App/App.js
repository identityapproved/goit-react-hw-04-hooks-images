import { fetchImages } from 'Services/api';
import { LoadMoreBtn } from 'Components/Button/button';
import { ImageGallery } from 'Components/ImageGalleryList/ImageGalleryList';
import OnLoading from 'Components/Loader/Loader';
import Modal from 'Components/Modal/Modal';
import SearchBar from 'Components/SearchBar/SearchBar';
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    largeImage: '',
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });
    return fetchImages(query, page)
      .then(data => {
        this.setState(({ images, page }) => ({
          images: [...images, ...data],
          page: page + 1,
          isLoading: false,
        }));
      })
      .finally(() => this.scrollTo());
  };

  onInputChange = query => {
    this.setState({ images: [], query: query, page: 1 });
  };

  onImageClick = largeImageUrl => {
    this.setState({ largeImage: largeImageUrl, showModal: true });
  };

  scrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  loadMore = () => {
    this.fetchImages(this.state.query);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.onInputChange}></SearchBar>

        <ImageGallery images={this.state.images} onImageClick={this.onImageClick} />

        {this.state.isLoading && <OnLoading />}

        {this.state.images.length > 0 && <LoadMoreBtn onClick={this.loadMore} />}

        {this.state.showModal && (
          <Modal toggleModal={this.toggleModal} url={this.state.largeImage} />
        )}
      </>
    );
  }
}
