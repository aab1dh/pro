import { newSpecPage } from '@stencil/core/testing';
import { Image } from './image';

describe('image', () => {
  it('should build', () => {
    expect(new Image()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await newSpecPage({
        components: [Image],
        html: '<pro-image>' + '</pro-image>',
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
