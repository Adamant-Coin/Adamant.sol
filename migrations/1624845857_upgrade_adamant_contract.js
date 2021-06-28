// migrations/MM_upgrade_box_contract.js
import { upgradeProxy } from '@openzeppelin/truffle-upgrades';

const Adamant = artifacts.require('Adamant');
const AdamantV2 = artifacts.require('AdamantV2');

export default async function (deployer) {
  const existing = await Adamant.deployed();
  const instance = await upgradeProxy(existing.address, AdamantV2, { deployer });
  console.log("Upgraded", instance.address);
};