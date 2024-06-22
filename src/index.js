import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './shared/infra/store/store'
import { CssBaseline } from '@mui/material'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <CssBaseline />
    <Provider store={store()}>
      <App />
    </Provider>
  </React.StrictMode>
)
