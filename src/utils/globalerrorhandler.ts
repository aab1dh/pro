// const { onerror: originalOnError } = window;
/* eslint-disable @typescript-eslint/restrict-plus-operands */
const errorHandler = e => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  console.error('Error occurred: ' + e.error.message);
  return false;
};

export const registerGlobalErrorHandler = () => {
  console.log('Error handler registered');
  window.addEventListener('error', errorHandler, { passive: true });
};
