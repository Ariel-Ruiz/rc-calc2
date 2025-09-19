export const priceCache: Record<string, number> = {}

export async function fetchAllPrices() {
  const mapSymbols: Record<string, string> = {
    btc: 'bitcoin',
    eth: 'ethereum',
    ltc: 'litecoin',
    bnb: 'binancecoin',
    doge: 'dogecoin',
    xrp: 'ripple',
    trx: 'tron',
    sol: 'solana',
    pol: 'matic-network'
  }

  const ids = Object.values(mapSymbols).join(',')
  try {
    const resp = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`)
    const data = await resp.json()
    for (const [, id] of Object.entries(mapSymbols)) {
      priceCache[id] = data[id]?.usd || 0
    }
    priceCache['RLT'] = 1
    priceCache['RST'] = 0.01
  } catch (err) {
    console.error('Error fetching prices', err)
  }
}

export function fetchPrice(symbol: string) {
  const mapSymbols: Record<string, string> = {
    btc: 'bitcoin',
    eth: 'ethereum',
    ltc: 'litecoin',
    bnb: 'binancecoin',
    doge: 'dogecoin',
    xrp: 'ripple',
    trx: 'tron',
    sol: 'solana',
    pol: 'matic-network'
  }

  if (!symbol) return 0
  if (symbol === 'RLT') return priceCache['RLT'] || 1
  if (symbol === 'RST') return priceCache['RST'] || 0.01
  const id = mapSymbols[symbol.toLowerCase()]
  if (!id) return 0
  return priceCache[id] || 0
}
