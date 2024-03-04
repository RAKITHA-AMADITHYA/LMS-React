import { Box, Grid,  } from '@mui/material'
import React from 'react'

function AssignmentCard() {
    return (
<Grid item className='gap-2'>
  <Box
    padding={1}
    sx={{
      bgcolor: 'white',
      borderColor: 'black',
      borderRadius: 4,
      height: "auto",
      boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.29)",
      margin: '8px', // Add margin here
    }}
  >
    <Grid container>
      <Grid item lg={10}>
        <h1 className='font-semibold text-xl text-orange-800' >Chemestry Assignment</h1>
      </Grid>
      <Grid item lg={2} flexDirection={'colunm'}>
        <h1 className='text-red-600 font-semibold'>Due On </h1>
        <h1 className='font-semibold'>08/01/2024 </h1>
      </Grid>
    </Grid>

    <Grid container mt={1}>
      <Grid item lg={10}>
        <h1 className='font-sans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun </h1>
      </Grid>
      <Grid item lg={2} flexDirection={'colunm'}>
        <h1 className='text-green-600 font-semibold'>Submitted </h1>
        <h1 className='font-semibold'>14</h1>
      </Grid>
    </Grid>
  </Box>
</Grid>


    )
}

export default AssignmentCard
