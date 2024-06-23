import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  orderbookSelector,
  precisionSelector,
  updateOrderbookAction,
} from '../infra/orderbook.slice'
import { OrderbookService } from '../domain/orderbook.service'
import { WebSocketClient } from '../../shared/infra/services/websockets/client'

export let wsOrderBookSingleton = null

export const orderBookInitWS = ({ repository, dispatch, precision, orderBook }) => {
  const onmessageHandler = ({ data }) =>
    dispatch(updateOrderbookAction({ payload: OrderbookService.createCollection({ data }) }))
  const { ws } = repository({ onmessageHandler, precision, orderBook })
  WebSocketClient.handleClose(wsOrderBookSingleton)
  wsOrderBookSingleton = ws
}

export const useFetchOrderbookUseCase = ({ repository }) => {
  const dispatch = useDispatch()
  const orderbooks = useSelector(orderbookSelector)
  const precision = useSelector(precisionSelector)
  useEffect(() => {
    orderBookInitWS({
      repository,
      dispatch,
      precision,
      orderBook: OrderbookService.initOrderBook(),
    })
    return () => wsOrderBookSingleton.close()
  }, [])
  return { message: orderbooks }
}
