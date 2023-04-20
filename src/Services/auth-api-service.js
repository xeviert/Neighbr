import config from '../config';
import TokenService from './token-service';

let myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow',
};

const AuthApiService = {
  postLogin({email, password}) {
    return fetch(`${config.API_ENDPOINT}/login`, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',     
      },
      body: JSON.stringify({email, password}),
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(err => Promise.reject(err))
        : res.json()
    )
  },
  postUser(user) {
    let raw = JSON.stringify(user);
    requestOptions.body = raw;
    return fetch(`${config.API_ENDPOINT}/register`, requestOptions);
  },
  refreshToken() {
    return fetch(`${config.API_ENDPOINT}/login`, {
      method: 'PUT',
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
};

export default AuthApiService;
