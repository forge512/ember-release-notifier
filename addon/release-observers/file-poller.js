import BasePoller from './base-poller';

export default BasePoller.extend({
  filePath: '/', // optional assume it's at the root of the base_url https://example.com/version.txt
  fileName: 'version.txt',
  handleResponse(/* file */) {
    // parse the file
    // send the release data to the service
    // this.get('releaseNotifierService').compareRelease(file.version);
  }
});
