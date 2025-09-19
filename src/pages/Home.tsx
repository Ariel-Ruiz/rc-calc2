import { useEffect, useMemo, useState } from 'react'
import { useI18n } from '../contexts/I18nProvider'
import { fetchAllPrices, fetchPrice } from '../lib/prices'
import { convertirAHs, tiempoASegundos } from '../lib/calculations'

type ParsedLine = { symbol: string; power: string; reward: string; blockTime: string }

const symbolIcons: Record<string, string> = {
  RLT: '/symbols/rlt.svg',
  RST: '/symbols/rst.svg',
  BTC: '/symbols/btc.svg',
  ETH: '/symbols/eth.svg',
  LTC: '/symbols/ltc.svg',
  BNB: '/symbols/bnb.svg',
  DOGE: '/symbols/doge.svg',
  XRP: '/symbols/xrp.svg',
  TRX: '/symbols/trx.svg',
  SOL: '/symbols/sol.svg',
  POL: '/symbols/matic.svg'
}

export default function Home() {
  const { t } = useI18n()

  const [networkInput, setNetworkInput] = useState('')
  const [myPower, setMyPower] = useState<number>(() => Number(localStorage.getItem('power') || 1000))
  const [parsedLines, setParsedLines] = useState<ParsedLine[]>(() => {
    const saved = localStorage.getItem('networkLines')
    return saved ? JSON.parse(saved) : []
  })
  const [useUSD, setUseUSD] = useState<boolean>(() => localStorage.getItem('useUSD') === '1')

  const [pricesLoaded, setPricesLoaded] = useState(false)

  useEffect(() => {
    async function loadPrices() {
      await fetchAllPrices()
      setPricesLoaded(true)
    }
    loadPrices()
  }, [])

  useEffect(() => {
    localStorage.setItem('networkLines', JSON.stringify(parsedLines))
  }, [parsedLines])

  useEffect(() => {
    localStorage.setItem('power', String(myPower))
  }, [myPower])

  useEffect(() => {
    localStorage.setItem('useUSD', useUSD ? '1' : '')
  }, [useUSD])

  function procesarRed() {
    if (!networkInput) return
    let lines = networkInput.split('\n').map(l => l.trim()).filter(l => l)
    lines = lines.filter(l => !['Game currencies', 'Crypto currencies'].includes(l))
    const newParsed: ParsedLine[] = []
    let i = 1
    while (i < lines.length) {
      newParsed.push({
        symbol: lines[i],
        power: lines[i + 3],
        reward: lines[i + 7],
        blockTime: '10:01'
      })
      i += 11
    }
    setParsedLines(newParsed)
    setNetworkInput('')
  }

  function updateBlockTime(idx: number, value: string) {
    setParsedLines(prev => {
      const cp = [...prev]
      cp[idx] = { ...cp[idx], blockTime: value }
      return cp
    })
  }

  function computeForLine(data: ParsedLine) {
    const myPowerPH = myPower || 0
    const myPowerHs = myPowerPH * 1e15

    const [powerValueStr, powerUnit] = data.power.split(' ')
    const netPowerHs = convertirAHs(parseFloat(powerValueStr) || 0, powerUnit || '')

    const rewardParts = data.reward.split(' ')
    const rewardValue = parseFloat(rewardParts[0]) || 0
    const rewardSymbol = rewardParts[1] || ''

    const blockSeconds = tiempoASegundos(data.blockTime)

    let myRewardBlock = netPowerHs > 0 ? (myPowerHs / netPowerHs) * rewardValue : 0
    const blocksPerDay = 86400 / blockSeconds
    let myRewardDay = myRewardBlock * blocksPerDay
    let myRewardWeek = myRewardDay * 7
    let myRewardMonth = myRewardDay * 30

    let suffix = rewardSymbol
    if (useUSD) {
      const price = fetchPrice(rewardSymbol)
      myRewardBlock *= price
      myRewardDay *= price
      myRewardWeek *= price
      myRewardMonth *= price
      suffix = 'USD'
    }

    return {
      perBlock: myRewardBlock,
      perDay: myRewardDay,
      perWeek: myRewardWeek,
      perMonth: myRewardMonth,
      suffix
    }
  }

  const rows = useMemo(
    () => pricesLoaded ? parsedLines.map(p => ({ p, calc: computeForLine(p) })) : [],
    [parsedLines, myPower, useUSD, pricesLoaded]
  )

  return (
    <div className="container">
      <div className="input-section">
        <div id="warning" style={{ color: '#e85217' }}>{t.warning || 'Asegúrese...'}</div>
        <img src="/example.png" width="70%" alt="example" />
        <h5 id="networkLabel">{t.networkLabel || 'Red de tu liga'}</h5>
        <textarea
          id="networkInput"
          value={networkInput}
          placeholder={t.networkPlaceholder || 'Pega aquí los datos de la red...'}
          onChange={(e) => setNetworkInput(e.target.value)}
        />
        <h5 id="powerLabel">{t.powerLabel || 'Poder en Ph/s'}</h5>
        <input
          type="number"
          id="myPower"
          value={myPower}
          onChange={(e) => setMyPower(Number(e.target.value))}
          placeholder={t.powerPlaceholder || 'Tu poder (PH/s)'}
        />
        <button id="processBtn" onClick={procesarRed}>{t.processBtn || 'Procesar'}</button>
      </div>

      <div className="results-section">
        <div className="result-buttons">
          <div className="toogle-currency-tab">
            <div
              id='toogle-crypto'
              className={`toogle-currency ${!useUSD ? 'active' : ''}`}
              onClick={() => setUseUSD(false)}
            >CRYPTO</div>
            <div
              id='toogle-usd'
              className={`toogle-currency ${useUSD ? 'active' : ''}`}
              onClick={() => setUseUSD(true)}
            >USD</div>
          </div>
        </div>

        <div className="table-wrapper">
          <table id="resultTable">
            <thead>
              <tr>
                <th className="sticky" id="thCoin">{t.thCoin || ''}</th>
                <th id="thNetPower">{t.thNetPower || ''}</th>
                <th id="thReward">{t.thReward || ''}</th>
                <th id="thBlockTime">{t.thBlockTime || ''}</th>
                <th id="thPerBlock">{t.thPerBlock || ''}</th>
                <th id="thPerDay">{t.thPerDay || ''}</th>
                <th id="thPerWeek">{t.thPerWeek || ''}</th>
                <th id="thPerMonth">{t.thPerMonth || ''}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, idx) => (
                <tr key={idx} data-idx={idx}>
                  <td className="sticky">
                    <img src={symbolIcons[r.p.symbol] || '/symbols/default.svg'} className="symbol-icon" alt={r.p.symbol} />
                  </td>
                  <td>{r.p.power}</td>
                  <td>{r.p.reward}</td>
                  <td>
                    <input
                      className="editable"
                      type="text"
                      value={r.p.blockTime}
                      onChange={(e) => updateBlockTime(idx, e.target.value)}
                    />
                  </td>
                  <td className="block">{r.calc.perBlock.toFixed(useUSD ? 2 : 8)} {r.calc.suffix}</td>
                  <td className="day">{r.calc.perDay.toFixed(useUSD ? 2 : 5)} {r.calc.suffix}</td>
                  <td className="week">{r.calc.perWeek.toFixed(useUSD ? 2 : 4)} {r.calc.suffix}</td>
                  <td className="month">{r.calc.perMonth.toFixed(useUSD ? 2 : 4)} {r.calc.suffix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
