import config from '../config'

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};


const AuthApiService = {
    postLogin(user) {
        var raw = JSON.stringify(user);
        requestOptions.body = raw;
        return fetch(`${config.API_ENDPOINT}/login`, requestOptions)
    },
    postUser(user) {
        var raw = JSON.stringify(user);
        requestOptions.body = raw;
        return fetch(`${config.API_ENDPOINT}/register`, requestOptions)

        // return fetch(`${config.API_ENDPOINT}/register`, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json',
        //     },
        //     body: JSON.stringify(user),
        // })
        //     .then(res =>
        //         (!res.ok)
        //         ? res.json().then(e => Promise.reject(e))
        //         : res.json()
        //     )
    },
}

export default AuthApiService