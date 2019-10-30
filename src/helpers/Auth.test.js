import {
  isAuthenticated, setTokenSession, removeToken,
} from './auth';

const key = 'token';
const token = '123456';

describe('Auth helper', () => {
  it('should be not able take token from isAuthenticated.', () => {
    expect(isAuthenticated()).toBe(null);
  });

  it('should be able take token from isAuthenticated.', () => {
    const getItemMock = jest.fn().mockReturnValue(JSON.stringify(token));
    global.localStorage.__proto__.getItem = getItemMock;

    expect(isAuthenticated()).toBe(token);
  });

  it('should be abe to set token.', () => {
    const setItemMock = jest.fn();
    global.localStorage.__proto__.setItem = setItemMock;

    setTokenSession(token);

    expect(setItemMock.mock.calls.length).toBe(1);
    expect(setItemMock).toHaveBeenCalledWith(key, JSON.stringify(token));
  });

  it('should be abe to set remove token.', () => {
    const removeItemMock = jest.fn();
    global.localStorage.__proto__.removeItem = removeItemMock;

    removeToken();

    expect(removeItemMock.mock.calls.length).toBe(1);
    expect(removeItemMock).toHaveBeenCalledWith(key);
  });
});
