import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import { orderbookReducer, orderbookMiddl } from '../../../dashboard/infra/orderbook.slice'

const rootReducer = combineReducers({ orderbook: orderbookReducer })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = ({ initialData = {} } = {}) =>
  createStore(rootReducer, initialData, composeEnhancers(applyMiddleware(orderbookMiddl)))
