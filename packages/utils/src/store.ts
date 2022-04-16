import { createStore } from "@stencil/store";

export const store = createStore({
  error: null,
});

// store.onChange('posts', value => {
//   // store.state.squaredClicks = value ** 2;
//   console.log(value);
// });

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
export const get = prop => store.get(prop);
export const set = (prop, value) => store.set(prop, value);
export default store.state;
