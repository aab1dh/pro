import { createStore } from '@stencil/store';
const store = createStore({
  error: null,
});
export const get = prop => store.get(prop);
export const set = (prop, value) => store.set(prop, value);
export default store.state;
