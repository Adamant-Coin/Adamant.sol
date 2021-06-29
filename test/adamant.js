const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const Adamant = artifacts.require("Adamant");
const AdamantV2 = artifacts.require('AdamantV2');

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Adamant Deployment", function () {
  it('Deployment should work', async () => {
    const instance = await Adamant.deployed();
    const value = await instance.name();
    console.log("🚀 ~ file: adamant.js ~ line 15 ~ it ~ value", value)
 
    assert.equal(value, 'Adamant');
  });

  it('Upgrade Deployment should work', async () => {
    const instance = await AdamantV2.deployed();
    const value = await instance.name();
    console.log("🚀 ~ file: adamant.js ~ line 15 ~ it ~ value v2", value)
 
    assert.equal(value, 'Adamant');
  });
});
