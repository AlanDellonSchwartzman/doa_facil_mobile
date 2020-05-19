import styled from 'styled-components/native';
import { Item, Icon, Button, Card, CardItem, Left, Right, Container, Header } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

export const HeaderStyles = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ContainerStyled = styled(Container).attrs({})`
    flex: 1;

`;

export const HeaderStyled = styled(Header).attrs({})`
    flex: 1;

`;




export const ItemStyled = styled(Item).attrs({})`
background-color: white
margin-bottom: 10px;
width: 85%;
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
  background-color: ${(props) =>
    props.transparent ? 'transparent' : '#0192e0'};
  margin-top: ${(props) => (props.transparent ? '5px' : '20px')};
`;

export const IconStyled = styled(Icon).attrs({})`
  font-size: 50px;
  color: #05b2c2;
  margin-left: 10px;
`;

export const CardStyled = styled(Card).attrs({})`
 
`;

export const CardItemStyled = styled(CardItem).attrs({})`

`;

export const LeftStyled = styled(Left).attrs({})`

`;

export const RightStyled = styled(Right).attrs({})`

`;
