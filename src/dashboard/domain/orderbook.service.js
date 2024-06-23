export const OrderbookService = {
  createCollection: ({ data }) => {
    return Object.freeze(data)
  },
  initOrderBook: () => ({
    bids: {},
    asks: {},
  }),
  updatePrecision: ({ currentValue = 0, offset = 0 }) => {
    const updatedValue = currentValue + offset
    if (updatedValue < 0) return 0
    if (updatedValue > 5) return 5
    return updatedValue
  },
  checkIsLowerBounds: value => value === 0,
  checkIsUpperBounds: value => value === 5,
}
