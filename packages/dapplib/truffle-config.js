require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth pizza minor idea drive food gate'; 
let testAccounts = [
"0x0edd01b2a068296952202f94063f8e033d63afaa0ec41787c9d9d39fd0f64519",
"0xb84d8dbc1cf8bc05b7a4670b2ad293a9ddf5a75bac6b06fe0f1254eceda98726",
"0xb1c52928e8ba914a2062e8335a50ab6dc133e0fdf29a53bf0b58388cf178a3df",
"0xce600de64537e819b86703001f0bf7eddc51bb369412ee883b09d9bfe8917c1c",
"0x1b3fac8aeb8b69e94440c0d605e36865cd0592bd7dbf768d30d8e756e0892314",
"0xaf044c7dfc1ef7484cf08fc35d077ab27422a886aaa5814546ecd81291772bfb",
"0x9a2c05684a1c79b26ecb95cd5e369a5e58060a0040f9f151784f7ef38c5257d9",
"0xb5305f4b149c21cf60df456c766b115a136a177cd555811f8c6ec49c2e94c941",
"0x05757301b05d2633a5b2f3399bc1ea06806cf9336418763e7c5f191a2995193b",
"0x22bf4f336af0e5b0981bef04391a29d8d83329517544c582d1683798d1e5a9dd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

