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

  // Получаем массив уже существующих задач
  async getTasks(pageNumber) {
    const res = await fetch(this._baseUrl + this._userName + `&page=${pageNumber}`, {
      headers: this._headers,
      method: 'GET',
    });
    return this._getResponseData(res);
  }

  // Создание и изменение задачи
  async createTask({ userName, email, text }) {
    const res = await fetch(`${this._baseUrl}/create`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ userName, email, text })
    });
    return this._getResponseData(res);
  }

  async changeTask({ id, text, status, token }) {
    const res = await fetch(`${this._baseUrl}/edit/${id}`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ text, status, token })
    });
    return this._getResponseData(res);
  }
}

export const api = new Api(requestParams);
