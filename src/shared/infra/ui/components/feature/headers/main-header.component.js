import { AppBar, Box, Toolbar, Typography, ButtonGroup, Button } from '@mui/material'
import React from 'react'
import {
  orderBookInitWS,
  wsOrderBookSingleton,
} from '../../../../../../dashboard/application/useFetchOrderbookUseCase'
import { WebSocketClient } from '../../../../services/websockets/client'
import { WebsocketBTCUSDorderbookRepository } from '../../../../services/websockets/repositories/orderbook/BTCUSD'
import { useDispatch, useSelector } from 'react-redux'
import {
  useDecreasePrecision,
  useIncreasePrecision,
} from '../../../../../../dashboard/application/useOrderBookPrecisionUseCase'
import {
  decrementPrecision,
  incrementPrecision,
  precisionSelector,
} from '../../../../../../dashboard/infra/orderbook.slice'
import { OrderbookService } from '../../../../../../dashboard/domain/orderbook.service'

export const MainHeader = () => {
  const dispatch = useDispatch()
  const precision = useSelector(precisionSelector)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BITFINEX
          </Typography>
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button
              disabled={OrderbookService.checkIsLowerBounds(precision)}
              onClick={() =>
                useDecreasePrecision({
                  repository: WebsocketBTCUSDorderbookRepository,
                  dispatch,
                  precision: OrderbookService.updatePrecision({
                    offset: decrementPrecision().payload,
                    currentValue: precision,
                  }),
                })
              }
            >
              decrease precision
            </Button>
            <Button
              disabled={OrderbookService.checkIsUpperBounds(precision)}
              onClick={() =>
                useIncreasePrecision({
                  repository: WebsocketBTCUSDorderbookRepository,
                  dispatch,
                  precision: OrderbookService.updatePrecision({
                    offset: incrementPrecision().payload,
                    currentValue: precision,
                  }),
                })
              }
            >
              increase precision
            </Button>
          </ButtonGroup>
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button
              onClick={() =>
                orderBookInitWS({
                  repository: WebsocketBTCUSDorderbookRepository,
                  dispatch,
                  orderBook: OrderbookService.initOrderBook(),
                })
              }
            >
              Connect
            </Button>
            <Button onClick={() => WebSocketClient.handleClose(wsOrderBookSingleton)}>
              Disconnect
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
