import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RegistrationsRoute extends Route {
  //   @service registrationService;
  @service store; // Inject the store service

  //   async model() {
  //     await this.registrationService.fetchRegistrations();
  //   }
  model() {
    return this.store.findAll('registration'); // Fetch all registrations from the API
  }
}
