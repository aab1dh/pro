import { Component, Fragment, h, State } from '@stencil/core';


@Component({
  tag: 'pro-carousel',
  styleUrl: 'carousel.scss',
  shadow: true
})
export class Carousel {

   @State() state: {
    cards: ["card1", "card2"]
  };

  getSrc() {
    const size = Math.ceil(Math.random() * (550 - 100) + 100);
    // const size = 300
    return `https://picsum.photos/${size}?random=1`
  }
src = 'https://picsum.photos/200?random=1';
  render() {
    return (
      <Fragment>
        <h2 class="carousel-heading">Adventure</h2>
      <span class="carousel-container">
      {[...Array(25)].map(() => <pro-card imgSrc={this.getSrc()}></pro-card>)}
      </span>
      </Fragment>
    );
  }
}
