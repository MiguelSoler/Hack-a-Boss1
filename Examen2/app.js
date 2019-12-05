
const axios = require('axios');

const urlLogin = 'http://localhost:3333/login';
const urlPOI = 'http://localhost:3333/poi';

const options = {
    username: 'andres',
    password: '1234'
  }

let sessionToken;

axios.post(urlLogin, options)
.then((response) => {
    sessionToken = response.data.token;

    return axios.get(urlPOI, {
        headers: {
          Authorization: 'Bearer ' + sessionToken 
        }
    })
}).then(data => {
    console.log(data);
})
.catch(e => {
    console.log('error: ', e);
});

