// // app/controllers/registrations/new.js
// import Controller from '@ember/controller';
// import { action } from '@ember/object';
// import { service } from '@ember/service';

// export default class RegistrationsNewController extends Controller {
//   // // Injecting the Ember Data store
//   @service store;

//   // // Initialize properties for the form inputs
//   // // name = '';
//   // // email = '';
//   // // password = '';
//   // // accountType = '';
//   // // createdAt = new Date().toISOString().split('T')[0]; // Default to today's date

//   // // @action
//   // // async createRegistration(event) {
//   // //   event.preventDefault(); // Prevent the default form submission

//   // //   // Create a new registration record
//   // //   let newRegistration = this.store.createRecord('registration', {
//   // //     name: this.name,
//   // //     email: this.email,
//   // //     password: this.password,
//   // //     accountType: this.accountType,
//   // //     createdAt: new Date(this.createdAt), // Use the selected date
//   // //   });

//   // //   try {
//   // //     await newRegistration.save();
//   // //     // Redirect to the registrations list page using the router service
//   // //     this.router.transitionTo('registrations');
//   // //   } catch (error) {
//   // //     console.error('Error saving registration:', error);
//   // //   }
//   // // }

//   // @action
//   // async createRegistration(event) {
//   //   event.preventDefault(); // Prevent the default form submission

//   //   // Log the field values to ensure they are populated
//   //   console.log('Creating registration with:', {
//   //     name: this.name,
//   //     email: this.email,
//   //     password: this.password,
//   //     accountType: this.accountType,
//   //   });

//   //   // Ensure all fields have values before proceeding
//   //   if (!this.name || !this.email || !this.password || !this.accountType) {
//   //     alert('All fields are required.');
//   //     return;
//   //   }

//   //   // Create a new registration record with valid fields
//   //   let newRegistration = this.store.createRecord('registration', {
//   //     name: this.name,
//   //     email: this.email,
//   //     password: this.password,
//   //     accountType: this.accountType,
//   //     createdAt: new Date(), // Use the selected date
//   //   });

//   //   // try {
//   //   //   await newRegistration.save();
//   //   //   // Redirect to the registrations list page using the router service
//   //   //   this.router.transitionTo('registrations');
//   //   // } catch (error) {
//   //   //   console.error('Error saving registration:', error);
//   //   // }

//   //   try {
//   //     await newRegistration.save();
//   //   } catch (error) {
//   //     console.error('Error saving the registration:', error);
//   //     // Check if it's an adapter error
//   //     if (error.isAdapterError) {
//   //       console.error('Adapter-specific error:', error.errors);
//   //     } else {
//   //       console.error('General error:', error);
//   //     }
//   //   }
//   // }

//   // name = '';
//   // email = '';
//   // password = '';
//   // accountType = '';
//   // createdAt = '2024-09-30T11:03:23.0404743'; // Default to today's date

//   // @action
//   // async createRegistration(event) {
//   //   event.preventDefault(); // Prevent the default form submission

//   //   // Log the field values to ensure they are populated
//   //   console.log('Creating registration with:', {
//   //     name: this.name,
//   //     email: this.email,
//   //     password: this.password,
//   //     accountType: this.accountType,
//   //   });

//   //   // Ensure all fields have values before proceeding
//   //   // if (!this.name || !this.email || !this.password || !this.accountType) {
//   //   //   alert('All fields are required.');
//   //   //   return;
//   //   // }

//   //   // Create a new registration record
//   //   let newRegistration = this.store.createRecord('registration', {
//   //     name: 'Ram',
//   //     email: 'ram@team.com',
//   //     password: 'RamWsdf',
//   //     accountType: 'Fixed',
//   //     createdAt: '2024-09-30T11:03:23.0404743', // Use the selected date
//   //   });

//   //   try {
//   //     await newRegistration.save();
//   //     this.router.transitionTo('registrations');
//   //   } catch (error) {
//   //     console.error('Error saving registration:', error);
//   //   }
//   // }


//   name = '';
//   email = '';
//   password = '';
//   accountType = '';

//   @action
//   setName(event) {
//     this.name = event.target.value;
//   }

//   @action
//   setEmail(event) {
//     this.email = event.target.value;
//   }

//   @action
//   setPassword(event) {
//     this.password = event.target.value;
//   }

//   @action
//   setAccountType(event) {
//     this.accountType = event.target.value;
//   }

//   @action
//   async createRegistration(event) {
//     event.preventDefault();

//     console.log("this.model",this.model);
//     let servicerequest = this.store.createRecord('registration', this.model);
//     servicerequest.save()
//       .then (() => {
//       this.transitionToRoute('registrations');
//     });

//     // let newRegistration = this.store.createRecord('registration', {
//     //   name: this.name,
//     //   email: this.email,
//     //   password: this.password,
//     //   accountType: this.accountType,
//     //   createdAt: new Date(), // Set the created date to now
//     // });

//     // try {
//     //   await newRegistration.save();
//     //   this.router.transitionTo('registrations');
//     // } catch (error) {
//     //   console.error('Error saving registration:', error);
//     // }
//   }
// }


import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
export default class RegistrationsNewController extends Controller {
    @service store;

  @action
  updateField(field, event) {
    this.set(`model.${field}`, event.target.value);
  }

  @action
  async createRegistration(event) {
    event.preventDefault();

    console.log("this.model", this.model); // Ensure the model contains the expected values
    

    // Create a new record with the model data
    let newRegistration = this.store.createRecord('registration', {
      name: this.model.name,
      email: this.model.email,
      password: this.model.password,
      accountType: this.model.accountType,
      createdAt: new Date(), // Use the selected date
    });

    try {
      
      await newRegistration.save();
      this.transitionToRoute('registrations'); // Redirect after saving
    } catch (error) {
      console.error('Error saving registration:', error);
    }
  }
}