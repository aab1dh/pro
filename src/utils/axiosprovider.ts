import { fetch } from './fetch';
import { get, set } from './store';
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
      set('posts', await res.json());
      return get('posts');
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
