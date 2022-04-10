# pro-card



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type     | Default     |
| -------- | --------- | ----------- | -------- | ----------- |
| `imgSrc` | `img-src` |             | `string` | `undefined` |


## Dependencies

### Used by

 - [pro-carousel](../carousel)

### Depends on

- [error-boundry](../../utils)
- [pro-img](../image)
- [pro-button](../button)

### Graph
```mermaid
graph TD;
  pro-card --> error-boundry
  pro-card --> pro-img
  pro-card --> pro-button
  pro-img --> error-boundry
  pro-img --> pro-skeleton
  pro-skeleton --> error-boundry
  pro-button --> error-boundry
  pro-carousel --> pro-card
  style pro-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
