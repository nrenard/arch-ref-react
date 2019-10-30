import { setItem, getItem, removeItem } from './storage';

const keyToken = 'token';

export const removeToken = () => {
  removeItem(keyToken);
};

export const isAuthenticated = () => {
  const tokenStorage = getItem(keyToken);
  return tokenStorage;
};

export const setTokenSession = (tokenValue) => {
  setItem(keyToken, tokenValue);
};
