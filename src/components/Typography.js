import {fontFamily, colors} from 'styles/vars';
import styled from 'styled-components/native';

export const Title = styled.Text`
  font-family: ${fontFamily.regular};
  font-size: 14px;
  color: ${colors.black};
  text-align: left;
  width: 100%;
`;

export const ErrorTitle = styled.Text`
  font-family: ${fontFamily.bold};
  font-size: 18px;
  letter-spacing: -0.2px;
  color: ${colors.white};
`;
export const ErrorLabel = styled.Text`
  text-align: center;
  justify-content: center;
  font-family: ${fontFamily.regular};
  font-size: 18px;
  letter-spacing: -0.2px;
  color: ${colors.white};
`;

export const InputLabel = styled.Text`
  font-family: ${fontFamily.regular};
  font-size: 14px;
  letter-spacing: -0.2px;
  color: ${colors.black};
`;
export const InputLabelGrey = styled.Text`
  font-family: ${fontFamily.regular};
  font-size: 14px;
  letter-spacing: -0.2px;
  color: ${colors.steelGrey};
`;

export const Input = styled.Text`
  font-family: ${fontFamily.bold};
  font-size: 22px;
  letter-spacing: -0.25px;
  color: ${colors.black};
`;

export const Text = styled.Text`
  font-size: ${props => (props.fontSize ? props.fontSize : '14px')};
  line-height: 20px;
  font-family: ${fontFamily.regular};
  color: ${props => (props.color ? props.color : colors.black)};
`;

export const TextBold = styled.Text`
  font-size: ${props => (props.fontSize ? props.fontSize : '14px')};
  line-height: 20px;
  font-family: ${fontFamily.bold};
  color: ${props => (props.color ? props.color : colors.black)};
`;

export const ScreenTitle = styled.Text`
  font-size: 14px;
  color: ${colors.black};
  font-family: ${fontFamily.bold};
`;
export const ScreenTitleWhite = styled.Text`
  font-size: 14px;
  color: ${colors.white};
  font-family: ${fontFamily.bold};
`;
export const GreySmall = styled.Text`
  font-size: 12px;
  color: ${colors.black};
  font-family: ${fontFamily.regular};
`;
export const BlueGreySmall = styled.Text`
  font-size: 12px;
  color: ${colors.blueGrey};
  font-family: ${fontFamily.regular};
`;
export const BlueGreySmallBold = styled.Text`
  font-size: 12px;
  color: ${colors.blueGrey};
  font-family: ${fontFamily.bold};
`;
export const WhiteXSmall = styled.Text`
  font-size: 10px;
  color: ${colors.white};
  font-family: ${fontFamily.regular};
`;

export const BlackBold = styled.Text`
  font-size: 14px;
  color: ${colors.black};
  font-family: ${fontFamily.bold};
`;

export const TextLabel = styled.Text`
  font-family: ${props =>
    props.fontFamily ? props.fontFamily : fontFamily.regular};
  font-size: ${props => (props.fontSize ? props.fontSize : '14px')};
  color: ${props => (props.color ? props.color : colors.black)};
`;

export const TextLarge = styled.Text`
  font-family: ${props =>
    props.fontFamily ? props.fontFamily : fontFamily.regular};
  font-size: ${props => (props.fontSize ? props.fontSize : '18px')};
  color: ${props => (props.color ? props.color : colors.black)};
`;
