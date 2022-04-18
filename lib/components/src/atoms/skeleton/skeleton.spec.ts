import { newSpecPage } from '@stencil/core/testing';
import { Skeleton } from './skeleton';

describe('skeleton', () => {
  it('should build', () => {
    expect(new Skeleton()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await newSpecPage({
        components: [Skeleton],
        html: '<skeleton>' + '</skeleton>',
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
