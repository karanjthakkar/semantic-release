const SemanticReleaseError = require('@semantic-release/error');

module.exports = (options, env) => {
  if (!options.githubToken) {
    throw new SemanticReleaseError('No github token specified.', 'ENOGHTOKEN');
  }
};
