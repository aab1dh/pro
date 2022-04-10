import { Component, h } from '@stencil/core';

@Component({
  tag: 'pro-skeleton',
  styleUrl: 'skeleton.scss',
  shadow: true,
})
export class Skeleton {
  render() {
    return (
      <error-boundry>
        <div class="skeleton"></div>
      </error-boundry>
    ) as HTMLElement;
  }
}
