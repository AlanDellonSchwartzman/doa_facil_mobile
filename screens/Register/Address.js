import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import {
  RegisterStyles,
  ItemStyled,
  InputStyled,
  IconStyled,
  ButtonStyled,
  TextStyled,
} from './styles';

export default function Address() {
  const navigation = useNavigation();
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [number, setNumber] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [uf, setUf] = useState('');

  useEffect(() => {
    return function cleanup() {};
  });

  function getMessage(message) {
    switch (message) {
      case 'all null':
        Alert.alert(
          'Ops!',
          'Por favor verifique se todos os campos foram informados corretamente'
        );
        break;
      case 'already registered':
        Alert.alert('Ops!', 'Usuário já cadastrado');
      // this.props.navigation.navigate('Register');
      default:
        break;
    }
  }

  function validFields() {
    if (street && city && number && zipCode) return true;
    else return false;
  }

  function onPressRegister() {
    if (!validFields()) {
        navigation.navigate('Dashboard');
    } else getMessage('all null');
  }

  return (
    <RegisterStyles
      colors={['#12e2eb', '#00dcf1', '#00d6f6', '#00cff9', '#10c8fb']}
    >
      <ItemStyled rounded>
        <IconStyled type='FontAwesome5' name='road' />
        <InputStyled
          onChangeText={(street) => setStreet(street)}
          placeholder='Rua'
        />
      </ItemStyled>
      <ItemStyled rounded>
        <IconStyled type='FontAwesome5' name='home' />
        <InputStyled
          onChangeText={(number) => setNumber(number)}
          placeholder='Número'
        />
      </ItemStyled>
      <ItemStyled rounded>
        <IconStyled type='FontAwesome5' name='map-marker-alt' />
        <InputStyled
          onChangeText={(zipCode) => setZipCode(zipCode)}
          placeholder='CEP'
        />
        <IconStyled type='FontAwesome5' name='map-marked-alt' />
        <InputStyled onChangeText={(uf) => setUf(uf)} placeholder='UF' />
      </ItemStyled>
      <ItemStyled rounded>
        <IconStyled type='FontAwesome5' name='city' />
        <InputStyled
          onChangeText={(city) => setCity(city)}
          placeholder='Cidade'
        />
      </ItemStyled>
      <ButtonStyled rounded onPress={onPressRegister}>
        <TextStyled>Registrar-se</TextStyled>
      </ButtonStyled>
    </RegisterStyles>
  );
}
