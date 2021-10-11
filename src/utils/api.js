import requestParams from './constants';

class Api {
  constructor({ baseUrl, headers, userName }) {
    /* eslint-disable */
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._userName = userName;
  }

  // Общий обработчик запросов
  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    }
    return res.json();
  }

  // Авторизация пользователя
  async login({ username, password }) {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    const res = await fetch(`${this._baseUrl}/login` + this._userName, {
      method: "POST",
      headers: this._headers,
      body: formData,
    });
    return this._getResponseData(res);
  }

  // Получаем массив уже существующих задач
  async getTasks(pageNumber, sortField, sortDirection) {
    let sortOptions = sortField || sortDirection
      ? `&sort_field=${sortField}` + `&sort_direction=${sortDirection}`
      : '';
    const res = await fetch(this._baseUrl + this._userName + `&page=${pageNumber}` + sortOptions, {
      headers: this._headers,
      method: 'GET',
    });
    return this._getResponseData(res);
  }

  // Создание и изменение задачи
  async createTask({ username, email, text }) {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('text', text);
    const res = await fetch(`${this._baseUrl}/create${this._userName}`, {
      method: 'POST',
      headers: this._headers,
      body: formData,
    });
    return this._getResponseData(res);
  }

  async changeTask({ id, text, status, token }) {
    const formData = new FormData();
    formData.append('status', status);
    formData.append('token', token);
    formData.append('text', text);
    const res = await fetch(`${this._baseUrl}/edit/${id}` + this._userName, {
      method: "POST",
      headers: this._headers,
      body: formData,
    });
    return this._getResponseData(res);
  }
}

export const api = new Api(requestParams);
