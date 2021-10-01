import PropTypes from 'prop-types';
import { GalleryImage, ImageGalleryItem } from './ImageGalleryItems.styled';

export const ImageGalleryItems = ({ webFormatUrl, largeImageUrl, tags, onImageClick }) => {
  return (
    <ImageGalleryItem>
      <GalleryImage src={webFormatUrl} alt={tags} onClick={() => onImageClick(largeImageUrl)} />
    </ImageGalleryItem>
  );
};

ImageGalleryItems.propTypes = {
  webFormatUrl: PropTypes.string.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
