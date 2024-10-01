import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RegistrationsIndexRoute extends Route {
    @service store; // Inject the store service
  model() {
    return this.modelFor('registrations'); // Inherits model from parent route
  }

  // @action
  // async deleteRegistration(id) {
  //   let registration = await this.store.findRecord('registration', id);
  //   if (confirm(`Are you sure you want to delete ${registration.name}?`)) {
  //     await registration.destroyRecord();
  //     alert('Registration deleted successfully!');
  //   }
  // }
}
