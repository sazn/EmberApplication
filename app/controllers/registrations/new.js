import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class RegistrationsNewController extends Controller {
  @service('router') router;
  @service store;

  @action
  createRegistration(event) {
    event.preventDefault();

    // Create a new record with the model data
    this.store.createRecord('registration', {
      name: this.model.name,
      email: this.model.email,
      password: this.model.password,
      accountType: this.model.accountType,
      createdAt: new Date(), // Use the current date
    })
      .save()
      .then(() => {
        alert("sucessfully saved");
        // Redirect to the registrations index after successful creation
        this.transitionToRoute('registrations');
      })
      .catch((error) => {
        console.error('Error creating registration:', error);
      });
  }

  @action
  updateField(field, event) {
    // Update the model with the input field values
    this.set(`model.${field}`, event.target.value);
  }
}




    //    var jason = this.store.createRecord('person', { 
    //      name: 'Jason' 
    //    });
    //   Ember.run.later(function(){
    //   httpRespond('post', '/people', JSON.stringify({
    //     person: {
    //       id: 3,
    //       name: 'Jason'
    //     }
    //   }), 400); // change the 400 status code to 200
    // }, 15);
      
    //   jason.save();
    
  