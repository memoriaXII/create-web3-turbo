// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract TokenFaucet is
    Initializable,
    AccessControlUpgradeable,
    OwnableUpgradeable,
    PausableUpgradeable,
    UUPSUpgradeable
{
    IERC20 public token;

    uint256 public amount;
    uint256 public frequency;
    mapping(address => uint256) private lastBlock;

    event Funded(uint256 _amount);

    function initialize(
        address _token,
        uint256 _amount,
        uint256 _frequency
    ) external initializer {
        require(
            _token != address(0),
            "Faucet: can't set the token address to the zero address"
        );
        token = IERC20(_token);
        amount = _amount;
        frequency = _frequency;
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function donate(IERC20 _token, uint256 _amount) external {
        _token.transferFrom(msg.sender, address(this), _amount);
    }

    function fund(address _to) public {
        uint256 currentBlock = block.number;
        require(
            lastBlock[_to] == 0 || currentBlock - lastBlock[_to] >= frequency,
            "Address has been funded recently"
        );
        require(balance() > amount, "Not enough token funds in the faucet");
        lastBlock[_to] = currentBlock;
        token.transfer(address(uint160(_to)), amount);
        emit Funded(amount);
    }

    function balance() public view returns (uint256) {
        return token.balanceOf(address(this));
    }

    function setAmount(uint256 _amount) public onlyOwner {
        amount = _amount;
    }

    function setFrequency(uint256 _frequency) public onlyOwner {
        frequency = _frequency;
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal view override onlyRole(DEFAULT_ADMIN_ROLE) {
        newImplementation; // silence the warning
    }

    function pause() external onlyRole(DEFAULT_ADMIN_ROLE) whenNotPaused {
        _pause();
    }

    function unpause() external onlyRole(DEFAULT_ADMIN_ROLE) whenPaused {
        _unpause();
    }
}
