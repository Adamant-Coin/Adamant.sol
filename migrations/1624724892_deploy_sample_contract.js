const Adamant = artifacts.require('Adamant');

export default function(deployer) {
  // Use deployer to state migration tasks.
  deployer.deploy(Adamant);
};
