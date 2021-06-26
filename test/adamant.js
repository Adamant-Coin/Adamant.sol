const Adamant = artifacts.require("Adamant");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Adamant", function (/* accounts */) {
  it("should assert true", async function () {
    await Adamant.deployed();
    return assert.isTrue(true);
  });
});
