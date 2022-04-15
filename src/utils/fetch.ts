import { Build } from '@stencil/core';
const { fetch: originalFetch } = window;
export const fetch = (window.fetch = async (...args) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [resource, config, timeout = 8000] = args;
  const controller = new AbortController();
  let timeoutId;
  if (Build.isBrowser) timeoutId = setTimeout(() => controller.abort(), timeout);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const response = await originalFetch(resource, { ...config, signal: controller.signal });

  // // request interceptor starts
  // resource = 'https://jsonplaceholder.typicode.com/todos/2';
  //   // request interceptor ends

  // Error handling
  if (!response.ok && response.status === 404) {
    // 404 error handling
    return Promise.reject(response);
  }

  // // response interceptor
  // const json = () =>
  //   response
  //     .clone()
  //     .json()
  //     // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  //     .then(data => ({ ...data, title: `Intercepted` }));

  // response.json = json;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  if (Build.isBrowser) clearTimeout(timeoutId);
  return response;
});
