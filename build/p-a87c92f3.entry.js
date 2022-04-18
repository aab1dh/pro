import { r as registerInstance, h } from './p-c03ea8d2.js';

const MyErrorBoundry = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidCatch(error, errorInfo) {
    this.error = error;
    console.error(error, errorInfo);
  }
  render() {
    if (this.error)
      return h("div", null, "There was an error");
  }
};

export { MyErrorBoundry as error_boundry };
