import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

export default function OrdersbookTable({ data }) {
  if (!data) return <></>
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>Count</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(data).map(row => (
            <TableRow key={row.name}>
              <TableCell align="right">{data[row].count}</TableCell>
              <TableCell align="right">{data[row].amount}</TableCell>
              <TableCell align="right">{data[row].total}</TableCell>
              <TableCell align="right">{data[row].price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
