import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'pro-card',
  styleUrl: 'card.scss',
  shadow: true,
})
export class Card {
  @Prop() imgSrc: string;

  render() {
    return (
      <error-boundry>
        <div class="card-container">
          <pro-img src={this.imgSrc}></pro-img>

          <pro-button>Like</pro-button>
        </div>
      </error-boundry>
    ) as HTMLElement;
  }
}
