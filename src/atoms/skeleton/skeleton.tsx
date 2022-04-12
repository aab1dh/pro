import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'pro-skeleton',
  styleUrl: 'skeleton.scss',
  shadow: true,
})
export class Skeleton {
  @Prop() height: number;
  @Prop() width: number;
  @Prop() position: string;
  @Prop() zIndex: number;
  render() {
    return (
      <div
        style={{
          width: `${this.width}px`,
          height: `${this.height}px`,
          position: `${this.position}`,
          zIndex: `${this.zIndex}`,
        }}
        class="skeleton"
      ></div>
    ) as HTMLElement;
  }
}
