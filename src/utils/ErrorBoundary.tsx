/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @stencil/own-methods-must-be-private */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Component, State, h } from '@stencil/core';

// my-error-boundry.tsx
@Component({ tag: 'error-boundry' })
export class MyErrorBoundry {
  @State() error: any;
  componentDidCatch(error, errorInfo) {
    this.error = error;
    console.error(error, errorInfo);
  }
  render() {
    if (this.error) return <div>There was an error</div>;
    // also need to prevent children from being rendered
  }
}
