import { OrderbookService } from '../domain/orderbook.service'
import { decrementPrecision, incrementPrecision } from '../infra/orderbook.slice'
import { orderBookInitWS } from './useFetchOrderbookUseCase'

export const useIncreasePrecision = ({ dispatch, repository, precision }) => {
  dispatch(incrementPrecision())
  orderBookInitWS({ repository, dispatch, precision, orderBook: OrderbookService.initOrderBook() })
}

export const useDecreasePrecision = ({ dispatch, repository, precision }) => {
  dispatch(decrementPrecision())
  orderBookInitWS({
    repository,
    dispatch,
    precision,
    orderBook: OrderbookService.initOrderBook(),
  })
}
