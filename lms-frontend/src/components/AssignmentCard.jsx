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
      <Grid item lg={9}>
        <h1>Lorem ipsum dolor sit amet</h1>
      </Grid>
      <Grid item lg={3} flexDirection={'colunm'}>
        <h1>Due On </h1>
        <h1>08/01/2024 </h1>
      </Grid>
    </Grid>

    <Grid container mt={2}>
      <Grid item lg={8}>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun </h1>
      </Grid>
      <Grid item lg={4} flexDirection={'colunm'}>
        <h1>Submitted Assignments</h1>
        <h1>14</h1>
      </Grid>
    </Grid>
  </Box>
</Grid>


    )
}

export default AssignmentCard
