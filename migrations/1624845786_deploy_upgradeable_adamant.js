// migrations/1624845786_deploy_upgradeable_adamant.js
import { deployProxy } from '@openzeppelin/truffle-upgrades';

const Adamant = artifacts.require('Adamant');

export default async function (deployer) {
  const instance = await deployProxy(Adamant, [42], { deployer });
  console.log('Deployed', instance.address);
};