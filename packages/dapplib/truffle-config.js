require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remain essay heavy arctic blue gift'; 
let testAccounts = [
"0x3d433847b09c249791341ee8965bb362c74c411201cea86f477f85f60293cfea",
"0x10d78f7bfcb36332c0d44cdf4718f24f7c2707869c5798ab42001f2bcaecdb7a",
"0xba7fbfeb4d17d6dde7ec2515133e0273dbae80938a3c46772e87353b48f99733",
"0x6826fe53caed7bc83209088399bab0098fa7a6fc816fea5b730c13b9cb2bb5ce",
"0x358673a86181f235528d2456fd9b670d18969969343e942ee888e9835696cbac",
"0xf9f9912753c28577f2b66e50ede67ca2ade822b1a05f42effe64ab3690865c63",
"0xf190c0808181930ab6ba3d9685822d6ea23e7249b87ce5826eee94b83690f13f",
"0x48ac2d4b5797b8f22e312f4ba0129b09a761ebc18b3398de658dc663eeb4684b",
"0x40b816b8d2280b1fb16f3e2946a3d1daed375348e768367f7a64477352f6c86a",
"0xa222970d4301d4576f36727970f3a439fe948dcc0c73affdc7c9dc0587602f09"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

