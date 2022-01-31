import React, {useState} from 'react';
import Toast from 'react-native-toast-message';
import {ScreenContainer, FormContainer, Header, Logo, Version} from './styles';
import Input from 'components/Input';
import Button from 'components/Button';
import {Title} from 'components/Typography';
import {validationTypes} from 'utils/validations';
import {Spacer, SafeArea} from 'styles/styles';
import {getErrorMessage} from 'utils/helpers';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const Icon = styled.Image`
  opacity: 9;
`;

export const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [hasErrors, setHasErrors] = useState(false);
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function doLogin() {
    setLoading(true);
  }

  /**
   * submit the form
   * also perform basic validations before allowing the user to continue
   */
  const submit = () => {
    setHasErrors(false);

    if (!validationTypes.email(email) || !password) {
      setHasErrors(true);
      return false;
    }

    doLogin(email, password);
  };

  return (
    <KeyboardAwareScrollView
      scrollEnabled={true}
      extraScrollHeight={94}
      keyboardShouldPersistTaps="handled"
      enableAutoAutomaticScroll={false}
      enableOnAndroid={true}
      keyboardOpeningTime={Number.MAX_SAFE_INTEGER}>
      <>
        <SafeArea>
          <Header>
            <Version>Version 2.0</Version>
          </Header>
          <ScreenContainer>
            <FormContainer>
              <Spacer mb={'24px'} mt={'5%'} justify={'flex-start'}>
                <Title>Please enter your login details.</Title>
              </Spacer>
              <Input
                autoCapitalize={'none'}
                dataDetectorTypes={'address'}
                label={'Email address'}
                showError={hasErrors}
                initialValue={email}
                error={'validationEmail'}
                onChangeText={text => setEmail(text)}
                validationType={'email'}
              />
              <Input
                label={'Password'}
                secureTextEntry={isSecureEntry}
                showError={hasErrors && !password}
                initialValue={password}
                error={'validationNotEmpty'}
                onChangeText={text => setPassword(text)}
                validationType={'password'}
              />
            </FormContainer>

            <Spacer mt={'24px'}>
              <Button
                size={'lg'}
                action={submit}
                width={'100%'}
                label={'LOGIN'}
                loading={loading}
                disabled={loading}
              />
            </Spacer>
            <Spacer mt={'24px'}>
              <Button
                size={'lg'}
                action={() => {
                  navigation.navigate('ForgotPassword');
                }}
                borderWidth={'1px'}
                width={'265px'}
                variant={'transparent'}
                label={'FORGOT PASSWORD'}
              />
            </Spacer>
          </ScreenContainer>
        </SafeArea>
      </>
    </KeyboardAwareScrollView>
  );
};

export default Login;
