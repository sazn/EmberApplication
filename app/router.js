import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function () {
  this.route('registrations', function () {
    this.route('new');
  });
  this.route('registration', function () {});
});

export default Router;
