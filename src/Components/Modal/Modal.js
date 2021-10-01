import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Overlay, StyledModal } from './Modal.styled';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.clickOnEsc);
  }

  componentWillUnmount() {
    window.addEventListener('keydown', this.clickOnEsc);
  }

  clickOnEsc = e => {
    e.code === 'Escape' && this.props.toggleModal();
  };

  clickOnOverlay = e => {
    e.target === e.currentTarget && this.props.toggleModal();
  };

  render() {
    return (
      <Overlay onClick={this.clickOnOverlay}>
        <StyledModal>
          <img src={this.props.url} alt="" />
        </StyledModal>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};
