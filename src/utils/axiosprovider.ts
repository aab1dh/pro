import { injectable } from 'inversify';
import axios from 'axios';
axios.defaults.timeout === 3000;

export interface Provider<T> {
  provide(): T;
}

// For GET requests
axios.interceptors.request.use(
  req => {
    // Add configurations here
    return req;
  },
  err => {
    return Promise.reject(err);
  },
);

// For POST requests
axios.interceptors.response.use(
  res => {
    // Add configurations here
    if (res.status === 200) {
      console.log('Responded Successfully');
    }
    return res;
  },
  err => {
    return Promise.reject(err);
  },
);

@injectable()
export class AxiosProvider implements Provider<any> {
  async provide() {
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    /* eslint-disable @typescript-eslint/no-unsafe-return */
    return await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res: any) => {
        return res.data;
      })
      .catch(err => {
        console.error(err);
      });
  }
}
