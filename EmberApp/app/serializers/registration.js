// import JSONAPISerializer from '@ember-data/serializer/json-api';

// export default class RegistrationSerializer extends JSONAPISerializer {

// normalizeResponse(store, primaryModelClass, payload, id, requestType) {
//   // Ensure payload has a data property
//   if (Array.isArray(payload.data)) {
//     console.log('payload.data', payload.data);
//     // alert(20);

//     // Return a well-structured JSON API document
//     return {
//       data: payload.data.map((item) => ({
//         id: item.id,
//         type: item.type,
//         attributes: item.attributes,
//       })),
//     };
//   } else if (typeof payload.data === 'object') {
//     // Handle case when payload.data is a single object
//     return {
//       data: {
//         id: payload.data.id,
//         type: payload.data.type,
//         attributes: payload.data.attributes,
//       },
//     };
//   } else {
//     // Invalid format; throw an error or handle appropriately
//     throw new Error('Invalid JSON API response format');
//   }
// }

// keyForAttribute(attr) {
//   // This prevents Ember Data from converting camelCase to kebab-case (dasherizing)
//   return attr;
// }

// normalizeResponse(store, primaryModelClass, payload, id, requestType) {
//   console.log('Full payload:', payload); // Log the payload

//   // Continue processing
//   if (Array.isArray(payload.data)) {
//     return {
//       data: payload.data.map((item) => ({
//         id: item.id,
//         type: item.type,
//         attributes: item.attributes,
//       })),
//     };
//   } else if (typeof payload.data === 'object') {
//     return {
//       data: {
//         id: payload.data.id,
//         type: payload.data.type,
//         attributes: payload.data.attributes,
//       },
//     };
//   } else {
//     throw new Error('Invalid JSON API response format');
//   }
// }

// }

// import JSONAPISerializer from '@ember-data/serializer/json-api';

// export default class RegistrationSerializer extends JSONAPISerializer {
//   // Prevent Ember Data from dasherizing the attribute keys
//   keyForAttribute(key) {
//     return key;
//   }

//   // Customize the serialization for `createRecord` or `updateRecord`
//   serialize(snapshot, options) {
//     let json = {
//       data: {
//         type: snapshot.modelName,
//         attributes: {
//           name: snapshot.attr('name'),
//           email: snapshot.attr('email'),
//           password: snapshot.attr('password'),
//           accountType: snapshot.attr('accountType')
//           // createdAt: snapshot.attr('createdAt'),
//         },
//       },
//     };

//     return json;
//   }
// }

import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class RegistrationSerializer extends JSONAPISerializer {
  // Prevent Ember Data from dasherizing attribute names
  keyForAttribute(attr) {
    return attr;
  }

  // Ensure the correct structure for sending the update request
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    console.log('Pay load', payload);
    // Ensure payload has a 'data' property
    if (Array.isArray(payload.data)) {
      var result = {
        data: payload.data.map((item) => ({
          id: item.id,
          type: item.type,
          attributes: item.attributes,
        })),
      };
      return result;
    } else if (typeof payload.data === 'object') {
      var result = {
        data: {
          id: payload.data.id,
          type: payload.data.type,
          attributes: payload.data.attributes,
        },
      };
      return result;
    } else if (requestType == 'findRecord') {
      var result = {
        data: {
          id: id,
          type: 'registration',
          attributes: payload,
        },
      };
      console.log('FindRecord', result);
      return result;
    } else {
      throw new Error('Invalid JSON API response format');
    }
  }
}
