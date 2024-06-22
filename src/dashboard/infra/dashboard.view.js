import React from 'react'
import {
  SideBarLayout,
  Slots,
} from '../../shared/infra/ui/components/core/sidebar-layout.component'
import { MainHeader } from '../../shared/infra/ui/components/feature/headers/main-header.component'
import { MainFooter } from '../../shared/infra/ui/components/feature/footers/main-footer.component'
import { Toolbar } from '@mui/material'
import { WebsocketBTCUSDorderbookRepository } from '../../shared/infra/services/websockets/repositories/orderbook/BTCUSD'
import { useFetchOrderbookUseCase } from '../application/useFetchOrderbookUseCase'
import OrdersbookTable from './orderbooks-table'

export const Dashboard = () => {
  return (
    <SideBarLayout>
      <SideBarLayout.Slot slot={Slots.HEADER}>
        <MainHeader></MainHeader>
      </SideBarLayout.Slot>
      <SideBarLayout.Slot slot={Slots.CONTENT}>
        <Content></Content>
      </SideBarLayout.Slot>
      <SideBarLayout.Slot slot={Slots.FOOTER}>
        <MainFooter></MainFooter>
      </SideBarLayout.Slot>
    </SideBarLayout>
  )
}

const Content = () => {
  const orderbookAPI = useFetchOrderbookUseCase({
    repository: WebsocketBTCUSDorderbookRepository,
  })

  return (
    <Toolbar className="App">
      <div>
        <h4>asks</h4>
        <OrdersbookTable data={orderbookAPI.message.bids}></OrdersbookTable>
      </div>
      <div>
        <h4>bids</h4>
        <OrdersbookTable data={orderbookAPI.message.asks}></OrdersbookTable>
      </div>
    </Toolbar>
  )
}
