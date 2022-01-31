import styled from 'styled-components/native';
import {colors, fontFamily} from './vars';

/*export const AppWrapper = styled.View`
  flex: 1;
  background-color: ${(props) => props.background || colors.lightGray};
`;*/

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.background || colors.white};
`;

export const Spacer = styled.View`
  width: 100%;
  flex-direction: ${props => props.dir || 'column'};
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
  margin-top: ${props => props.mt || 0};
  margin-bottom: ${props => props.mb || 0};
  margin-left: ${props => props.ml || 0};
  margin-right: ${props => props.mr || 0};
  padding-top: ${props => props.pt || 0};
  padding-bottom: ${props => props.pb || 0};
  padding-left: ${props => props.pl || 0};
  padding-right: ${props => props.pr || 0};
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  width: 100%;
  flex: 1;
`;

export const Section = styled.KeyboardAvoidingView`
  width: 100%;
  flex: 1;
`;

export const TabIconWithBadge = styled.View`
  position: relative;
`;
export const TabIcon = styled.Image``;
export const TabIndicator = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -8px;
  right: -8px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${colors.warmPurple};
`;
export const TabIndicatorCount = styled.Text`
  color: ${colors.white};
  font-size: 10px;
  font-family: ${fontFamily.bold};
`;

export const TabButton = styled.Pressable`
  width: 100%;
  flex: 1;
  height: 100%;
  border-top-width: 2px;
  border-top-color: ${props =>
    props.accessibilityState.selected ? '#333' : '#fff'};
`;
