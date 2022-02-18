# Aries Testnet Utils

A collection of contracts and utilities strictly for testing purposes.

## ERC20WithFaucet

A simple ERC20 token contract with a limited faucet. Users can call an unprivileged `claim` function to mint 100,000 tokens to themselves once every 24 hours.

Based on [Solmate](https://github.com/Rari-Capital/solmate/blob/main/src/tokens/ERC20.sol) and supports EIP-2612.

First batch of tokens deployed on Aurora Testnet:

```
$AEX Aries Exchange Testnet Token address: 0xa3B50Fa05B2cFc2D8e4E7EFd74Ed6c081E5C65e5
Contract deploy tx hash: 0xea6f5c9dcae66ebb31a376f3d4c4a0a4895c0261858dafd5d04f1fcd6532338e
$AUSD Aries Testnet USD Stablecoin address: 0xb46AddFCCD0761aaC247379cC125E50Aab59334C
Contract deploy tx hash: 0xef002d6ade0e396223b6505d4a1e810136532561c32f694211b801fde4ab90b2
$MEME Random Meme Coin address: 0xbF0fbC729a7E8F4e2a7eB0F3a9D7A1AF72c166fd
Contract deploy tx hash: 0x0f1b7915f805bc60d1293a91c8954fdb7c2dc394cf89640e42f25ef075dda768
```
