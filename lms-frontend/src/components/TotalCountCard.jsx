import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function TotalCountCard({ ...props }) {
  return (
      
      <Box display={'flex'} justifyContent={'center'}
        sx={{
          bgcolor: '#E16969',
          color: '#fff',
          borderRadius: 2,
          flexDirection: 'column',
          height:100,
          mt:5
        }}
      >
        <Grid item lg={12} display={'flex'} justifyContent={'center'} height={45} mt={2}>
          <h1 className='text-5xl'>{props.total}</h1>
        </Grid>
        <Grid item lg={12} display={'flex'} justifyContent={'center'} >
          <h5 className='text-xl'> {props.name}</h5>
        </Grid>

      </Box>
  )
}

export default TotalCountCard
