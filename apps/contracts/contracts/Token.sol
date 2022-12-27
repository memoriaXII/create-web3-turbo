// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface Factory {
    function decimals() external returns (uint8);

    function limit() external returns (uint);

    function name() external returns (string memory);

    function symbol() external returns (string memory);

    function creator() external returns (address);
}

contract Token is ERC20, Ownable {
    uint8 private _decimals;
    string private _name;
    string private _symbol;
    uint public limit;

    constructor() ERC20("", "") {
        _decimals = Factory(msg.sender).decimals();
        _name = Factory(msg.sender).name();
        _symbol = Factory(msg.sender).symbol();
        limit = Factory(msg.sender).limit();
        _transferOwnership(Factory(msg.sender).creator());
    }

    function name() public view override returns (string memory) {
        return _name;
    }

    function symbol() public view override returns (string memory) {
        return _symbol;
    }

    function decimals() public view override returns (uint8) {
        return _decimals;
    }

    function mint() external {
        mint(msg.sender, limit);
    }

    function mint(uint amount) external {
        mint(msg.sender, amount);
    }

    function mint(address to, uint amount) public {
        require(amount <= limit, "Token: minted amount higher than limit");
        _mint(to, amount);
    }

    function ownerMint(address to, uint amount) public onlyOwner {
        _mint(to, amount);
    }

    function changeLimit(uint newLimit) public onlyOwner {
        limit = newLimit;
    }
}
