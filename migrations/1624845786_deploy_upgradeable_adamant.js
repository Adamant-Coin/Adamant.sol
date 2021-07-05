// migrations/1624845786_deploy_upgradeable_adamant.js
const { deployProxy, admin } = require('@openzeppelin/truffle-upgrades');

const Adamant = artifacts.require('Adamant');

module.exports = async function (deployer) {
  const instance = await deployProxy(
    Adamant, 
    [
      '0x518B646e4197BC002b1d5329C4F36D61aB415Ce2',
      'Adamant',
      'ADMC',
      9,
      5
    ], { deployer });

  console.log('Deployed', instance.address);

  const transferOwnership = await admin.getInstance().address;
  console.log("🚀 ~ file: 1624845786_deploy_upgradeable_adamant.js ~ line 20 ~ transferOwnership", transferOwnership)
};