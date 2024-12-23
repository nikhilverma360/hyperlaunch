export const ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "factory_",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "router_",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "fee_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "ReentrancyGuardReentrantCall",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount0",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount1",
				"type": "uint256"
			}
		],
		"name": "Deployed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "pair",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Launched",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approval",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tk",
				"type": "address"
			}
		],
		"name": "deploy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "feeTo",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "feeToSetter",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getTokens",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "creator",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "token",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "pair",
						"type": "address"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "token",
								"type": "address"
							},
							{
								"internalType": "string",
								"name": "name",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "ticker",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "supply",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "price",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "marketCap",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "_liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "volume",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "volume24H",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "prevPrice",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "lastUpdated",
								"type": "uint256"
							}
						],
						"internalType": "struct PumpFun.Data",
						"name": "data",
						"type": "tuple"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "image",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "twitter",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "telegram",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "youtube",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "website",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "trading",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "tradingOnUniswap",
						"type": "bool"
					}
				],
				"internalType": "struct PumpFun.Token[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUserTokens",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "creator",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "token",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "pair",
						"type": "address"
					},
					{
						"components": [
							{
								"internalType": "address",
								"name": "token",
								"type": "address"
							},
							{
								"internalType": "string",
								"name": "name",
								"type": "string"
							},
							{
								"internalType": "string",
								"name": "ticker",
								"type": "string"
							},
							{
								"internalType": "uint256",
								"name": "supply",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "price",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "marketCap",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "_liquidity",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "volume",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "volume24H",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "prevPrice",
								"type": "uint256"
							},
							{
								"internalType": "uint256",
								"name": "lastUpdated",
								"type": "uint256"
							}
						],
						"internalType": "struct PumpFun.Data",
						"name": "data",
						"type": "tuple"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "image",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "twitter",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "telegram",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "youtube",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "website",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "trading",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "tradingOnUniswap",
						"type": "bool"
					}
				],
				"internalType": "struct PumpFun.Token[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_ticker",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "desc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "img",
				"type": "string"
			},
			{
				"internalType": "string[4]",
				"name": "urls",
				"type": "string[4]"
			},
			{
				"internalType": "uint256",
				"name": "_supply",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maxTx",
				"type": "uint256"
			}
		],
		"name": "launch",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "launchFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "liquidityFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "marketCapLimit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "profile",
		"outputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "profiles",
		"outputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "fee_to",
				"type": "address"
			}
		],
		"name": "setFeeTo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tk",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "referree",
				"type": "address"
			}
		],
		"name": "swapETHForTokens",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountIn",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "tk",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "referree",
				"type": "address"
			}
		],
		"name": "swapTokensForETH",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "token",
		"outputs": [
			{
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "pair",
				"type": "address"
			},
			{
				"components": [
					{
						"internalType": "address",
						"name": "token",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ticker",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "supply",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "marketCap",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "liquidity",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "_liquidity",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "volume",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "volume24H",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "prevPrice",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "lastUpdated",
						"type": "uint256"
					}
				],
				"internalType": "struct PumpFun.Data",
				"name": "data",
				"type": "tuple"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "image",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "twitter",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "telegram",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "youtube",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "website",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "trading",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "tradingOnUniswap",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokens",
		"outputs": [
			{
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "token",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "pair",
				"type": "address"
			},
			{
				"components": [
					{
						"internalType": "address",
						"name": "token",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ticker",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "supply",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "marketCap",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "liquidity",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "_liquidity",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "volume",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "volume24H",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "prevPrice",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "lastUpdated",
						"type": "uint256"
					}
				],
				"internalType": "struct PumpFun.Data",
				"name": "data",
				"type": "tuple"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "image",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "twitter",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "telegram",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "youtube",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "website",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "trading",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "tradingOnUniswap",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			}
		],
		"name": "updateLaunchFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]