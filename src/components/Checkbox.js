import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {fontFamily, marginBase, TEXT_PRIMARY, colors} from 'styles/vars';
import {BlackBold, InputLabel} from './Typography';

const checkedImage = require('assets/checkbox_checked.png');
const uncheckedImage = require('assets/checkbox_unchecked.png');

const Wrapper = styled.View`
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin-left: ${props => props.ml || 0};
`;

const UIRadio = styled.Pressable`
  width: 24px;
  height: 24px;
  background-color: transparent;
  margin-right: 8px;
`;

const UIImage = styled.Image`
  width: 24px;
  height: 24px;
  background-color: transparent;
`;

const Error = styled.Text`
  width: ${Dimensions.get('window').width - 50};
  position: absolute;
  bottom: -100%;
  right: 0;
  left: 0;
  background-color: ${colors.red};
  color: ${TEXT_PRIMARY};
  padding-vertical: ${marginBase / 2};
  padding-horizontal: ${marginBase};
  border-radius: 5px;
  overflow: hidden; /* this needs to be added to make the borderRadius work */
  font-size: 14px;
  font-family: ${fontFamily.regular};
  letter-spacing: 0;
`;

export const InputLabelButton = styled.Pressable``;

export const Checkbox = ({
  label,
  showError,
  error,
  initialValue,
  onChange,
  ml,
  id,
}) => {
  const [checked, setChecked] = useState(initialValue || false);

  useEffect(() => {
    setChecked(initialValue);
  }, [initialValue]);

  return (
    <Wrapper ml={ml}>
      <UIRadio
        onPress={() => {
          onChange(id);
        }}>
        <UIImage source={checked ? checkedImage : uncheckedImage} />
      </UIRadio>

      {label && (
        <InputLabelButton
          onPress={() => {
            onChange(id);
          }}>
          <BlackBold>{label}</BlackBold>
        </InputLabelButton>
      )}
      {showError && <Error>{error}</Error>}
    </Wrapper>
  );
};

export default Checkbox;
