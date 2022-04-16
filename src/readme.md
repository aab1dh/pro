# app-root



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [error-boundry](utils)
- [component-gallery](./molecules/gallery)

### Graph
```mermaid
graph TD;
  app-root --> error-boundry
  app-root --> component-gallery
  component-gallery --> pro-seo
  component-gallery --> pro-carousel
  pro-carousel --> pro-card
  pro-card --> pro-img
  pro-card --> pro-button
  pro-img --> pro-skeleton
  pro-button --> pro-skeleton
  style app-root fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
