// app/routes/registrations/edit.js
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RegistrationsEditRoute extends Route {
  @service store; // Inject the store service

  model(params) {
    // let blogPost = this.store.peekRecord('registration', params.registration_id);
    // console.log('blogpost', blogPost);
    // Fetch the registration by ID
    return this.store
      .findRecord('registration', params.registration_id)
      .then((registration) => {
        console.log('Fetched Registration:', registration); // Log the returned registration object
        return registration; // Return the registration object
      });
  }
}
