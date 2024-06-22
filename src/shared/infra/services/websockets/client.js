export const WebSocketClient = WebSocket
WebSocketClient.handleClose = ws => {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.close()
  }
}
