/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Component, h, State, Watch, Fragment } from '@stencil/core';
import { AxiosProvider } from '../../utils/axiosprovider';
@Component({
  tag: 'component-gallery',
  styleUrl: 'gallery.scss',
  shadow: false,
})
export class ComponentGallery {
  @State() title;
  // eslint-disable-next-line @stencil/no-unused-watch
  @Watch('title')
  watchStateHandler(newValue: boolean, oldValue: boolean) {
    console.log('Old value of title is: ', oldValue);
    console.log('The new value of title is: ', newValue[0]?.title);
    performance.mark('end');
    performance.measure('measure', 'start', 'end');
    console.log('Time to hydrate title', performance.getEntriesByType('measure'));
  }
  connectedCallback() {
    performance.mark('start');
  }

  async componentWillLoad() {
    // eslint-disable-next-line @typescript-eslint/await-thenable
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    this.title = await new AxiosProvider().provide();
  }
  render() {
    return (
      <Fragment>
        {/* <div>Hello, World! I'm {this.getText()}</div> */}
        {/* <pro-button>{this.open ? "On" : "Off"}</pro-button> */}
        {/* <pro-button styles={{['color']:'black', ['background']:'white'}}>Hello</pro-button> */}
        <h1>Hello {this.title ? this.title['0']?.title : ''}!</h1>
        {[...(Array(15) as Array<HTMLElement>)].map(() => (<pro-carousel></pro-carousel>) as HTMLElement)}
      </Fragment>
    ) as HTMLElement;
  }
}
