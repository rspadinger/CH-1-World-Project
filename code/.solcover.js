module.exports = {
    configureYulOptimizer: true,
    skipFiles: [
      'shared/testERC1155Membership.sol',
      'shared/testERC20.sol',
      'dao/CurrencyManager.sol',
      'OWPIdentity.sol',
      'meta-transaction/EIP712Base.sol',
      'meta-transaction/NativeMetaTransaction.sol',
    ],
  };
  