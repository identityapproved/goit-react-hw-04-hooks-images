import PropTypes from 'prop-types';
import { ImageGalleryItems } from 'Components/ImageGalleryItems/ImageGalleryItems';
import { ImageGalleryList } from './ImageGalleryList.styled';

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ImageGalleryList>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItems
          key={id}
          webFormatUrl={webformatURL}
          largeImageUrl={largeImageURL}
          tags={tags}
          onImageClick={onImageClick}
        />
      ))}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
