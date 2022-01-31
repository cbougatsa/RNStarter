import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {colors, fontFamily, marginBase} from 'styles/vars';
import {InputLabel} from './Typography';
import {validationTypes} from 'utils/validations';

const Wrapper = styled.View`
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: ${props => props.mb || '16px'};
`;

const UITextField = styled.TextInput`
  font-size: 14px;
  font-family: ${fontFamily.bold};
  width: 100%;
  height: 56px;
  padding-horizontal: 16px;
  color: ${colors.black};
`;

const UITextFieldWrapper = styled.View`
  width: 100%;
  background-color: ${colors.white};
  border-bottom-width: 1px;
  border-bottom-color: ${props =>
    props.showError ? colors.danger : colors.pinkishGrey};
  background-color: ${colors.whiteYwo};
  margin-vertical: 8px;
  flex-direction: row;
  align-items: center;
  opacity: ${props => (props.editable === false ? 0.1 : 1)};
  padding-bottom: 0px;
`;

const Error = styled.Text`
  color: ${colors.danger};
  padding-vertical: ${marginBase / 2}px;
  padding-horizontal: ${marginBase}px;
  border-radius: 5px;
  overflow: hidden; /* this needs to be added to make the borderRadius work */
  font-size: 14px;
  font-family: ${fontFamily.regular};
  letter-spacing: 0;
  align-self: flex-start;
  justify-content: flex-start;
`;
const Helper = styled.Text`
  color: ${colors.steelGrey};
  padding-vertical: ${marginBase / 2}px;
  padding-horizontal: ${marginBase}px;
  border-radius: 5px;
  overflow: hidden; /* this needs to be added to make the borderRadius work */
  font-size: 14px;
  font-family: ${fontFamily.regular};
  letter-spacing: 0;
  align-self: flex-start;
  justify-content: flex-start;
`;

const LabelIconWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const IconView = styled.View`
  z-index: 9;
  margin-right: 16px;
  position: absolute;
  right: 0;
`;

export const Input = ({
  label,
  placeholder,
  showError,
  error,
  autoCorrect,
  secureTextEntry,
  initialValue,
  dataDetectorTypes,
  onChangeText,
  onFocus,
  validationType, // can be email // password / notEmpty
  mb,
  showInfoIcon,
  keyboardType,
  autoCapitalize,
  labelFullWidth,
  editable,
  multiline,
  isControlled,
  icon,
  helperText,
}) => {
  const [value, setValue] = useState(initialValue || '');

  useEffect(() => {
    // if componentDidUpdate or componentDidMount
    if (isControlled) {
      setValue(initialValue);
    } else if (!value && initialValue) {
      setValue(initialValue);
    }
    //eslint-disable-next-line
  }, [initialValue]);

  return (
    <Wrapper mb={mb}>
      {(label || showInfoIcon) && (
        <LabelIconWrapper>
          {label && (
            <InputLabel style={{maxWidth: labelFullWidth ? '100%' : '90%'}}>
              {label}
            </InputLabel>
          )}
        </LabelIconWrapper>
      )}
      <UITextFieldWrapper showError={showError} editable={editable}>
        <UITextField
          multiline={multiline}
          editable={editable}
          keyboardType={keyboardType}
          dataDetectorTypes={dataDetectorTypes}
          value={value}
          secureTextEntry={secureTextEntry}
          autoCorrect={autoCorrect}
          placeholder={placeholder}
          placeholderTextColor={colors.black650}
          selectionColor={colors.black}
          autoCapitalize={autoCapitalize || 'sentences'}
          onChangeText={text => {
            setValue(text);
            onChangeText && onChangeText(text);
          }}
          onFocus={() => {
            if (onFocus) {
              onFocus();
            }
          }}
        />
        <IconView>{icon && icon}</IconView>
      </UITextFieldWrapper>

      {helperText ? <Helper>{helperText}</Helper> : null}

      {validationType && value
        ? !validationTypes[validationType](value) &&
          showError && <Error>{error}</Error>
        : showError && <Error>{error}</Error>}
    </Wrapper>
  );
};

Input.defaultProps = {
  secureTextEntry: false,
  autoCorrect: false,
  dataDetectorTypes: 'none',
};

export default Input;
