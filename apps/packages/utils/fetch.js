import { Build } from '@stencil/core';
const { fetch: originalFetch } = window;
export const fetch = (window.fetch = async (...args) => {
  const [resource, config, timeout = 8000] = args;
  const controller = new AbortController();
  let timeoutId;
  if (Build.isBrowser)
    timeoutId = setTimeout(() => controller.abort(), timeout);
  const response = await originalFetch(resource, Object.assign(Object.assign({}, config), { signal: controller.signal }));
  if (!response.ok && response.status === 404) {
    return Promise.reject(response);
  }
  if (Build.isBrowser)
    clearTimeout(timeoutId);
  return response;
});
