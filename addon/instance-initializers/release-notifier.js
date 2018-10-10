import { assert } from '@ember/debug';
import { isEmpty } from '@ember/utils';

export function initialize(appInstance) {
  const ENV = appInstance.resolveRegistration('config:environment');

  // ensure the local app has a release-observer
  assert(
    'No release observer was found! Run `ember g release-observer application` to create one.',
    !isEmpty(appInstance.lookup('release-observer:application'))
  );

  // inject the service into the releaseObserver
  appInstance.inject('release-observer:application', 'releaseNotifier', 'service:release-notifier');

  // init the service and set the current release
  appInstance.lookup('service:release-notifier').currentRelease(ENV.APP.version);
}

export default { initialize };
