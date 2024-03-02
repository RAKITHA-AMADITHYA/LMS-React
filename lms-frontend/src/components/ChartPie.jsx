import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

function ChartPie() {
  const data = [
    { id: 0, value: 62, label: 'Success' },
    { id: 1, value: 13, label: 'Pending' },
    { id: 2, value: 23, label: 'Cancelling' },
  ];

  return (

    <Grid item xs={12} sm={12} md={12} lg={4} xl={4} className='p-2'>
      <Box padding={1}mt={5}
          sx={{
            bgcolor: 'White',
            borderRadius: 4,
            boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.29)",
            
          }}
        >
       

       <Typography variant='h5'>Class Today</Typography>  

          {/* Sub And  Date */}
          <PieChart
            series={[
              {
                data,
                highlightScope: { faded: 'global', highlighted: 'item' },
                faded: { innerRadius: 30, additionalRadius: -10, color: 'gray' },
              },
            ]}
            height={200}
          />

        </Box>

    </Grid>
  )
}

export default ChartPie
