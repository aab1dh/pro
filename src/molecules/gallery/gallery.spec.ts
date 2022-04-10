import 'reflect-metadata';
import { newSpecPage } from '@stencil/core/testing';
import { ComponentGallery } from './gallery';

describe('my-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [ComponentGallery],
      html: '<component-gallery></component-gallery>',
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
