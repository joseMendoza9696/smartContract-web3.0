// https://eth-ropsten.alchemyapi.io/v2/IoGPxQeIejgTIbfX3lzO_PRhN-vARmZ3
require('@nomiclabs/hardhat-waffle');

module.exports = {
	solidity: '0.8.0',
	networks: {
		ropsten: {
			url: 'https://eth-ropsten.alchemyapi.io/v2/IoGPxQeIejgTIbfX3lzO_PRhN-vARmZ3',
			accounts: [
				'd2d8829bbed93d516da0743c80b85cdb6450e4bfa4ffdd8e881bb6a341a48c4e',
			],
		},
	},
};
