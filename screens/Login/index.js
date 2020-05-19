import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import {
  LoginStyles,
  ItemStyled,
  InputStyled,
  IconStyled,
  ButtonStyled,
  TextStyled,
  IconLogoStyled,
  TextLogoStyled,
  ContainerLogo,
} from './styles';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('Nome e senha', email, password);

    return function cleanup() {};
  });

  function getMessage(message) {
    switch (message) {
      case 'all null':
        Alert.alert(
          'Ops!',
          'Informe um e-mail e senha para login ou cadastre-se agora!'
        );
        break;
      case 'not registered':
        Alert.alert('Ops!', 'Usuário não cadastrado. \nCadastre-se agora!');
      // this.props.navigation.navigate('Register');
      default:
        break;
    }
  }

  function getUser() {
    console.log(email.toLocaleLowerCase(), password.toLocaleLowerCase());
    if (
      email.toLowerCase() == 'admin' &&
      password.toLowerCase() == 'admin'
    ) {
      return true;
    } else return false;
  }

  function onPressLogin() {
    if (email != '' && password != '') {
      if (getUser()) {
        navigation.navigate('Dashboard');
        console.log('Clicado', email, password);
        setEmail('');
        setPassword('');
      } else getMessage('not registered');
    } else getMessage('all null');
  }

  function onPressRegister() {
    navigation.navigate('Register');
  }

  return (
    <LoginStyles
      colors={['#12e2eb', '#00dcf1', '#00d6f6', '#00cff9', '#10c8fb']}
    >
      <ContainerLogo>
        <IconLogoStyled type='FontAwesome5' name='handshake'></IconLogoStyled>
      <TextLogoStyled>Doa Fácil</TextLogoStyled>
      </ContainerLogo>
      <ItemStyled rounded>
        <IconStyled name='person' />
        <InputStyled
          onChangeText={(email) => setEmail(email)}
          placeholder='Email'
          value={email}
        />
      </ItemStyled>
      <ItemStyled rounded>
        <IconStyled name='lock' />
        <InputStyled
          onChangeText={(password) => setPassword(password)}
          placeholder='Senha'
          value={password}
          secureTextEntry={true}
        />
      </ItemStyled>
      <ButtonStyled rounded onPress={onPressLogin}>
        <TextStyled>Entrar</TextStyled>
      </ButtonStyled>
      <ButtonStyled transparent onPress={onPressRegister}>
        <TextStyled register>Registrar-se</TextStyled>
      </ButtonStyled>
    </LoginStyles>
  );
}

Login.navigationOptions = {
  header: null,
};
