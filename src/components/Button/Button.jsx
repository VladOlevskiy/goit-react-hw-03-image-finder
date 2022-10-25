import React from 'react';
import { ButtonLoadMore } from './Button-styled';
import PropTypes from 'prop-types';

export const Button = ({ onClick, disable }) => {
  return (
    <ButtonLoadMore type="button" onClick={onClick} disabled={disable}>
      Load more
    </ButtonLoadMore>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disable: PropTypes.bool,
};
