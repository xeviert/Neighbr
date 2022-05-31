import config from '../config';

let myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow',
};

const AuthApiService = {
  postLogin(user) {
    let raw = JSON.stringify(user);
    requestOptions.body = raw;
    return fetch(`${config.API_ENDPOINT}/login`, requestOptions);
  },
  postUser(user) {
    let raw = JSON.stringify(user);
    requestOptions.body = raw;
    return fetch(`${config.API_ENDPOINT}/register`, requestOptions);
  },
};

export default AuthApiService;
