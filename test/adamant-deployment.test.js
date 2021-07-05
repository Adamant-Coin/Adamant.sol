const { deployProxy, admin } = require('@openzeppelin/truffle-upgrades');
const { accounts , defaultSender} = require('@openzeppelin/test-environment');
const [ owner ] = accounts;

const Adamant = artifacts.require("Adamant");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Adamant Deployment", function () {
  it('Deployment should work', async () => {
    const instance = await Adamant.deployed();
    const value = await instance.name();
    assert.equal(value, 'Adamant');
  });

  it('Token Symbol should be ADMC', async () => {
    const instance = await Adamant.deployed();
    const value = await instance.symbol();
 
    assert.equal(value, 'ADMC');
  });

  it('should return balance ', async () => {
    const instance = await Adamant.deployed();
    const proxyAdmin = (await admin.getInstance()).address
    console.log("🚀 ~ file: adamant.js ~ line 28 ~ it ~ proxyAdmin", proxyAdmin)
    console.log("🚀 ~ file: adamant-deployment.test.js ~ line 4 ~ owner", owner)
    console.log("🚀 ~ file: adamant-deployment.test.js ~ line 4 ~ defaultSender", defaultSender)
    const value = await instance.balanceOf(proxyAdmin);

    const BN = web3.utils.fromWei(value)
    console.log("🚀 ~ file: adamant.js ~ line 33 ~ it ~ realValue", BN)
 
    // assert.equal(value, 1000000000000);
  });

});



