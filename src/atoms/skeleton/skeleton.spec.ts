import { TestWindow } from '@stencil/core/testing';
import { Skeleton } from './skeleton';

describe('skeleton', () => {
  it('should build', () => {
    expect(new Skeleton()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLSkeletonElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Skeleton],
        html: '<skeleton>' 
          + '</skeleton>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
