const MetaCoin = artifacts.require("./MetaCoin.sol");

contract("MetaCoin", accounts => {
  it("should store the string 'Hey there!'", async () => {
    const metaCoin = await MetaCoin.deployed();

    // Set myString to "Hey there!"
    await metaCoin.set("Hey there!", { from: accounts[0] });

    // Get myString from public variable getter
    const storedString = await metaCoin.myString.call();

    assert.equal(storedString, "Hey there!", "The string was not stored");
  });

  it("should store red coin 10000 and green coin 5000.", async () => {
    const metaCoin = await MetaCoin.deployed();

    await metaCoin.metaCoin({ from: accounts[0] });

    const redCoin = await metaCoin.getRedCoin({ from: accounts[0] });
    assert.equal(redCoin, 10000, "The coin was not stored");
    
    const greenCoin = await metaCoin.getGreenCoin({ from: accounts[0] });
    assert.equal(greenCoin, 5000, "The coin was not stored");

    await metaCoin.sendRed(account[1], 1000, { from: account[0]});
    const redCoin0 = await metaCoin.getRedCoin({ from: accounts[0] });
    const redCoin1 = await metaCoin.getRedCoin({ from: accounts[1] });
    assert.equal(redCoin0, 9000, "The coin was not sent");
    assert.equal(redCoin1, 1000, "The coin was not sent");
  });
});