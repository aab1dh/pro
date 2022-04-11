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
      <div class="card-container">
        <pro-img src={this.imgSrc}></pro-img>

        <pro-button name={this.imgSrc}></pro-button>
      </div>
    ) as HTMLElement;
  }
}
