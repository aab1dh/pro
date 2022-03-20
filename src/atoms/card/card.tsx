import { Component, Fragment, h, Prop } from '@stencil/core';

@Component({
  tag: 'pro-card',
  styleUrl: 'card.scss',
  shadow: true,
})
export class Card {
  @Prop() imgSrc: string;

  render() {
    return (
      <Fragment>
        <div class="card-container">
          <pro-img src={this.imgSrc}></pro-img>

          <pro-button>OK</pro-button>
        </div>
      </Fragment>
    );
  }
}
