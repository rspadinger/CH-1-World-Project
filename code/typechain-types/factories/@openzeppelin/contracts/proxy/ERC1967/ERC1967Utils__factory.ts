/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC1967Utils,
  ERC1967UtilsInterface,
} from "../../../../../@openzeppelin/contracts/proxy/ERC1967/ERC1967Utils";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "ERC1967InvalidAdmin",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "ERC1967InvalidBeacon",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "ERC1967InvalidImplementation",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1967NonPayable",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212203d95d56bf5bc5c7bf4b8a93f77578479502779aa33ab2958f70621a5acdeb4a864736f6c63430008160033";

type ERC1967UtilsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1967UtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1967Utils__factory extends ContractFactory {
  constructor(...args: ERC1967UtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1967Utils> {
    return super.deploy(overrides || {}) as Promise<ERC1967Utils>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC1967Utils {
    return super.attach(address) as ERC1967Utils;
  }
  override connect(signer: Signer): ERC1967Utils__factory {
    return super.connect(signer) as ERC1967Utils__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1967UtilsInterface {
    return new utils.Interface(_abi) as ERC1967UtilsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1967Utils {
    return new Contract(address, _abi, signerOrProvider) as ERC1967Utils;
  }
}
