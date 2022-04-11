import { Component, h } from '@stencil/core';

@Component({
  tag: 'pro-skeleton',
  styleUrl: 'skeleton.scss',
  shadow: true,
})
export class Skeleton {
  render() {
    return (<div style={{ width: '200px', height: '200px' }} class="skeleton"></div>) as HTMLElement;
  }
}
