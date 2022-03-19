import { TestWindow } from '@stencil/core/testing';
import { Recaptcha } from './recaptcha';

describe('recaptcha', () => {
  it('should build', () => {
    expect(new Recaptcha()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRecaptchaElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
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
