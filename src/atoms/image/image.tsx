import { Component, Fragment, h, State, Element, Prop } from '@stencil/core';



@Component({
  tag: 'pro-img',
  styleUrl: 'image.scss',
  shadow: true
})
export class Image {
 @Prop() height: number;
  @Prop() width: number;

  @State() showImg:boolean = false;

  @Element() host: HTMLProImgElement;

@Prop() src = `https://picsum.photos/200?random=1`;


  connectedCallback() {
      if(this.height && this.width) {
this.height = this.height ??= this.host.shadowRoot.querySelector('img').height;
this.width = this.width ??= this.host.shadowRoot.querySelector('img').width;
// console.log(this.height, this.width);

      }

  }


  private handleImgLoad() {
    // console.log($event);
    // console.log(this.host.shadowRoot.querySelector('img'))
    this.host.shadowRoot.querySelector('img').style.visibility = null;
    this.showImg = true;
  }

  render() {
    return (
      <Fragment>
        {this.showImg === false && <pro-skeleton></pro-skeleton>}
         <img innerHTML={this.host.innerHTML} style={{['visibility']: 'hidden'}} onLoad={() => this.handleImgLoad()} loading="eager" src={this.src} />
      </Fragment>
    );
  }
}
