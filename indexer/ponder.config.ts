import { createConfig } from "ponder";
import { base, baseSepolia } from "viem/chains";

import { ExampleContractAbi } from "./abis/ExampleContractAbi";

export default createConfig({
  chains: {
    testnet: {
      id: baseSepolia.id,
      rpc: baseSepolia.rpcUrls.default.http[0],
    },
    mainnet: {
      id: base.id,
      rpc: base.rpcUrls.default.http[0],
    },
  },
  contracts: {
    ExampleContract: {
      chain: "testnet",
      abi: ExampleContractAbi,
      address: "0x0000000000000000000000000000000000000000",
      startBlock: 1234567, // Replace with actual start block
    },
  },
});
