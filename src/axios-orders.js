import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://windy-recruitment.firebaseio.com/'
})

export default instance;