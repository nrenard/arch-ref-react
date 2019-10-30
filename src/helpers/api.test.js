import apiConfig from './api';
import apiMock from '~/__mocks__/helpers/api';

const servicePath = 'test';

describe('Api helper', () => {
  it('should be return api instance', () => {
    const service = apiConfig(servicePath);
    expect(service instanceof Function).toBe(true);
  });

  it('should be make get in test service success', async () => {
    const service = apiConfig(servicePath);
    const serviceMock = apiMock(service);

    serviceMock.onGet().reply(200, { success: true });

    const request = await service.get();

    expect(request.success).toBe(true);
  });

  it('should be make get in test service success with Authorization token', async () => {
    const service = apiConfig(servicePath);
    const serviceMock = apiMock(service);

    const getItemMock = jest.fn().mockReturnValue(JSON.stringify('132456'));
    global.localStorage.__proto__.getItem = getItemMock;

    serviceMock.onGet('/success').reply(200, { success: true });

    const request = await service.get('/success');

    expect(request.success).toBe(true);
  });

  it('should be make get in test service error 401', async () => {
    const removeItemMock = jest.fn();
    global.localStorage.__proto__.removeItem = removeItemMock;

    const service = apiConfig(servicePath);
    const serviceMock = apiMock(service);

    serviceMock.onGet('/unauthorized').reply(401);

    try {
      await service.get('/unauthorized');
    } catch (err) {
      expect(removeItemMock.mock.calls.length).toBe(1);
    }
  });

  it('should be make get in test service error 500', async () => {
    const removeItemMock = jest.fn();
    global.localStorage.__proto__.removeItem = removeItemMock;

    const service = apiConfig(servicePath);
    const serviceMock = apiMock(service);

    serviceMock.onGet('/error').reply(500);

    try {
      await service.get('/error');
    } catch (err) {
      expect(removeItemMock.mock.calls.length).toBe(0);
    }
  });
});
