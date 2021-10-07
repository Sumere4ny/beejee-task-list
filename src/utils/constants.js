const token = localStorage.getItem('token');
/* eslint-disable */
const jwtToken = token ? token : '';
const USER_NAME = '/?developer=sumere4ny';

/* eslint-disable */

const requestParams = {
  baseUrl: "https://uxcandy.com/~shapoval/test-task-backend/v2",
  headers: {
    // "Mime-Type": "multipart/form-data",
    // "Authorization": jwtToken,
  },
  userName: USER_NAME,
};

export default requestParams;
