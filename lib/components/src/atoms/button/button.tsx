import { Component, h, Element, Prop, State, Fragment } from '@stencil/core';

@Component({
  tag: 'pro-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {
  @Element() host: HTMLProButtonElement;

  @Prop() styles: { [key: string]: string };

  @Prop() name: string;

  @State() showSkeleton = true;

  private handleClick($event: Event) {
    console.log($event.target);
  }

  // private handleBtnLoad() {
  //   // this.host.shadowRoot.querySelector('div').style.visibility = 'visible';
  //   this.showSkeleton = false;
  // }

  // componentWillLoad() {
  //   setTimeout(() => {
  //     this.handleBtnLoad();
  //   }, 0);
  // }

  render() {
    return (
      <Fragment>
        {<pro-skeleton height={30} width={200} position="absolute" zIndex={-1}></pro-skeleton>}
        {
          <div
            innerHTML={this.name ? 'Like ' + this.name.split('=')[1] : this.host.innerHTML}
            style={this.styles}
            onClick={$event => this.handleClick($event)}
          ></div>
        }
      </Fragment>
    ) as HTMLElement;
  }
}
