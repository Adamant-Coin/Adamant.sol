// migrations/1624845786_deploy_upgradeable_adamant.js
const { deployProxy, admin } = require('@openzeppelin/truffle-upgrades');

const Adamant = artifacts.require('Adamant');

module.exports = async function (deployer) {
  // const newAdmin = (await admin.getInstance()).address
  // console.log("🚀 ~ file: 1625709579_change_proxy.js ~ line 8 ~ newAdmin", newAdmin)
};