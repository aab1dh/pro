import { Component, Fragment, h } from '@stencil/core';

@Component({
  tag: 'pro-skeleton',
  styleUrl: 'skeleton.scss',
  shadow: true,
})
export class Skeleton {
  render() {
    return (
      <Fragment>
        <div class="skeleton"></div>
      </Fragment>
    ) as HTMLElement;
  }
}
