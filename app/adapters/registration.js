import DS from 'ember-data';
import ENV from 'client-application/config/environment';

export default DS.JSONAPIAdapter.extend({
  namespace: ENV.APP.namespace,
  host: ENV.APP.host,
});
