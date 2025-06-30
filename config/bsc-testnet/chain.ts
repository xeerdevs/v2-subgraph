import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts/index'

export const FACTORY_ADDRESS = '0x6B77b092bb595fca669Cf85D3734970F1beA4008'

export const REFERENCE_TOKEN = '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd'
export const STABLE_TOKEN_PAIRS = ['0xedefb00f8156d0073c6088023edc18310ea52377']

// token where amounts should contribute to tracked volume and liquidity
export const WHITELIST: string[] = [
  '0x08728f249d2385af9b2445c553ba1bdea00a706a',
  '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd', // Wrapped BNB
  '0xEBb825a8982E1E2B16389c0584F63794E8696629', // BSC USD
  '0x857d273C2513B90cc81582Ad5Eb8bdCbfF41521d',
  '0x462e75355385fddb19b4f1a7a6fca66cac8cc17a',
  '0x83beb3fe6fe4eb888486b65f934459faa0e453ba',
  '0x857d273c2513b90cc81582ad5eb8bdcbff41521d',
  '0x02e757d47adc8d9d099ec5f7807c1ceecfdcf443'
]

export const STABLECOINS = [
  '0x08728f249d2385af9b2445c553ba1bdea00a706a',
  '0xEBb825a8982E1E2B16389c0584F63794E8696629', // BSC USD
  '0x857d273C2513B90cc81582Ad5Eb8bdCbfF41521d'
]

// minimum liquidity required to count towards tracked volume for pairs with small # of Lps
export const MINIMUM_USD_THRESHOLD_NEW_PAIRS = BigDecimal.fromString('100')

// minimum liquidity for price to get tracked
export const MINIMUM_LIQUIDITY_THRESHOLD_ETH = BigDecimal.fromString('0.000001')

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = []

export const SKIP_TOTAL_SUPPLY: string[] = []
