import { StyledLoadMoreBtn } from './button.styled';
import PropTypes from 'prop-types';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <StyledLoadMoreBtn type="button" onClick={onClick}>
      Load more
    </StyledLoadMoreBtn>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
