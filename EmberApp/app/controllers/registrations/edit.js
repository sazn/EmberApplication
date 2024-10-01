import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RegistrationsEditController extends Controller {
  // Inject the router service to handle transitions
  @service router;

  @action
  async updateRegistration(event) {
    event.preventDefault();

    try {
      console.log('model before saving:', this.model);

      // Save the updated model to the backend
      await this.model.save();

      // Notify the user about the successful update
      alert('Registration updated successfully!');

      // Transition to the 'registrations' route
      this.router.transitionTo('registrations');
    } catch (error) {
      console.error('Error updating registration:', error);
    }
  }

  // Action to set the name property on the model
  @action
  setName(value) {
    this.model.set('name', value); // Use model.set() to update the property
  }

  // Action to set the email property on the model
  @action
  setEmail(value) {
    this.model.set('email', value);
  }

  // Action to set the accountType property on the model
  @action
  setAccountType(value) {
    this.model.set('accountType', value);
  }
}