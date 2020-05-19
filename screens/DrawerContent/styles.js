import styled from 'styled-components/native';
import {
  Item,
  Icon,
  Button,
  Card,
  CardItem,
  Left,
  Right,
  Container,
  Header,
  Body,
  Content,
  Thumbnail,
} from 'native-base';
import {Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const DrawerStyles = styled.ScrollView`
`;

export const ContainerStyled = styled(Container).attrs({})`
  flex: 1;
`;

export const HeaderStyled = styled(Header).attrs({})`
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
  margin-top: ${(props) => (props.transparent ? '5px' : '5px')};
`;

export const IconStyled = styled(Icon).attrs({})`
  font-size: 25px;
  color: #05b2c2;
  margin-left: 0;
`;

export const CardStyled = styled(Card).attrs({})`
    color: black;
    background-color: green;
`;

export const CardItemStyled = styled(CardItem).attrs({})`
`;

export const LeftStyled = styled(Left).attrs({})``;

export const RightStyled = styled(Right).attrs({})``;

export const BodyStyled = styled(Body).attrs({})``;

export const ContentStyled = styled(Content).attrs({})`
  color: black;
`;

export const ThumbnailStyled = styled(Thumbnail).attrs({})``;

export const ImageStyled = styled(Image).attrs({})``;

export const TextStyled = styled.Text`
  font-weight: bold;
  font-size: ${(props) => (props.note ? '10px' : '16px')};
  color: black;
  opacity: ${(props) => (props.note ? '0.5' : '1')}
`;
