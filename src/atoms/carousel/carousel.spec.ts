import { TestWindow } from '@stencil/core/testing';
import { Carousel } from './carousel';

describe('carousel', () => {
  it('should build', () => {
    expect(new Carousel()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLCarouselElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Carousel],
        html: '<carousel>' 
          + '</carousel>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
