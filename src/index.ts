import 'reflect-metadata';
export { Components, JSX } from './components';

let prefersDark: MediaQueryList;
if (typeof window === 'object') prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

toggleDarkTheme(prefersDark.matches);

// Add or remove the "dark" class based on if the media query matches
function toggleDarkTheme(shouldAdd: boolean) {
  window.addEventListener('DOMContentLoaded', () => {
    if (typeof window === 'object' && shouldAdd) document.body.classList?.toggle('dark', shouldAdd);
  });
}
