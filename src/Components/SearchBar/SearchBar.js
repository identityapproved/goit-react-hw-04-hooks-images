import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  SearchBarButton,
  SearchBarForm,
  SearchBarHeader,
  SearchBarButtonLabel,
  SearchFormInput,
} from './SearchBar.styled';

export default class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  onInputChange = e => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  onInputSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <SearchBarHeader>
        <SearchBarForm onSubmit={this.onInputSubmit}>
          <SearchBarButton type="submit">
            <SearchBarButtonLabel>Search</SearchBarButtonLabel>
          </SearchBarButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.onInputChange}
          />
        </SearchBarForm>
      </SearchBarHeader>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
