import React, {useEffect} from 'react';

import {enableScreens} from 'react-native-screens';

import Navigator from 'screens/index';
import 'react-native-gesture-handler';
import 'services/interceptors';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  enableScreens();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppWrapper>
            <Navigator />
            {/*<Message isDisplayed={false} />*/}
            <Toast
              ref={ref => Toast.setRef(ref)}
              type={'error'}
              position={'bottom'}
            />
          </AppWrapper>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
