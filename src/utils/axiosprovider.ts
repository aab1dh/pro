import { fetch } from './fetch';
export interface Provider<T> {
  provide(): T;
}

export class AxiosProvider implements Provider<any> {
  async provide() {
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    /* eslint-disable @typescript-eslint/no-unsafe-return */
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
      const res = await fetch(url);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }
}
