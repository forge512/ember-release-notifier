import BasePoller from './base-poller';

export default BasePoller.extend({
  endpoint: 'version',

  handleResponse(responseData) {
    // send the release data to the service
    this.get('releaseNotifierService').compareRelease(responseData.version);
  }
});
