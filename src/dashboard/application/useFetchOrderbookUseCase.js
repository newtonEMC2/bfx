import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderbookSelector, updateOrderbookAction } from '../infra/orderbook.slice'
import { OrderbookService } from '../domain/orderbook.service'

export let wsOrderBookSingleton = null

export const orderBookInitWS = ({ repository, dispatch }) => {
  const onmessageHandler = ({ data }) =>
    dispatch(updateOrderbookAction({ payload: OrderbookService.createCollection({ data }) }))
  const { ws } = repository({ onmessageHandler })
  wsOrderBookSingleton = ws
}

export const useFetchOrderbookUseCase = ({ repository }) => {
  const dispatch = useDispatch()
  const orderbooks = useSelector(orderbookSelector)
  useEffect(() => {
    orderBookInitWS({ repository, dispatch })
    return () => wsOrderBookSingleton.close()
  }, [])
  return { message: orderbooks }
}
