import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components/native';
import {colors, fontFamily, marginBase} from 'styles/vars';
import {validationTypes} from 'utils/validations';
import {Platform} from 'react-native';

const Wrapper = styled.View`
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: ${props => props.mb || '16px'};
  margin-top: 15px;
`;

const UITextField = styled.TextInput`
  font-size: 14px;
  font-family: ${fontFamily.bold};
  width: 100%;
  height: 60px;
  padding-horizontal: 16px;
  color: ${colors.black};
`;

const UITextFieldWrapper = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${props =>
    props.showError ? colors.danger : colors.pinkishGrey};
  background-color: ${colors.whiteYwo};
  margin-vertical: 8px;
  flex-direction: row;
  align-items: center;
  opacity: ${props => (props.editable === false ? 0.1 : 1)};
  padding-bottom: 0;
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

const LabelIconWrapper = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  bottom: ${props => (props.top ? 'auto' : '15px')};
  top: ${props =>
    props.top ? (Platform.OS === 'android' ? '-5px' : '-15px') : 'auto'};
  z-index: 999;
  left: 0;
  background-color: ${colors.whiteYwo};
  padding: 5px 10px;
  height: ${Platform.OS === 'android' ? '29px' : '25px'};
`;

const Label = styled.Text`
  font-size: ${props => (props.top ? '12px' : '14px')};
  color: ${colors.steelGrey};
`;

const IconView = styled.View`
  z-index: 9;
  margin-right: 16px;
  position: absolute;
  right: 0;
`;

export const TextArea = ({
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
  keyboardType,
  autoCapitalize,
  labelFullWidth,
  editable,
  isControlled,
  icon,
}) => {
  const [value, setValue] = useState(initialValue || '');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef();

  //console.log('value', value);

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
      {label && (
        <LabelIconWrapper
          top={isFocused || value}
          onPress={() => {
            inputRef.current.focus();
          }}>
          {label && (
            <Label
              numberOfLines={1}
              style={{maxWidth: labelFullWidth ? '100%' : '90%'}}>
              {label}
            </Label>
          )}
        </LabelIconWrapper>
      )}
      <UITextFieldWrapper
        showError={showError}
        editable={editable}
        isFocused={isFocused}>
        <UITextField
          isFocused={isFocused}
          ref={inputRef}
          textAlignVertical={'bottom'}
          multiline
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
            setIsFocused(true);
            if (onFocus) {
              onFocus();
            }
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
        />
        <IconView>{icon && icon}</IconView>
      </UITextFieldWrapper>

      {validationType && value
        ? !validationTypes[validationType](value) &&
          showError && <Error>{error}</Error>
        : showError && <Error>{error}</Error>}
    </Wrapper>
  );
};

TextArea.defaultProps = {
  secureTextEntry: false,
  autoCorrect: false,
  dataDetectorTypes: 'none',
};

export default TextArea;
