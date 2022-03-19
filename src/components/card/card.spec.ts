import { TestWindow } from '@stencil/core/testing';
import { Card } from './card';

describe('card', () => {
  it('should build', () => {
    expect(new Card()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLCardElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Card],
        html: '<card>' 
          + '</card>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
