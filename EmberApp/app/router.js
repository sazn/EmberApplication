import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  this.route('registrations', function () {
    this.route('new'); // Nested route for creating a new registration
    this.route('edit', { path: '/edit/:registration_id' }); // Edit route
  });
  this.route('products');
});

export default Router;
