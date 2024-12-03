// SPDX-License-Identifier: MIT

pragma solidity 0.8.22;
import { EIP712Base } from "./EIP712Base.sol";

contract NativeMetaTransaction is EIP712Base {
  bytes32 private constant META_TRANSACTION_TYPEHASH =
    keccak256(bytes("MetaTransaction(uint256 nonce,address from,bytes functionSignature)"));

  event MetaTransactionExecuted(
    address userAddress,
    address relayerAddress,
    bytes functionSignature,
    bytes32 metaTXHash
  );

  //store last nonce for each address
  mapping(address => uint256) nonces;

  /*
   * Meta transaction structure.
   * No point of including value field here as if user is doing value transfer then he has the funds to pay for gas
   * He should call the desired function directly in that case.
   */
  struct MetaTransaction {
    uint256 nonce;
    address from;
    bytes functionSignature;
  }

  constructor() EIP712Base("OWP", "1") {}

  function executeMetaTransaction(
    address userAddress,
    bytes memory functionSignature,
    bytes32 sigR,
    bytes32 sigS,
    uint8 sigV
  ) public payable returns (bytes memory) {
    //very first txn, nonce = 0
    MetaTransaction memory metaTx = MetaTransaction({
      nonce: nonces[userAddress],
      from: userAddress,
      functionSignature: functionSignature
    });

    require(verify(userAddress, metaTx, sigR, sigS, sigV), "Signer and signature do not match");

    // increase nonce for user (to avoid re-use)
    nonces[userAddress] = nonces[userAddress] + 1;

    emit MetaTransactionExecuted(userAddress, msg.sender, functionSignature, hashMetaTransaction(metaTx));

    // Append userAddress and relayer address at the end to extract it from calling context
    //@audit-ok what are we calling => funcSig = 4 bytes, addr passed to the function => there is no such func on this contr
    //userAddress is extracted in OWPIdentity::_msgSender
    (bool success, bytes memory returnData) = address(this).call{ value: msg.value }(
      // functionSignature = sig + args => then, we append the userAddress
      abi.encodePacked(functionSignature, userAddress)
    );
    require(success, "Function call not successful");

    return returnData;
  }

  function hashMetaTransaction(MetaTransaction memory metaTx) public pure returns (bytes32) {
    return
      keccak256(abi.encode(META_TRANSACTION_TYPEHASH, metaTx.nonce, metaTx.from, keccak256(metaTx.functionSignature)));
  }

  function getNonce(address user) public view returns (uint256 nonce) {
    nonce = nonces[user];
  }

  function verify(
    address signer,
    MetaTransaction memory metaTx,
    bytes32 sigR,
    bytes32 sigS,
    uint8 sigV
  ) internal view returns (bool) {
    require(signer != address(0), "NativeMetaTransaction: INVALID_SIGNER");
    //@audit-ok dont use ecrecover => hndled in Low-5
    return signer == ecrecover(toTypedMessageHash(hashMetaTransaction(metaTx)), sigV, sigR, sigS);
  }
}
