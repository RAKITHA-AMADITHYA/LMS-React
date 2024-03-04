import React, { useState } from 'react';
import { Box, Grid, Button, TextField, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import AssignmentNavbar from './components/AssignmentNavbar';
import AssignmentMobileNavbar from './components/AssignmentMobileNav'

function AssignmentOverview() {
 


  return (
    <div className='h-screen m-5'>
      <Box mt={2} sx={{
        bgcolor: 'white',
        borderRadius: 4,
        flexDirection: 'column',
        boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.29)"
      }}>
        <Grid container>
          <AssignmentNavbar/>

          {/* Right side content */}
          <Grid item xs={12} sm={12} md={12} lg={9}>
          <AssignmentMobileNavbar/>

            <Box padding={1}>
              <Grid item xs={12} sm={12} md={12} lg={12} margin={1}>
                <Typography variant='h4'>Overview</Typography>
              </Grid>
              <Grid item lg={12} padding={1}>
                <Typography variant='subtitle1'>Empowerment Through Assignments.</Typography>
              </Grid>

              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '40ch' },
                }}
                noValidate
                autoComplete="off"
                mt={5}
              >
            

                <TextField id="outlined-basic" label="Title" variant="outlined" />
                <TextField id="outlined-basic" label="Lesson topic" variant="outlined" />
               
           
                <TextField
                  id="outlined-multiline-flexible"
                  label="Description"
                  multiline
                  rows={4}
                  variant="outlined"
                />

                <Button
                  variant="contained"
                  component="label"
                >
                  Upload Files
                  <input
                    type="file"
                    hidden
                  />
                </Button>
              </Box>

              

              <Grid item xs={12} sm={12} md={12} lg={12} display={'flex'} justifyContent={'start'} margin={1} mt={10}>
                <Stack spacing={2} direction="row">

                <Link to="/admin/assignment/schedule" style={{ textDecoration: 'none', color: 'inherit' }}>

                  <Button variant="contained">Next Page</Button>
                </Link>
                </Stack>
              </Grid>

            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default AssignmentOverview
