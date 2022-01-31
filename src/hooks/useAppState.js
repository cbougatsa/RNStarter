import React, {useRef, useState, useEffect} from 'react';
import {AppState} from 'react-native';

export default function useAppState(comeToForeGroundCallback) {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!');
      if (comeToForeGroundCallback) {
        comeToForeGroundCallback();
      }
    }

    appState.current = nextAppState;
    setAppStateVisible(appState.current);
  };

  return {
    appState: appStateVisible,
  };
}
