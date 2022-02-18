import { config as configDotenv } from "dotenv";
import type { HardhatUserConfig } from "hardhat/types";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";

configDotenv();

const config: HardhatUserConfig = {
    solidity: {
        version: "0.8.12",
        settings: {
            optimizer: {
                enabled: true,
                runs: 99999,
            },
        },
    },
    defaultNetwork: "auroratestnet",
    networks: {
        hardhat: {},
        auroratestnet: {
            chainId: 1313161555,
            url: "https://testnet.aurora.dev",
            accounts: {
                mnemonic: process.env.MNEMONIC,
            },
        },
    },
    typechain: {
        outDir: "typechain",
    },
};

export default config;
