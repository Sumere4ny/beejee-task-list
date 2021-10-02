const token = localStorage.getItem('token')
const jwtToken = token ? token : "";

const requestParams = {
  baseUrl: "https://uxcandy.com/~shapoval/test-task-backend/v2",
  headers: {
    "Content-Type": "application/json",
    "Authorization": jwtToken,
  },
};

const USER_NAME = '/?developer=sumere4ny';

export default {
  requestParams,
  USER_NAME
}
