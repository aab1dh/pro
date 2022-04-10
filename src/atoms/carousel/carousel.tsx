import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'pro-carousel',
  styleUrl: 'carousel.scss',
  shadow: true,
})
export class Carousel {
  @State() state: {
    cards: ['card1', 'card2'];
  };

  private getSrc() {
    const random = Math.ceil(Math.random() * (550 - 100) + 100);
    // const size = 300
    // return `https://picsum.photos/${size}?random=1`
    return `https://picsum.photos/200?random=${random}`;
  }

  render() {
    return (
      <error-boundry>
        <h2 class="carousel-heading">Adventure</h2>
        <span class="carousel-container">
          {[...(Array(25) as Array<HTMLElement>)].map(
            () => (<pro-card imgSrc={this.getSrc()}></pro-card>) as HTMLElement,
          )}
        </span>
      </error-boundry>
    ) as HTMLElement;
  }
}
