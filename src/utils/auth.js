import requestParams from './constants.js';

class Auth {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _handleResponse(res) {
    if (!res.ok) {
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    }
    return res.json();
  }

  login(username, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        username,
        password
      }),
    }).then(this._handleResponse);
  }
}

export const auth = new Auth(requestParams);
