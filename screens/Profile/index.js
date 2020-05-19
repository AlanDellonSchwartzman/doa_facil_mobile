import React from 'react';

import {
  RegisterStyles,
  ItemStyled,
  InputStyled,
  IconStyled,
  ButtonStyled,
  TextStyled,
  ContainerStyled,
  ProfileStyles,
} from './styles';

import Data from './components/Data';
import Address from './components/Address';

export default function Profile() {
  return (
    <ContainerStyled>
      <ProfileStyles colors={['#12e2eb', '#00dcf1', '#00d6f6', '#00cff9', '#10c8fb']}>
        <Data />
        <Address />
      </ProfileStyles>
    </ContainerStyled>
  );
}
