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

export const orderBookInitWS = ({ repository, dispatch, precision }) => {
  const onmessageHandler = ({ data }) =>
    dispatch(updateOrderbookAction({ payload: OrderbookService.createCollection({ data }) }))
  const { ws } = repository({ onmessageHandler, precision })
  WebSocketClient.handleClose(wsOrderBookSingleton)
  wsOrderBookSingleton = ws
}

export const useFetchOrderbookUseCase = ({ repository }) => {
  const dispatch = useDispatch()
  const orderbooks = useSelector(orderbookSelector)
  const precision = useSelector(precisionSelector)
  useEffect(() => {
    orderBookInitWS({ repository, dispatch, precision })
    return () => wsOrderBookSingleton.close()
  }, [])
  return { message: orderbooks }
}
