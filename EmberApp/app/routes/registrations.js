// app/routes/registrations.js
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RegistrationsRoute extends Route {
  @service store; // Inject the store service

  model() {
    // alert('Fetching');
    console.log(this.store); // Check if this.store is defined
    // return this.store.findAll('registration'); // Fetch all registrations from the API
    // return this.store.findAll('registration').catch((error) => {
    //   console.error('Error fetching products:', error);
    // });

    return this.store.findAll('registration').then((registration) => {
      // alert('test');
      console.log('Fetched Registration:', registration); // Log the returned registration object
      return registration; // Return the registration object
    });
  }
}
