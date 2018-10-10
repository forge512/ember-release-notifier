import Service from '@ember/service';
import Evented from '@ember/object/evented';
// import { getOwner } from '@ember/application';
import parseRelease from '../utils/parse-release';

export default Service.extend(Evented, {
  _currentRelease: null,

  // init() {
  //   console.log('init service');
  //   this._super(...arguments);
  // },

  currentRelease(release) {
    this.set('_currentRelease', parseRelease(release));
  },

  compareRelease(release) {
    const fetchedRelease = parseRelease(release);
    const currentRelease = this.get('_currentRelease');

    // compare releaseVersions
    // if the same
        // compare gitShas
    // if different
        // is it an alpha/beta release?
            // did it go from alpha to beta (major release?)
                // this.trigger('newMajorRelease');
            // did the number after the alpha/beta increment? (minor)
                // this.trigger('newMinorRelease');
        // which version section is different
            // if section 3 (patch release)
                // this.trigger('newPatchRelease');
            // if section 2 (minor release)
                // this.trigger('newMinorRelease');
            // if section 1 (major release)
                // this.trigger('newMajorRelease');
  }
});

// _isFastBoot: computed(function() {
//     const fastboot = getOwner(this).lookup('service:fastboot');
//
//     return fastboot ? fastboot.get('isFastBoot') : false;
// }),
