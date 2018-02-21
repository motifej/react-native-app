import client from 'axios';

let token = '';
let endpoint = '';

const getBaseHeaders = () => ({
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': `bearer ${token}`,
});


export const setToken = (newToken, newSenderId) => {
  token = newToken;
};

export const setBaseEndpoint = ep => {
  endpoint = ep;
}

const callApi = async (url, { headers = {}, data, ...restOptions }) => {
  const config = {
    url: `${endpoint}${url}`,
    headers: { ...getBaseHeaders(), ...headers },
    data,
    ...restOptions,
  };

  if (restOptions.method === 'POST' && !config.data) {
    config.data = {};
  }

  const request = await client.request(config);

  return request.data;
};

export default {
  get: (url, options) => callApi(url, { ...options, method: 'GET' }),
  post: (url, options) =>
    callApi(url, { ...options, method: 'POST' }),
  put: (url, options) => callApi(url, { ...options, method: 'PUT' }),
  delete: (url, options) =>
    callApi(url, { ...options, method: 'DELETE' }),
};
