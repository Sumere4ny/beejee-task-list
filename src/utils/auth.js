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

  login({ username, password }) {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    return fetch(`${this._baseUrl}/login` + this._userName, {
      method: "POST",
      headers: this._headers,
      body: formData,
    }).then(this._handleResponse);
  }
}

export const auth = new Auth(requestParams);
