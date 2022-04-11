# app-root



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [component-gallery](./molecules/gallery)

### Graph
```mermaid
graph TD;
  app-root --> component-gallery
  component-gallery --> error-boundry
  component-gallery --> pro-carousel
  pro-carousel --> error-boundry
  pro-carousel --> pro-card
  pro-card --> error-boundry
  pro-card --> pro-img
  pro-card --> pro-button
  pro-img --> error-boundry
  pro-img --> pro-skeleton
  pro-skeleton --> error-boundry
  pro-button --> error-boundry
  style app-root fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
