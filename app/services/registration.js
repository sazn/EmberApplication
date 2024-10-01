import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class RegistrationService extends Service {
  @service store;
  @tracked registrations = [];

  async fetchRegistrations() {
    this.registrations = await this.store.findAll('registration');
  }

  async createRegistration(registrationData) {
    const registration = this.store.createRecord(
      'registration',
      registrationData,
    );
    await registration.save();
    this.registrations.push(registration);
  }

  async updateRegistration(registration) {
    await registration.save();
  }

  async deleteRegistration(registration) {
    await registration.destroyRecord();
    this.registrations.removeObject(registration);
  }
}
