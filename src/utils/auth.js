import requestParams from './constants';
/* eslint-disable */
class Auth {
  constructor({ baseUrl, headers, userName }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._userName = userName;
  }

  _handleResponse(res) {
    if (!res.ok) {
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    }
    return res.json();
  }

}

export const auth = new Auth(requestParams);
