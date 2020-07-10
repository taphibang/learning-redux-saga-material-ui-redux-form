import axios from 'axios';

class AxioService {
  constructor() {
    const instance = axios.create();
    this.instance = instance;
  }

  handleSucess(response) {
    return response;
  }

  handleErorr(error) {
    return Promise.reject(error);
  }

  get(url) {
    return this.instance.get(url);
  }
}

export default new AxioService();
