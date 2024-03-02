import { Box, Grid, Typography } from '@mui/material'
// import { LineChart } from '@mui/x-charts/LineChart';
import React from 'react'

function ChartLine() {
  return (
    <Grid item xs={12} sm={7} md={7} lg={7} xl={7} className='p-4'>
    <Box mt={1} display={'flex'} justifyContent={'center'}
        sx={{
          bgcolor: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          
          overflowY: 'auto',
          maxHeight: 'calc(96vh - 60px)',
          scrollbarWidth: 'none', // Hide the scrollbar
          msOverflowStyle: 'none',
        }}
      >
          <Typography variant='h5'>Payment Details</Typography>


          {/* <LineChart 
      xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11] }]}
      series={[
        {
          data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
          showMark: ({ index }) => index % 2 === 0,
        },
      ]}
      width={500}
      height={300}
    /> */}

      </Box>
    </Grid>
  )
}

export default ChartLine
