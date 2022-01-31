import {btoa} from './helpers';

const REACT_APP_API_URL = 'https://api.example.com';
const REACT_APP_CLIENT_ID = 'someClientId';
const REACT_APP_CLIENT_SECRET = 'someSecret';

export const clientId = REACT_APP_CLIENT_ID;

export const apiURL = REACT_APP_API_URL + '/api/v1';
export const baseURL = REACT_APP_API_URL;
export const authKey =
  'Basic ' + btoa(REACT_APP_CLIENT_ID + ':' + REACT_APP_CLIENT_SECRET);
