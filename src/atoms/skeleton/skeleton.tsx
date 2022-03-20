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
        <div class="skeleton">this is a skeleton</div>
      </Fragment>
    );
  }
}
