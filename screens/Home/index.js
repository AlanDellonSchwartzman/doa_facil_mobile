import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

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
  TextStyled,
  ThumbnailStyled,
  ContentStyled,
  BodyStyled,
  ImageStyled,
  CardMenuStyled,
} from './styles';

let logoPath = require('../../assets/images/logoONG.png');
let imagePath = require('../../assets/images/fotoONG.jpg');

export default function Home() {
  const navigation = useNavigation();

  function onPressMenu() {
    navigation.openDrawer();
  }

  return (
    <ContainerStyled>
      <ContentStyled>
        <CardStyled>
          <CardItemStyled>
            <LeftStyled>
              <ThumbnailStyled source={logoPath} />
              <BodyStyled>
                <TextStyled>Lar do neném</TextStyled>
                <TextStyled note>
                  R. Menezes Drumond, 284 - Madalena, Recife - PE, 50610-320
                </TextStyled>
              </BodyStyled>
            </LeftStyled>
          </CardItemStyled>
          <CardItemStyled cardBody>
            <ImageStyled
              source={imagePath}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItemStyled>
          <CardItemStyled>
            <LeftStyled>
              <ButtonStyled accessibilityLabel={'hist'}>
                <IconStyled type='FontAwesome5' name='book' />
                <TextStyled>História</TextStyled>
              </ButtonStyled>
            </LeftStyled>
            <BodyStyled>
              <ButtonStyled>
                <IconStyled type='FontAwesome5' name='map-marked-alt' />
                <TextStyled>Endereço</TextStyled>
              </ButtonStyled>
            </BodyStyled>
          </CardItemStyled>
        </CardStyled>
        <CardMenuStyled>
          <CardItemStyled>
            <LeftStyled>
              <ButtonStyled rounded>
                <TextStyled>Doar</TextStyled>
              </ButtonStyled>
              <ButtonStyled rounded accessibilityLabel={'inst'}>
                <TextStyled>Instituições</TextStyled>
              </ButtonStyled>
            </LeftStyled>
            <RightStyled>
              <ButtonStyled rounded>
                <TextStyled>Eventos</TextStyled>
              </ButtonStyled>
            </RightStyled>
          </CardItemStyled>
        </CardMenuStyled>
      </ContentStyled>
    </ContainerStyled>
  );
}
