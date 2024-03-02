import React from 'react'
import { Box, Grid, Typography } from '@mui/material'


function Calender() {
  return (
    
         <Grid item xs={12} sm={5} md={5} lg={5} xl={5} className='p-4'>
         <Box mt={1}
          sx={{
            bgcolor: 'white',
            display: 'flex',
            flexDirection: 'column',
            
      
          }}
        >
            <Typography variant='h5'>Calender</Typography>

            
        </Box>
      </Grid>
    
  )
}

export default Calender
