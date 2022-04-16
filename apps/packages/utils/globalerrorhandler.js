const errorHandler = e => {
  console.error('Error occurred: ' + e.error.message);
  return false;
};
export const registerGlobalErrorHandler = () => {
  console.log('Error handler registered');
  window.addEventListener('error', errorHandler, { passive: true });
};
