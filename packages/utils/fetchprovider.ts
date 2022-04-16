import { fetch } from './fetch';
import { get, set } from './store';
export interface Provider<T> {
  get(): T;
}

export class FetchProvider implements Provider<any> {
  async get() {
    const controller = new AbortController();

    // 5 second timeout:
    const timeoutId = setTimeout(() => controller.abort(), 5000);
    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    /* eslint-disable @typescript-eslint/no-unsafe-return */
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
      const res = await fetch(url, { signal: controller.signal });
      set('posts', await res.json());
      clearTimeout(timeoutId);
      return get('posts');
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
