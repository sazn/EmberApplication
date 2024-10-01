import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class RegistrationSerializer extends JSONAPISerializer {

      // Prevent Ember Data from dasherizing attribute names
  keyForAttribute(attr) {
    return attr;
  }
  
    // If you need to customize the serialization, override methods here
  serialize(snapshot, options) {
    const json = super.serialize(snapshot, options);

    // Optionally customize the JSON format
    // For example, if you want to change the root key
    // json.data.type = 'registration'; // Customize the type if needed

    return json;
  }
}
