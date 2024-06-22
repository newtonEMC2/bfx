const UPDATE_ORDERBOOK = 'UPDATE_ORDERBOOK'

export const orderbookSelector = state => state.orderbook

export const updateOrderbookAction = ({ payload }) => ({
  type: UPDATE_ORDERBOOK,
  payload,
})

export const orderbookMiddl = () => next => action => {
  if (action.type === UPDATE_ORDERBOOK) {
    next(action)
  } else next(action)
}

export const orderbookReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ORDERBOOK:
      return { ...action.payload }

    default:
      return state
  }
}
