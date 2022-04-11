import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'pro-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {
  @Element() host: HTMLProButtonElement;

  @Prop() styles: { [key: string]: string };

  @Prop() name: string;

  private handleClick($event: Event) {
    console.log($event.target);
  }

  render() {
    return (
      <div
        innerHTML={this.name ? 'Like ' + this.name.split('=')[1] : this.host.innerHTML}
        style={this.styles}
        onClick={$event => this.handleClick($event)}
      ></div>
    ) as HTMLElement;
  }
}
