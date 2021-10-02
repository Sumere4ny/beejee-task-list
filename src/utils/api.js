import { requestParams, USER_NAME } from './constants.js';

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // Общий обработчик запросов
  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(new Error(`Ошибка: ${res.status}`));
    }
    return res.json();
  }

  // Получаем массив уже существующих задач
  getTasks(pageNumber) {
    return fetch(this._baseUrl + USER_NAME + `&page=${pageNumber}`, {
      headers: this._headers,
      method: 'GET'
    })
    .then(this._getResponseData);
  }

  // Создание и удаление задачи
  createTask({ userName, email, text }) {
    return fetch(`${this._baseUrl}/create`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ userName, email, text })
    }).then(this._getResponseData)
  }

  changeTask({ id, text, status, token }) {
    return fetch(`${this._baseUrl}/edit/${id}`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ text, status, token })
    }).then(this._getResponseData)
  }
}

export const api = new Api(requestParams);
