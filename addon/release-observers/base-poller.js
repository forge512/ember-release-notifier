import EmberObject from '@ember/object';
import Evented from '@ember/object/evented';

export default EmberObject.extend(Evented, {
  // base_url: '', // optional - assume it's the url of the app

  // create a poller that uses Ember concurrancy to poller a url

  handleResponse() {
    // implement this function in the extended objects
  }

});
