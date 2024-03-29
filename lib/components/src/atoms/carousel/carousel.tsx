import { Component, h, Fragment } from '@stencil/core';

@Component({
  tag: 'pro-carousel',
  styleUrl: 'carousel.scss',
  shadow: true,
})
export class Carousel {
  private getSrc() {
    const random = Math.ceil(Math.random() * (550 - 100) + 100);
    return `https://picsum.photos/200?random=${random}`;
  }

  render() {
    return (
      <Fragment>
        <h2 class="carousel-heading">Adventure</h2>
        <span class="carousel-container">
          {[...(Array(15) as Array<HTMLElement>)].map(
            () => (<pro-card imgSrc={this.getSrc()}></pro-card>) as HTMLElement,
          )}
        </span>
      </Fragment>
    ) as HTMLElement;
  }
}
