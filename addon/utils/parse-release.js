// Match 3 sections of 1 or more digits separated by a dot(.) (e.g. 1.1.123, 2018.09.03)
const RELEASE_REGEXP = /\d+[.]\d+[.]\d+/;

// Same as above but also checks for a hyphen followed by any number of lowercase letters and an
// optional period and digits (e.g. 0.0.1-alpha.0, 1.0.0-beta.14)
const PRE_RELEASE_REGEXP = /\d+[.]\d+[.]\d+-[a-z]*([.]\d+)?/;

// Match 8 lowercase letters and digits
// const GIT_SHA_REGEXP = /[a-z\d]{8}/;

/**
 * Uses the Regex constants above to match and separate the version string into it's various parts
 * @param  {[String]} release a release string (e.g. 0.0.0+abc123, 2018.09.03+cde456)
 * @return {[Object]}         an Object containing the separated parts and meta data or an error
 */
export default function parseRelease(release) {
  // split the release string at the plus(+)
  let releaseParts = release.split('+');

  // Check that the first part matches one of the valid version regexps
  if (!releaseParts[0].match(RELEASE_REGEXP) && !releaseParts[0].match(PRE_RELEASE_REGEXP)) {
    // TODO: decide if we should throw here or in the service
    return new Error(`${releaseParts[0]} does not appear to be a valid release version.`);
  }

  return {
    releaseVersion: releaseParts[0],
    gitSha: releaseParts[1],
    isPreRelease: releaseParts[0].match(PRE_RELEASE_REGEXP) !== null,
  };
}
