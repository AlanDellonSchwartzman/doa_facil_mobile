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

export default function Donate() {
  return (
    <ContainerStyled>
      <HeaderStyled>
        <LeftStyled>
          <ButtonStyled transparent>
            <IconStyled name='menu' />
          </ButtonStyled>
        </LeftStyled>
      </HeaderStyled>
    </ContainerStyled>
  );
}
