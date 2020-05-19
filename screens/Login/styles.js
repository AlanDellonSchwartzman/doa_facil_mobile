import styled from 'styled-components/native';
import { Item, Input, Icon, Button } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

export const LoginStyles = styled(LinearGradient).attrs({})`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ItemStyled = styled(Item).attrs({})`
background-color: white
margin-bottom: 10px;
width: 85%;
`;

export const InputStyled = styled(Input).attrs({})`
  margin-left: 10px;
`;

export const ContainerLogo = styled.View`
margin-top: -55px;
margin-bottom: 80px;
justify-content: space-between
display: flex
`;

export const IconStyled = styled(Icon).attrs({})`
  font-size: 18px;
  color: #05b2c2;
  margin-left: 10px;
`;

export const IconLogoStyled = styled(Icon).attrs({})`
  font-size: 65px;
  color: white;
  text-align: center;
`;

export const TextLogoStyled = styled.Text`
  font-weight: bold;
  font-size: 45px;
  color: white;
`;

export const TextStyled = styled.Text`
  font-weight: bold;
  font-size: ${(props) =>
    props.register ? '12px' : '16px'};
  color: white;
`;

export const ButtonStyled = styled(Button).attrs(props => (props.transparent ? {} : {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 6,
}))`
  padding: 25px;
  background-color: ${(props) =>
    props.transparent ? 'transparent' : '#0192e0'};
  margin-top: ${(props) =>
    props.transparent ? '5px' : '20px'};;
`;
