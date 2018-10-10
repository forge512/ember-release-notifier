import BaseWebSocket from './base-web-socket';

export default BaseWebSocket.extend({
  socketUrl: '/my-socket',
  channel: 'releases',

  handleMessage(/* message */) {
    // send the release data to the service
    // this.get('releaseNotifierService').compareRelease(message.version);
  }
});


// NOTE: this post would be helpful here
// https://medium.com/@jonpitch/adding-a-new-build-notification-to-an-ember-application-c657211289f6
