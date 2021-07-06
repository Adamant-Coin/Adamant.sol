const { admin } = require('@openzeppelin/truffle-upgrades');
const {
  BN,           // Big Number support
  constants,    // Common constants, like the zero address and largest integers
  expectEvent,  // Assertions for emitted events
  expectRevert, // Assertions for transactions that should fail
} = require('@openzeppelin/test-helpers');

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
    const value = await instance.balanceOf(proxyAdmin);

    const convertedValue = web3.utils.fromWei(value)
 
    assert.equal(convertedValue, 0);
  });

  it('Should return Total Supply ', async () => {
    const instance = await Adamant.deployed();
    const value = await instance.totalSupply();

    const convertedValue = web3.utils.fromWei(value)
 
    assert.equal(convertedValue, 1000);
  });

  it('Transfer should work', async () => {
    const instance = await Adamant.deployed();
    const value = await instance.transfer('0x54c965696745Aa8aD5e8655ea61F95f68d414711', 1);
    await expectEvent.inTransaction(value.tx, instance, 'Transfer')
  });

  it('Burn Transfer should work', async () => {
    const instance = await Adamant.deployed();
    const value = await instance.transfer('0x54c965696745Aa8aD5e8655ea61F95f68d414711', 1);
    await expectEvent.inTransaction(value.tx, instance, 'TransferBurn')
  });

});



