import { useDispatch } from 'react-redux'
import { decrementPrecision, incrementPrecision } from '../infra/orderbook.slice'

export const useIncreasePrecision = ({ dispatch, repository }) => {
  dispatch(incrementPrecision())
  //   orderBookInitWS({ repository: WebsocketBTCUSDorderbookRepository, dispatch })
}

export const useDecreasePrecision = ({ dispatch, repository }) => {
  dispatch(decrementPrecision())
  //   orderBookInitWS({ repository: WebsocketBTCUSDorderbookRepository, dispatch })
}
