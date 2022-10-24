import React from 'react';
import { ButtonLoadMore } from './Button-styled';

export const Button = ({ onClick, disable }) => {
  return (
    <ButtonLoadMore type="button" onClick={onClick} disabled={disable}>
      Load more
    </ButtonLoadMore>
  );
};
