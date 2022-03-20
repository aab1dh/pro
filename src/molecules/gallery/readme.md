# my-component



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description     | Type     | Default     |
| -------- | --------- | --------------- | -------- | ----------- |
| `first`  | `first`   | The first name  | `string` | `undefined` |
| `last`   | `last`    | The last name   | `string` | `undefined` |
| `middle` | `middle`  | The middle name | `string` | `undefined` |


## Dependencies

### Depends on

- [pro-carousel](../../atoms/carousel)

### Graph
```mermaid
graph TD;
  component-gallery --> pro-carousel
  pro-carousel --> pro-card
  pro-card --> pro-img
  pro-card --> pro-button
  pro-img --> pro-skeleton
  style component-gallery fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
