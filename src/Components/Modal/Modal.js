import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Overlay, StyledModal } from './Modal.styled';

export default function Modal({ toggleModal, url }) {
  useEffect(() => {
    window.addEventListener('keydown', clickOnEsc);
    return () => {
      window.addEventListener('keydown', clickOnEsc);
    };
  });

  const clickOnEsc = e => {
    e.code === 'Escape' && toggleModal();
  };

  const clickOnOverlay = e => {
    e.target === e.currentTarget && toggleModal();
  };

  return (
    <Overlay onClick={clickOnOverlay}>
      <StyledModal>
        <img src={url} alt="" />
      </StyledModal>
    </Overlay>
  );
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};
