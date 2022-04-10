# my-component



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [error-boundry](../../utils)
- [pro-carousel](../../atoms/carousel)

### Graph
```mermaid
graph TD;
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
  style component-gallery fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
