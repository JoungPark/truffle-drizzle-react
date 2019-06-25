pragma solidity >=0.4.21 <0.6.0;

contract MetaCoin {
    string public myString = "Hello World";

    function set(string memory x) public {
        myString = x;
    }

	struct coinWallet {
        uint redCoin;
        uint greenCoin;
	}
	mapping (address => coinWallet) public balances;

	function metaCoin() public {
		balances[msg.sender].redCoin = 10000;
		balances[msg.sender].greenCoin = 5000;
	}

	function getRedCoin() public view returns (uint balance) {
		return balances[msg.sender].redCoin;
	}

	function getGreenCoin() public view returns (uint balance) {
		return balances[msg.sender].greenCoin;
	}

	function sendRed(address receiver, uint amount) public returns(bool successful) {
		if (balances[msg.sender].redCoin < amount) return false;
		balances[msg.sender].redCoin -= amount;
		balances[receiver].redCoin += amount;
		return true;
	}

	function sendGreen(address receiver, uint amount) public returns(bool successful) {
		if (balances[msg.sender].greenCoin < amount) return false;
		balances[msg.sender].greenCoin -= amount;
		balances[receiver].greenCoin += amount;
		return true;
	}
}