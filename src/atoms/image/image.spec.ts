import { TestWindow } from '@stencil/core/testing';
import { Image } from './image';

describe('image', () => {
  it('should build', () => {
    expect(new Image()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLImageElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Image],
        html: '<image>' 
          + '</image>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
