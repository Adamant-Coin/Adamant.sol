// migrations/1624845786_deploy_upgradeable_adamant.js
const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const Adamant = artifacts.require('Adamant');

module.exports = async function (deployer) {
  const instance = await deployProxy(Adamant, [42], { deployer });
  console.log('Deployed', instance.address);
};