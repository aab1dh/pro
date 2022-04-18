/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import Helmet from '@stencil/helmet';
import { Component, Prop, h } from '@stencil/core';

// my-error-boundry.tsx
@Component({ tag: 'pro-seo' })
export class SEO {
  @Prop() seoTitle: string;
  @Prop() seoDescription: string;
  render() {
    <Helmet>
      <title>{this.seoTitle} </title>
      <meta name="description" content={this.seoDescription} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="..." />
      <meta name="twitter:creator" content="..." />
      <meta name="twitter:title" content={this.seoTitle} />
      <meta name="twitter:description" content={this.seoDescription} />
      <meta name="twitter:image" content="..." />

      <meta property="fb:page_id" content="..." />
      <meta property="og:url" content="..." />
      <meta property="og:type" content="..." />
      <meta property="og:title" content="..." />

      <meta property="og:image" content="..." />
      <meta property="og:description" content="..." />
      <meta property="og:site_name" content="..." />
      <meta property="article:publisher" content="..." />
      <meta property="og:locale" content="..." />
    </Helmet>;
  }
}
