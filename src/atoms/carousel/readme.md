# pro-carousel



<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [component-gallery](../../molecules/gallery)

### Depends on

- [error-boundry](../../utils)
- [pro-card](../card)

### Graph
```mermaid
graph TD;
  pro-carousel --> error-boundry
  pro-carousel --> pro-card
  pro-card --> error-boundry
  pro-card --> pro-img
  pro-card --> pro-button
  pro-img --> error-boundry
  pro-img --> pro-skeleton
  pro-skeleton --> error-boundry
  pro-button --> error-boundry
  component-gallery --> pro-carousel
  style pro-carousel fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
