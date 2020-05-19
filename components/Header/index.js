import React from 'react';

import {
  HomeStyles,
  ItemStyled,
  ButtonStyled,
  IconStyled,
  CardStyled,
  CardItemStyled,
  LeftStyled,
  RightStyled,
  ContainerStyled,
  HeaderStyled,
} from './styles';

export default function Header() {
  return (
    <ContainerStyled>
          <ButtonStyled transparent>
            <IconStyled name='menu' />
          </ButtonStyled>
    </ContainerStyled>
  );
}
