// app/controllers/registrations/index.js
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service'; // Import the service decorator

export default class RegistrationsIndexController extends Controller {
  @service store; // Inject the store service

  @action
  async deleteRegistration(registrationId) {
    alert("deletion");
    console.log("ID", registrationId);
    try {
      // Find the record to delete
      let registration = await this.store.findRecord('registration', registrationId, { backgroundReload: false });
      await registration.destroyRecord();
      alert('Registration deleted successfully');
    } catch (error) {
      console.error('Error deleting registration:', error);
    }
  }
}