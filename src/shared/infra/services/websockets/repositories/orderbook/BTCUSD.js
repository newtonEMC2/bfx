import { WebSocketClient } from '../../client'

const toApiDTO = precision => {
  if (typeof precision === typeof 0) return `P${precision}`
  return `P0`
}

export const WebsocketBTCUSDorderbookRepository = ({ onmessageHandler, precision, orderBook }) => {
  //@TODO: base url should come from env variables
  const ws = new WebSocketClient('wss://api-pub.bitfinex.com/ws/2')
  ws.onopen = () => {
    ws.send(
      JSON.stringify({
        event: 'subscribe',
        channel: 'book',
        symbol: 'tBTCUSD',
        prec: toApiDTO(precision),
      })
    )
  }

  ws.onmessage = ({ data }) => {
    onmessageHandler({ data: toDomainInstanceDTO({ data, orderBook }) })
  }

  return { ws }
}

const toDomainInstanceDTO = ({ data, orderBook }) => {
  handleMessage({ data })

  function handleMessage({ data }) {
    const message = JSON.parse(data)

    if (Array.isArray(message)) {
      const bookData = message[1]

      if (Array.isArray(bookData[0])) {
        bookData.forEach(([price, count, amount]) => {
          updateOrderBook(price, count, amount)
        })
      } else {
        const [price, count, amount] = bookData
        updateOrderBook(price, count, amount)
      }
    }
  }

  function updateOrderBook(price, count, amount) {
    if (count === 0) {
      if (amount > 0) {
        delete orderBook.bids[price]
      } else {
        delete orderBook.asks[price]
      }
    } else {
      if (amount > 0) {
        orderBook.bids[price] = {
          count: count,
          amount: amount,
          total: price * amount,
          price: price,
        }
      } else {
        orderBook.asks[price] = {
          count: count,
          amount: -amount,
          total: price * -amount,
          price: price,
        }
      }
    }
  }

  return orderBook
}
