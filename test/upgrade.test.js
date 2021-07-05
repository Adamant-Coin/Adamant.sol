const AdamantV2 = artifacts.require('AdamantV2');

contract("Adamant Upgrade", function () {
  it('Upgrade Deployment should work', async () => {
    const instance = await AdamantV2.deployed();
    const value = await instance.name();
    console.log("🚀 ~ file: adamant.js ~ line 15 ~ it ~ value v2", value)
 
    assert.equal(value, 'Adamant');
  });
});