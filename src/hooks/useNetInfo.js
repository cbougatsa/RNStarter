import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import {actions as networkActions} from 'modules/netInfo';

export default function useNetInfo() {
  const dispatch = useDispatch();

  useEffect(() => {
    NetInfo.addEventListener(handleNetworkChange);

    return () => {
      //NetInfo.removeEventListener('change', handleNetworkChange);
    };
  }, []);

  const handleNetworkChange = networkState => {
    dispatch(networkActions.setNetInfo(networkState));
  };
}
