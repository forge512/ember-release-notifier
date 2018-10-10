import Component from '@ember/component';
import layout from '../templates/components/release-notifier';
import { inject } from '@ember/service';

export default Component.extend({
  layout,
  releaseNotifier: inject(),
});
