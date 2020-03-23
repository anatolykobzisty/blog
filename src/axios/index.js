import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://conduit.productionready.io/api',
});

export default axios;
