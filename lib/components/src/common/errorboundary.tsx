import { Component, State, h } from '@stencil/core';

// my-error-boundry.tsx
@Component({ tag: 'error-boundry' })
export class MyErrorBoundry {
  @State() error: any;
  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.error = error;
    console.error(error, errorInfo);
  }
  render() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    if (this.error) return <div>There was an error</div>;
    // also need to prevent children from being rendered
  }
}
