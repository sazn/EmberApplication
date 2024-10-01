import Route from '@ember/routing/route';

export default class ProductsRoute extends Route {
  async model() {
    console.log('Fetching products...');
    return this.store.findAll('product').catch((error) => {
      console.error('Error fetching products:', error);
    });
  }
}
