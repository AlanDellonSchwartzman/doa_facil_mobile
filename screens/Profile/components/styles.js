import styled from 'styled-components/native';
import { Item, Input, Icon, Button, Picker } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';

import { LinearGradient } from 'expo-linear-gradient';

export const RegisterStyles = styled(LinearGradient).attrs({})`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: transparent;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ItemStyled = styled(Item).attrs({})`
background-color: white
margin-bottom: 25px;
width: 85%;
`;

export const InputStyled = styled(Input).attrs({})`
  margin-left: 10px;
`;

export const DatePickerStyled = styled(DateTimePicker).attrs({})`
`;

export const IconStyled = styled(Icon).attrs({})`
${props => props.name === 'chevron-circle-right' ? 'margin-top: 35px' : ''};
  font-size: ${(props) => 
    props.name === 'chevron-circle-right' ? '50px' : '18px'};
  color: ${(props) => 
    props.name === 'chevron-circle-right' ? '#0192e0' : '#05b2c2'};
  margin-left: 10px;
`;

export const TextStyled = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: white;
`;

export const ButtonStyled = styled(Button).attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 6,
})`
  padding: 25px;
  background-color: #0192e0;
  margin-bottom: 15px;
`;

export const PickerStyled = styled(Picker).attrs({})`
  margin-left: 15px;
  text-align: center;
`;