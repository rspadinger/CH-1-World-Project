// SPDX-License-Identifier: MIT
pragma solidity 0.8.22;

//proposal adds a way for users to sign data that is well-structured and easy to verify
//domain separator prevents a signed message for one contract from being valid on another, protecting users from replay attacks
contract EIP712Base {
  struct EIP712Domain {
    string name;
    string version;
    address verifyingContract;
    bytes32 salt;
  }

  bytes32 internal constant EIP712_DOMAIN_TYPEHASH =
    keccak256(bytes("EIP712Domain(string name,string version,address verifyingContract,bytes32 salt)"));
  bytes32 internal domainSeperator;

  constructor(string memory name, string memory version) {
    _setDomainSeperator(name, version);
  }

  function _setDomainSeperator(string memory name, string memory version) internal {
    //@audit-ok is this conform
    domainSeperator = keccak256(
      abi.encode(
        EIP712_DOMAIN_TYPEHASH,
        keccak256(bytes(name)),
        keccak256(bytes(version)),
        address(this),
        bytes32(getChainId()) //@audit-info simply use: bytes32(block.chainid)
      )
    );
  }

  function getDomainSeperator() public view returns (bytes32) {
    return domainSeperator;
  }

  function getChainId() public view returns (uint256) {
    uint256 id;
    //@audit-ok check
    assembly {
      id := chainid()
    }
    return id;
  }

  /**
   * Accept message hash and returns hash message in EIP712 compatible form
   * So that it can be used to recover signer from signature signed using EIP712 formatted data
   * https://eips.ethereum.org/EIPS/eip-712
   * "\\x19" makes the encoding deterministic
   * "\\x01" is the version byte to make it compatible to EIP-191
   */
  function toTypedMessageHash(bytes32 messageHash) internal view returns (bytes32) {
    //A prefix \x19\x01 for EIP-712-compliant encoding
    return keccak256(abi.encodePacked("\x19\x01", getDomainSeperator(), messageHash));
  }
}
