import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'e4265a63191847f5bf2308c24d58d388',
  },
});
