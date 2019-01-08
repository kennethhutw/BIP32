const HDKey = require('ethereumjs-wallet/hdkey')
const bip39 = require('bip39')

// Generate mnemonic and seed
const mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeed(mnemonic)
console.log(`generated mnemonic:\n\t${mnemonic}\n`)

// Wallet from seed and get the public Extended key
const walletPriv = HDKey.fromMasterSeed(seed)
const pubExtKey = walletPriv.publicExtendedKey()
console.log(`public key:\n\t${pubExtKey}`)

// Wallet from public Extended key and derive children
const walletPub = HDKey.fromExtendedKey(pubExtKey)
console.log(`\nchild keys from extended public:\n`)

for (var idx = 0; idx < 10; idx++) {
  console.log(
    '\t' +
      walletPub
        .deriveChild(idx)
        .getWallet()
        .getAddressString()
  )
}
