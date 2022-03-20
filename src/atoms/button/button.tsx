import { Component, Fragment, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'pro-button',
  styleUrl: 'button.scss',
  shadow: true,
})

export class Button {
  @Element() host: HTMLProButtonElement;

  @Prop() styles: { [key: string]: string; }




     // @Listen('click', { capture: false })
  private handleClick($event: Event) {
    console.log($event.target)
    // // this.open = !this.open;
    // console.dir(this.host.textContent)
    // console.log(this.styles)
  }



  render() {
    return (
      <Fragment>
        <div innerHTML={this.host.innerHTML} style={this.styles} onClick={($event) => this.handleClick($event)}></div>
      </Fragment>
    );
  }
}
