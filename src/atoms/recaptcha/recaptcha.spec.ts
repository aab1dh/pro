
import { newSpecPage } from '@stencil/core/testing';
import { Recaptcha } from './recaptcha';

describe('recaptcha', () => {
  it('should build', () => {
    expect(new Recaptcha()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await newSpecPage({
        components: [Recaptcha],
        html: '<recaptcha>'
          + '</recaptcha>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
