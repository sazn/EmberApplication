import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class RegistrationFormComponent extends Component {
  @service registrationService;

  @action
  async createRegistration(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const registrationData = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      accountType: formData.get('accountType'),
      createdAt: new Date(),
    };

    await this.registrationService.createRegistration(registrationData);
    event.target.reset();
  }

  @action
  async updateRegistration(registration) {
    await this.registrationService.updateRegistration(registration);
  }

  @action
  async deleteRegistration(registration) {
    await this.registrationService.deleteRegistration(registration);
  }
}
