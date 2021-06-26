const Adamant = artifacts.require('Adamant');

module.exports = function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(Adamant);
};
