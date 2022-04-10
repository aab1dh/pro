import { Container } from 'inversify';
import 'reflect-metadata';
import getDecorators from 'inversify-inject-decorators';
import { Provider, AxiosProvider } from './axiosprovider';
const container = new Container();
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
container.bind<Provider<any>>('axiosProvider').to(AxiosProvider);

const { lazyInject } = getDecorators(container);

export { lazyInject };
