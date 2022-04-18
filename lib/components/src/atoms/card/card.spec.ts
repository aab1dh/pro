import { newSpecPage } from '@stencil/core/testing';
import { Card } from './card';

describe('card', () => {
  it('should build', () => {
    expect(new Card()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await newSpecPage({
        components: [Card],
        html: '<card>' + '</card>',
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
