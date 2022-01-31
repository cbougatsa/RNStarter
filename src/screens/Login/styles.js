import styled from 'styled-components/native';
import {colors} from 'styles/vars';

export const ScreenContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  flex: 1;
  background-color: transparent;
`;

export const FormContainer = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.silverThree};
  padding-bottom: 27px;
`;

export const Logo = styled.Image`
  margin-top: 25px;
  margin-left: 20px;
  width: 176px;
`;

export const Version = styled.Text`
  font-size: 14px;
  color: ${colors.black};
  margin-right: 20px;
  text-align: right;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 40px;
`;
