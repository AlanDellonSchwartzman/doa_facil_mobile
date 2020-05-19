import React from 'react';
import { DrawerItem, DrawerContent } from '@react-navigation/drawer';

import { IconStyled, DrawerStyles, ContainerStyled } from './styles';

export default function DrawerCustom(props) {
  return (
    <DrawerContent>
      <DrawerStyles>
        <ContainerStyled>
          <IconStyled type='FontAwesome5' name='handshake' />
        </ContainerStyled>
      </DrawerStyles>
    </DrawerContent>
  );
}
