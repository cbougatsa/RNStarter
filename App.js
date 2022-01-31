/**
 * CEMBooks v2 Mobile App
 * https://github.com/facebook/react-native
 */

import React from 'react';

import Navigator from 'screens/index';
import Toast from 'react-native-toast-message';
import AppWrapper from 'components/AppWrapper';

const App = () => {
  return (
    <AppWrapper>
      <Navigator />
      <Toast
        ref={ref => Toast.setRef(ref)}
        type={'error'}
        position={'bottom'}
      />
    </AppWrapper>
  );
};

export default App;
