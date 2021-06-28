import { deployProxy } from '@openzeppelin/truffle-upgrades';

const Adamant = artifacts.require("Adamant");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Adamant deployer", function (/* accounts */) {
  it('deployment works', async () => {
    const instance = await deployProxy(Adamant, [42]);
    assert.equal(instance.address.toString(), '42');
  });
});
