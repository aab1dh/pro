import { newE2EPage } from '@stencil/core/testing';

describe('my-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<component-gallery></component-gallery>');
    const element = await page.find('component-gallery');
    expect(element).not.toBeNull();
  });
});
