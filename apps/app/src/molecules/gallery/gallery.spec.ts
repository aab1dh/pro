import { newSpecPage } from '@stencil/core/testing';
import { ComponentGallery } from './gallery';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
global.fetch = jest.fn(
  async () =>
    await Promise.resolve({
      json: () =>
        Promise.resolve({
          gallery: {
            title: 'Gallery',
            seoTitle: 'Gallery',
            seoDescription: 'This is Gallery demo',
          },
        }),
    }),
) as any;

describe('my-component', () => {
  it('renders', async () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { root } = await newSpecPage({
      components: [ComponentGallery],
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      html: `<component-gallery></component-gallery>`,
    });
    expect(root).toBeTruthy();
    // expect(root).toEqualHtml(`
    //   <my-component>
    //     <mock:shadow-root>
    //       <div>
    //         Hello, World! I'm
    //       </div>
    //     </mock:shadow-root>
    //   </my-component>
    // `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [ComponentGallery],
      html: `<component-gallery first="Stencil" last="'Don't call me a framework' JS"></component-gallery>`,
    });

    expect(root).toBeTruthy();

    // expect(root).toEqualHtml(`
    //   <my-component first="Stencil" last="'Don't call me a framework' JS">
    //     <mock:shadow-root>
    //       <div>
    //         Hello, World! I'm Stencil 'Don't call me a framework' JS
    //       </div>
    //     </mock:shadow-root>
    //   </my-component>
    // `);
  });
});
