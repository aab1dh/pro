import { Component, h, Host } from '@stencil/core';
import { createRouter, Route } from 'stencil-router-v2';

const Router = createRouter();
let prefersDark: MediaQueryList;
if (typeof window === 'object') prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

toggleDarkTheme(prefersDark.matches);

// Add or remove the "dark" class based on if the media query matches
function toggleDarkTheme(shouldAdd: boolean) {
  window.addEventListener('DOMContentLoaded', () => {
    if (typeof window === 'object' && shouldAdd) document.body.classList?.toggle('dark', shouldAdd);
  });
}

@Component({
  tag: 'app-root',
})
export class AppRoot {
  render() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return (
      <Host>
        <Router.Switch>
          <Route path="/">
            <component-gallery></component-gallery>
          </Route>

          {/* <Route path={/^\/account/}>
            <app-account> </app-account>
          </Route> */}
        </Router.Switch>
      </Host>
    );
  }
}
