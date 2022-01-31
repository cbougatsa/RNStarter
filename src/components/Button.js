import React from 'react';
import styled from 'styled-components/native';
import {fontFamily, marginBase, colors} from 'styles/vars';

const BACKGROUND_COLOR = {
  primary: colors.primary,
  secondary: colors.silverThree,
  success: colors.softGreen,
  danger: colors.danger,
  transparent: 'transparent',
};

const TEXT_COLOR = {
  primary: colors.white,
  secondary: colors.gunmetal,
  success: colors.white,
  danger: colors.white,
  transparent: colors.black,
};

const FONT_FAMILY = {
  primary: fontFamily.bold,
  secondary: fontFamily.bold,
  success: fontFamily.bold,
  danger: fontFamily.bold,
  transparent: fontFamily.regular,
};

const HEIGHT = {
  lg: '48px',
  md: '36px',
  sm: '30px',
};

const FONT_SIZE = {
  lg: '16px',
  md: '14px',
  sm: '12px',
};

const UIButton = styled.Pressable`
  flex-direction: row;
  align-items: center;
  justify-content: ${props => (props.iconSource ? 'flex-start' : 'center')};
  width: ${props => props.width || 'auto'};

  height: ${props => HEIGHT[props.size]};
  border-radius: 4px;
  background-color: ${props => BACKGROUND_COLOR[props.variant]};
  padding: 8px;
`;

const UILabel = styled.Text`
  font-family: ${props => FONT_FAMILY[props.variant]};
  font-size: ${props => FONT_SIZE[props.size]};
  color: ${props => TEXT_COLOR[props.variant]};
  letter-spacing: 2px;
  border-bottom-width: ${props => props.borderWidth || '0px'};
  border-bottom-color: pink;
`;

const UIIcon = styled.Image`
  margin-right: 8px;
`;

const UILoader = styled.ActivityIndicator``;

export const Button = ({
  variant,
  label,
  loading,
  disabled,
  action,
  width,
  iconSource,
  style,
  size,
  borderWidth,
}) => {
  return (
    <UIButton
      variant={variant}
      onPress={action}
      disabled={disabled || loading}
      width={width}
      style={style}
      size={size}
      iconSource={iconSource}>
      {loading ? (
        <UILoader color={'#fff'} />
      ) : (
        <>
          {iconSource ? <UIIcon source={iconSource} /> : null}
          <UILabel variant={variant} size={size} borderWidth={borderWidth}>
            {label}
          </UILabel>
        </>
      )}
    </UIButton>
  );
};

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
  loading: false,
  disabled: false,
};

export default Button;
