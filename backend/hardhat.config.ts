import '@typechain/hardhat'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-ethers'
import 'hardhat-gas-reporter'
import 'dotenv/config'
import 'solidity-coverage'
import 'hardhat-deploy'
import 'solidity-coverage'
import { HardhatUserConfig } from 'hardhat/config'

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ''
const SEPOLIA_RPC_URL =
    process.env.SEPOLIA_RPC_URL || 'https://eth-sepolia.g.alchemy.com/v2/YOUR-API-KEY'
const PRIVATE_KEY = process.env.PRIVATE_KEY || ''
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ''

const config: HardhatUserConfig = {
    defaultNetwork: 'hardhat',
    networks: {
        hardhat: {
            chainId: 31337,
        },
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 11155111,
        },
    },
    solidity: {
        compilers: [
            {
                version: '0.8.7',
            },
            {
                version: '0.6.6',
            },
        ],
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
        customChains: [],
    },
    gasReporter: {
        enabled: true,
        currency: 'USD',
        outputFile: 'gas-report.txt',
        noColors: true,
        // coinmarketcap: COINMARKETCAP_API_KEY,
    },
    namedAccounts: {
        deployer: {
            default: 0, 
            1: 0, 
        },
    },
    mocha: {
        timeout: 200000, // 200 seconds max for running tests
    },
}

export default config
