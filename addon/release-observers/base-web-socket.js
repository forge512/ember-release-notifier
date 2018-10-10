import EmberObject from '@ember/object';
import Evented from '@ember/object/evented';

export default EmberObject.extend(Evented, {
  socketUrl: '/my-socket',
  channel: 'releases',

  // set up some socket magic here. Open a socket and subscribe to a channel

  handleMessage: function(/* message */) {
    // implement this function in the extended objects
  }
});
