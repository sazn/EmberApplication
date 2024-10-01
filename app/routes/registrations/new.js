import Route from '@ember/routing/route';

export default class RegistrationsNewRoute extends Route {
  model() {
    // Initialize a new registration model with default or empty values
    return {
      name: '',
      email: '',
      password: '',
      accountType: '',
      createdAt: '2023-10-01T06:37:43.8786295', // Default to today's date
    };
  }
}
