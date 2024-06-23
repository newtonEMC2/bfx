import { OrderbookService } from '../domain/orderbook.service'

const UPDATE_ORDERBOOK = 'UPDATE_ORDERBOOK'
const UPDATE_PRECISION = 'UPDATE_PRECISION'

export const orderbookSelector = state => state.orderbook
export const precisionSelector = state => state.orderbook.precision

export const updateOrderbookAction = ({ payload }) => ({
  type: UPDATE_ORDERBOOK,
  payload,
})
export const decrementPrecision = () => ({
  type: UPDATE_PRECISION,
  payload: -1,
})
export const incrementPrecision = () => ({
  type: UPDATE_PRECISION,
  payload: 1,
})

export const orderbookMiddl = () => next => action => {
  if (action.type === UPDATE_ORDERBOOK) next(action)
  else if (action.type === UPDATE_PRECISION) next(action)
  else next(action)
}

export const orderbookReducer = (
  state = { precision: 0, ...OrderbookService.initOrderBook() },
  action
) => {
  switch (action.type) {
    case UPDATE_ORDERBOOK:
      return { ...state, asks: action.payload.asks, bids: action.payload.bids }

    case UPDATE_PRECISION:
      const precision = OrderbookService.updatePrecision({
        currentValue: state.precision,
        offset: action.payload,
      })
      return { ...OrderbookService.initOrderBook(), precision }

    default:
      return state
  }
}
