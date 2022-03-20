// import { Component, Prop, h, State, Listen, Fragment } from '@stencil/core';
import { Component, Prop, h, State, Fragment } from '@stencil/core';
// import { format } from '../../utils/utils';

@Component({
  tag: 'component-gallery',
  styleUrl: 'gallery.scss',
  shadow: false,
})
export class ComponentGallery {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @State() state: {
    cards: ['card1', 'card2'];
  };

  // private getText(): string {
  //   return format(this.first, this.middle, this.last);
  // }

  render() {
    return (
      <Fragment>
        {/* <div>Hello, World! I'm {this.getText()}</div> */}
        {/* <pro-button>{this.open ? "On" : "Off"}</pro-button> */}
        {/* <pro-button styles={{['color']:'black', ['background']:'white'}}>Hello</pro-button> */}

        {[...Array(40)].map(() => (
          <pro-carousel></pro-carousel>
        ))}
      </Fragment>
    );
  }
}
