import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import moment from 'moment';

import {
  RegisterStyles,
  ItemStyled,
  InputStyled,
  IconStyled,
  ButtonStyled,
  TextStyled,
  DatePickerStyled,
  PickerStyled,
} from './styles';

export default function Register() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [document, setDocument] = useState('');
  const [dateBirth, setDateBirth] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [role, setRole] = useState('');
  const [visibleCalendar, setVisibleCalendar] = useState(false);

  useEffect(() => {
    console.log('Role', role);

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
    if (name && email && password && passwordConfirm) return true;
    else return false;
  }

  function onPressContinue() {
    if (!validFields()) {
      navigation.navigate('Address');
      setEmail('');
      setName('');
      setPassword('');
      setPasswordConfirm('');
    } else getMessage('all null');
  }

  return (
    <RegisterStyles
      colors={['transparent', 'transparent']}
    >
      <ItemStyled rounded>
        <IconStyled name='person' />
        <InputStyled
          onChangeText={(name) => setName(name)}
          placeholder='Nome'
        />
      </ItemStyled>
      <ItemStyled rounded>
        <IconStyled name='at' />
        <InputStyled
          onChangeText={(email) => setEmail(email)}
          placeholder='Email'
        />
      </ItemStyled>
      <ItemStyled rounded>
        <IconStyled type='FontAwesome5' name='address-card' />
        <InputStyled
          onChangeText={(document) => setDocument(document)}
          placeholder='CPF/CNPJ'
        />
      </ItemStyled>
      <ItemStyled rounded>
        <IconStyled name='calendar' />
        <InputStyled
          placeholder='Nascimento'
          value={dateBirth}
          onFocus={() => setVisibleCalendar(true)}
          onEndEditing={() => setVisibleCalendar(false)}
        ></InputStyled>
        {visibleCalendar && (
          <DatePickerStyled
            onOkClick={() => setVisibleCalendar(false)}
            accessibilityLabel='date'
            display={'spinner'}
            value={new Date()}
            onChange={(dateBirth) =>
              setDateBirth(moment(dateBirth).format('DD/MM/YYYY'))
            }
          />
        )}
      </ItemStyled>
      <ItemStyled rounded>
        <IconStyled name='lock' />
        <InputStyled
          onChangeText={(password) => setPassword(password)}
          placeholder='Senha'
          secureTextEntry={true}
        />
      </ItemStyled>
      <ItemStyled rounded>
        <IconStyled name='lock' />
        <InputStyled
          onChangeText={(passwordConfirm) =>
            setPasswordConfirm(passwordConfirm)
          }
          placeholder='Confirme a Senha'
          secureTextEntry={true}
        />
      </ItemStyled>
    </RegisterStyles>
  );
}
