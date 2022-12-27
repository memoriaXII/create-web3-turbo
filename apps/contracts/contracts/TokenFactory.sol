// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import {Token} from "./Token.sol";

contract TokenFactory is
    Initializable,
    AccessControlUpgradeable,
    OwnableUpgradeable,
    PausableUpgradeable,
    UUPSUpgradeable
{
    bytes32 constant INIT_CODEHASH = keccak256(type(Token).creationCode);

    string public name;
    string public symbol;
    uint8 public decimals;
    uint public limit;
    address public creator;
    uint256 public getTokenCount;
    address[10000000000] public getTokenByIndex; // 10 billion indices

    function initialize() external initializer {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function getId(
        address _creator,
        string memory _name,
        string memory _symbol,
        uint _limit,
        uint8 _decimals
    ) internal pure returns (bytes32 id) {
        return
            keccak256(
                abi.encodePacked(_creator, _name, _symbol, _limit, _decimals)
            );
    }

    event TokenCreated(
        address token,
        address creator,
        string name,
        string symbol,
        uint limit,
        uint8 decimals
    );

    function _createToken(
        address _creator,
        string memory _name,
        string memory _symbol,
        uint _limit,
        uint8 _decimals
    ) internal returns (address tokenContract) {
        // set the parameter storage slots so the contract can query it
        name = _name;
        symbol = _symbol;
        limit = _limit;
        decimals = _decimals;
        creator = _creator;
        // use CREATE2 so we can get a deterministic address based on the parameters
        tokenContract = address(
            new Token{
                salt: getId(_creator, _name, _symbol, _limit, _decimals)
            }()
        );
        // CREATE2 can return address(0), add a check to verify this isn't the case
        // See: https://eips.ethereum.org/EIPS/eip-1014
        require(tokenContract != address(0));

        // Append the new contract address to the array of deployed contracts
        uint256 index = getTokenCount;
        getTokenByIndex[index] = tokenContract;
        unchecked {
            getTokenCount = index + 1;
        }

        emit TokenCreated(
            tokenContract,
            _creator,
            _name,
            _symbol,
            _limit,
            _decimals
        );
    }

    /**
        @notice Create a new Token instance
        @dev Instances are created deterministically via CREATE2 and duplicate
            instances will cause a revert
        @return tokenContract The address of the newly created Token contract
      */
    function createToken(
        string memory _name,
        string memory _symbol,
        uint _limit,
        uint8 _decimals
    ) external returns (address tokenContract) {
        return _createToken(msg.sender, _name, _symbol, _limit, _decimals);
    }

    /**
        @notice Create a new Token instance, used for cases where you want tokens to have no creator, like a global USDC instance
        @dev Instances are created deterministically via CREATE2 and duplicate
            instances will cause a revert
        @return tokenContract The address of the newly created Token contract
      */
    function createOwnerlessToken(
        string memory _name,
        string memory _symbol,
        uint _limit,
        uint8 _decimals
    ) external returns (address tokenContract) {
        return _createToken(address(0), _name, _symbol, _limit, _decimals);
    }

    /**
      @notice Query the address of the Token contract for the specified parameters and whether it is deployed
      @param _creator Use 0x0 for tokens created with createOwnerlessToken
      @return predictedAddress The deterministic address where the token contract will be deployed for the provided parameters
      @return isDeployed Boolean denoting whether the contract is currently deployed
      */
    function getTokenByParameters(
        address _creator,
        string memory _name,
        string memory _symbol,
        uint _limit,
        uint8 _decimals
    ) external view returns (address predictedAddress, bool isDeployed) {
        predictedAddress = address(
            uint160(
                uint256(
                    keccak256(
                        abi.encodePacked(
                            bytes1(0xff),
                            address(this),
                            getId(_creator, _name, _symbol, _limit, _decimals),
                            INIT_CODEHASH
                        )
                    )
                )
            )
        );
        isDeployed = predictedAddress.code.length != 0;
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
