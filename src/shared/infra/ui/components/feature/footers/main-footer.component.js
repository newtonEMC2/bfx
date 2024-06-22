import React from 'react'
import { Box, Container, Typography, Link } from '@mui/material'

export const MainFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 2,
        position: 'fixed',
        bottom: 0,
        width: '100%',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary" align="center">
          {'© '}
          {new Date().getFullYear()}{' '}
          <Link color="inherit" href="https://www.bitfinex.com/">
            Bitfinex
          </Link>
          {'. All rights reserved.'}
        </Typography>
      </Container>
    </Box>
  )
}
