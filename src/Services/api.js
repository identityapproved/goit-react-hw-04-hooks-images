import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '22670209-9efd588e2ff75ea334072990b';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: '12',
};

export const fetchImages = async (query, page) => {
  try {
    const response = await axios.get('', {
      params: {
        page: page,
        q: query,
      },
    });
    return response.data.hits;
  } catch (error) {
    throw new Error(error);
  }
};

fetchImages.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
