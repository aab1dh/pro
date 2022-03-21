import { Component, Fragment, h, State, Element, Prop } from '@stencil/core';

@Component({
  tag: 'pro-img',
  styleUrl: 'image.scss',
  shadow: true,
})
export class Image {
  @Prop() height: number;
  @Prop() width: number;

  @State() showImg = false;

  @Element() host: HTMLProImgElement;

  @Prop() src = `https://picsum.photos/200?random=1`;

  connectedCallback() {
    if (this.height && this.width) {
      this.height = this.height ??= this.host.shadowRoot.querySelector('img').height;
      this.width = this.width ??= this.host.shadowRoot.querySelector('img').width;
    }
  }

  private handleImgLoad() {
    this.host.shadowRoot.querySelector('img').style.visibility = null;
    this.showImg = true;
  }

  render() {
    return (
      <Fragment>
        {this.showImg === false && <pro-skeleton></pro-skeleton>}
        <img
          innerHTML={this.host.innerHTML}
          style={{ ['visibility']: 'hidden' }}
          onLoad={() => this.handleImgLoad()}
          loading="lazy"
          src={this.src}
          width={this.width}
          height={this.height}
        />
      </Fragment>
    ) as HTMLElement;
  }
}
