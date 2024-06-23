const UPDATE_ORDERBOOK = 'UPDATE_ORDERBOOK'
const INCREMENT_PRECISION = 'INCREMENT_PRECISION'
const DECREMENT_PRECISION = 'DECREMENT_PRECISION'

export const orderbookSelector = state => state.orderbook
export const precisionSelector = state => state.precision

export const updateOrderbookAction = ({ payload }) => ({
  type: UPDATE_ORDERBOOK,
  payload,
})
export const decrementPrecision = () => ({
  type: DECREMENT_PRECISION,
  payload: -1,
})
export const incrementPrecision = () => ({
  type: INCREMENT_PRECISION,
  payload: 1,
})

export const orderbookMiddl = () => next => action => {
  if (action.type === UPDATE_ORDERBOOK) next(action)
  else if (action.type === INCREMENT_PRECISION) next(action)
  else if (action.type === DECREMENT_PRECISION) next(action)
  else next(action)
}

export const orderbookReducer = (state = { precision: 2, asks: {}, bids: {} }, action) => {
  switch (action.type) {
    case UPDATE_ORDERBOOK:
      return { ...state, ...action.payload }

    case INCREMENT_PRECISION:
      return { ...state, precision: state.precision + action.payload }

    case DECREMENT_PRECISION:
      return { ...state, precision: state.precision + action.payload }

    default:
      return state
  }
}
