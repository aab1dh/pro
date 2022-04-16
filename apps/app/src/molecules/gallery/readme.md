# my-component



<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [app-root](../..)

### Depends on

- [pro-seo](../../../../../packages/utils)
- [pro-carousel](../../atoms/carousel)

### Graph
```mermaid
graph TD;
  component-gallery --> pro-seo
  component-gallery --> pro-carousel
  pro-carousel --> pro-card
  pro-card --> pro-img
  pro-card --> pro-button
  pro-img --> pro-skeleton
  pro-button --> pro-skeleton
  app-root --> component-gallery
  style component-gallery fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
