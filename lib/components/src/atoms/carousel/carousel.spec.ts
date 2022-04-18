import { newSpecPage } from '@stencil/core/testing';
import { Carousel } from './carousel';

describe('carousel', () => {
  it('should build', () => {
    expect(new Carousel()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await newSpecPage({
        components: [Carousel],
        html: '<carousel>' + '</carousel>',
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
