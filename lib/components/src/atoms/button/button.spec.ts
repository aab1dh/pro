import { newSpecPage } from '@stencil/core/testing';

import { Button } from './button';

describe('button', () => {
  it('should build', () => {
    expect(new Button()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await newSpecPage({
        components: [Button],
        html: '<pro-button>' + '</pro-button>',
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
