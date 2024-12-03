/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  CurrencyManager,
  CurrencyManagerInterface,
} from "../../../contracts/dao/CurrencyManager";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "CurrencyManagerError",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "currency",
        type: "address",
      },
    ],
    name: "CurrencyRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "currency",
        type: "address",
      },
    ],
    name: "CurrencyWhitelisted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
    ],
    name: "addCurrency",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
    ],
    name: "isCurrencyWhitelisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
    ],
    name: "removeCurrency",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "viewCountWhitelistedCurrencies",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "cursor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "size",
        type: "uint256",
      },
    ],
    name: "viewWhitelistedCurrencies",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001c60003361004d565b506100477fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217753361004d565b506100f9565b6000828152602081815260408083206001600160a01b038516845290915281205460ff166100ef576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556100a73390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016100f3565b5060005b92915050565b610aa9806101086000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806375b238fc1161008c57806391d148541161006657806391d14854146101cb578063a217fddf146101de578063c5d3a107146101e6578063d547741f146101f957600080fd5b806375b238fc1461017057806385f39b0a146101975780638ab234b6146101b857600080fd5b806301ffc9a7146100d45780631facfd9c146100fc578063248a9ca3146101125780632f2ff15d1461013557806336568abe1461014a57806343b938c51461015d575b600080fd5b6100e76100e23660046108d7565b61020c565b60405190151581526020015b60405180910390f35b610104610243565b6040519081526020016100f3565b610104610120366004610901565b60009081526020819052604090206001015490565b610148610143366004610936565b610254565b005b610148610158366004610936565b61027f565b6100e761016b366004610962565b6102b7565b6101047fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c2177581565b6101aa6101a536600461097d565b6102c4565b6040516100f392919061099f565b6101486101c6366004610962565b6103af565b6100e76101d9366004610936565b6104c1565b610104600081565b6101486101f4366004610962565b6104ea565b610148610207366004610936565b6105a2565b60006001600160e01b03198216637965db0b60e01b148061023d57506301ffc9a760e01b6001600160e01b03198316145b92915050565b600061024f60016105c7565b905090565b60008281526020819052604090206001015461026f816105d1565b61027983836105de565b50505050565b6001600160a01b03811633146102a85760405163334bd91960e11b815260040160405180910390fd5b6102b28282610670565b505050565b600061023d6001836106db565b6060600082846102d460016105c7565b6102de9190610a0b565b8111156102fd57846102f060016105c7565b6102fa9190610a0b565b90505b60008167ffffffffffffffff81111561031857610318610a1e565b604051908082528060200260200182016040528015610341578160200160208202803683370190505b50905060005b828110156103965761036461035c8289610a34565b600190610700565b82828151811061037657610376610a47565b6001600160a01b0390921660209283029190910190910152600101610347565b50806103a28388610a34565b9350935050509250929050565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c217756103d9816105d1565b6001600160a01b03821661042e576040516320a2519160e11b815260206004820152601660248201527543616e6e6f74206265206e756c6c206164647265737360501b60448201526064015b60405180910390fd5b6104396001836106db565b1561047d576040516320a2519160e11b8152602060048201526013602482015272105b1c9958591e481dda1a5d195b1a5cdd1959606a1b6044820152606401610425565b61048860018361070c565b506040516001600160a01b038316907f3cbf62b327efb2d06d36e16c10a2f5c00cf0568e2b805bd56969b15d2736107890600090a25050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b7fa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775610514816105d1565b61051f6001836106db565b61055e576040516320a2519160e11b815260206004820152600f60248201526e139bdd081dda1a5d195b1a5cdd1959608a1b6044820152606401610425565b610569600183610721565b506040516001600160a01b038316907fa40d69111be14f29022626d38310e47cc2d7f4cb728961509c2f65a4bee08c5b90600090a25050565b6000828152602081905260409020600101546105bd816105d1565b6102798383610670565b600061023d825490565b6105db8133610736565b50565b60006105ea83836104c1565b610668576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556106203390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161023d565b50600061023d565b600061067c83836104c1565b15610668576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a450600161023d565b6001600160a01b038116600090815260018301602052604081205415155b9392505050565b60006106f98383610773565b60006106f9836001600160a01b03841661079d565b60006106f9836001600160a01b0384166107e4565b61074082826104c1565b61076f5760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610425565b5050565b600082600001828154811061078a5761078a610a47565b9060005260206000200154905092915050565b60008181526001830160205260408120546106685750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561023d565b600081815260018301602052604081205480156108cd576000610808600183610a0b565b855490915060009061081c90600190610a0b565b905080821461088157600086600001828154811061083c5761083c610a47565b906000526020600020015490508087600001848154811061085f5761085f610a47565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061089257610892610a5d565b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061023d565b600091505061023d565b6000602082840312156108e957600080fd5b81356001600160e01b0319811681146106f957600080fd5b60006020828403121561091357600080fd5b5035919050565b80356001600160a01b038116811461093157600080fd5b919050565b6000806040838503121561094957600080fd5b823591506109596020840161091a565b90509250929050565b60006020828403121561097457600080fd5b6106f98261091a565b6000806040838503121561099057600080fd5b50508035926020909101359150565b604080825283519082018190526000906020906060840190828701845b828110156109e15781516001600160a01b0316845292840192908401906001016109bc565b505050602093909301939093525092915050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561023d5761023d6109f5565b634e487b7160e01b600052604160045260246000fd5b8082018082111561023d5761023d6109f5565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea26469706673582212207e98978e3a5f778b34140719d0da9cb91029e5638901862531d347ae5d3c189964736f6c63430008160033";

type CurrencyManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CurrencyManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CurrencyManager__factory extends ContractFactory {
  constructor(...args: CurrencyManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CurrencyManager> {
    return super.deploy(overrides || {}) as Promise<CurrencyManager>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CurrencyManager {
    return super.attach(address) as CurrencyManager;
  }
  override connect(signer: Signer): CurrencyManager__factory {
    return super.connect(signer) as CurrencyManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CurrencyManagerInterface {
    return new utils.Interface(_abi) as CurrencyManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CurrencyManager {
    return new Contract(address, _abi, signerOrProvider) as CurrencyManager;
  }
}
