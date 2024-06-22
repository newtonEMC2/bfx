import { AppBar, Box, Toolbar, Typography, ButtonGroup, Button } from '@mui/material'
import React from 'react'
import {
  orderBookInitWS,
  wsOrderBookSingleton,
} from '../../../../../../dashboard/application/useFetchOrderbookUseCase'
import { WebSocketClient } from '../../../../services/websockets/client'
import { WebsocketBTCUSDorderbookRepository } from '../../../../services/websockets/repositories/orderbook/BTCUSD'
import { useDispatch } from 'react-redux'

export const MainHeader = () => {
  const dispatch = useDispatch()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BITFINEX
          </Typography>
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button
              onClick={() =>
                orderBookInitWS({ repository: WebsocketBTCUSDorderbookRepository, dispatch })
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
