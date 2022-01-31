import React from 'react';
import styled from 'styled-components/native';
import {colors} from 'styles/vars';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${colors.dark};
  height: 60px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AppWrapper = ({children, background}) => {
  return <Wrapper background={background}>{children}</Wrapper>;
};

export default AppWrapper;
