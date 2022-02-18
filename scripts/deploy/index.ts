import { ethers } from "hardhat";
import { ERC20WithFaucet__factory } from "../../typechain";

async function main() {
    const ERC20WithFaucet = (await ethers.getContractFactory("ERC20WithFaucet")) as ERC20WithFaucet__factory;

    const AEX = await ERC20WithFaucet.deploy("Aries Exchange Testnet Token", "AEX", 18);
    console.log(`$AEX Aries Exchange Testnet Token address: ${AEX.address}`);
    console.log(`Contract deploy tx hash: ${AEX.deployTransaction.hash}`);
    await AEX.deployed();

    const AUSD = await ERC20WithFaucet.deploy("Aries Testnet USD Stablecoin", "AUSD", 18);
    console.log(`$AUSD Aries Testnet USD Stablecoin address: ${AUSD.address}`);
    console.log(`Contract deploy tx hash: ${AUSD.deployTransaction.hash}`);
    await AUSD.deployed();

    const MEME = await ERC20WithFaucet.deploy("Random Meme Coin", "MEME", 18);
    console.log(`$MEME Random Meme Coin address: ${MEME.address}`);
    console.log(`Contract deploy tx hash: ${MEME.deployTransaction.hash}`);
    await MEME.deployed();

    console.log("Finished");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
