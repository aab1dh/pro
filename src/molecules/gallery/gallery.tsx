/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Component, h, State, Watch } from '@stencil/core';
import { lazyInject } from '../../utils/ioc';
import { Provider } from '../../utils/axiosprovider';
@Component({
  tag: 'component-gallery',
  styleUrl: 'gallery.scss',
  shadow: false,
})
export class ComponentGallery {
  @lazyInject('axiosProvider') private readonly axiosProvider: Provider<string>;
  @State() title;
  // eslint-disable-next-line @stencil/no-unused-watch
  @Watch('title')
  watchStateHandler(newValue: boolean, oldValue: boolean) {
    console.log('The new value of title is: ', newValue, oldValue);
  }

  async componentWillLoad() {
    // eslint-disable-next-line @typescript-eslint/await-thenable
    this.title = await this.axiosProvider.provide();
  }
  render() {
    return (
      <error-boundry>
        {/* <div>Hello, World! I'm {this.getText()}</div> */}
        {/* <pro-button>{this.open ? "On" : "Off"}</pro-button> */}
        {/* <pro-button styles={{['color']:'black', ['background']:'white'}}>Hello</pro-button> */}
        <h1>Hello {this.title[0]?.title}!</h1>
        {[...(Array(40) as Array<HTMLElement>)].map(() => (<pro-carousel></pro-carousel>) as HTMLElement)}
      </error-boundry>
    ) as HTMLElement;
  }
}
