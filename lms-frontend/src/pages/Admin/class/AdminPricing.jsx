import React, { useState, useEffect } from 'react';
import { Box, Grid, Button, TextField, Typography, Stack, FormControl, InputLabel, Select, MenuItem, TextareaAutosize } from '@mui/material';
import { Link } from 'react-router-dom';
import ClassInsideNavbar from './ClassInsideNavbar';
import MobileInsideNavbar from './MobileInsideNavbar';
import InputAdornment from '@mui/material/InputAdornment';

function AdminPricing() {
  const [theory, setTheory] = useState('');
  return (
    <div className='h-screen m-5'>
      <Box mt={2} sx={{
        bgcolor: 'white',
        borderRadius: 4,
        flexDirection: 'column',
        boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.29)"
      }}>
        <Grid container>
          <ClassInsideNavbar />

          {/* Right side content */}
          <Grid item xs={12} sm={12} md={12} lg={9}>
            <MobileInsideNavbar />

            <Box padding={1}>
              <Grid item xs={12} sm={12} md={12} lg={12} margin={1}>
                <Typography variant='h4'>Pricing</Typography>
              </Grid>
              <Grid item lg={12} padding={1}>
                <Typography variant='subtitle1'>Unlocking Affordable Excellence.</Typography>
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
                <TextField
                  label="Price"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: '25ch' }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">Rs.</InputAdornment>,
                  }}
                />


                <FormControl fullWidth sx={{ minWidth: 300 }}>
                  <InputLabel id="demo-simple-select-label">Choose</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={theory}
                    label="Frequency"
                    onChange={(e) => setTheory(e.target.value)}
                  >
                    <MenuItem value={'Daily'}>Per Session</MenuItem>
                    <MenuItem value={'Weekly'}>Per Week</MenuItem>
                    <MenuItem value={'Monthly'}>Per Month</MenuItem>
                    <MenuItem value={'Monthly'}>Other</MenuItem>

                  </Select>
                </FormControl>

              </Box>



              <Grid item xs={12} sm={12} md={12} lg={12} display={'flex'} justifyContent={'start'} margin={1} mt={32}>
                <Stack spacing={2} direction="row">
                  <Link to="/admin/new-class/date-time" style={{ textDecoration: 'none', color: 'inherit' }}>

                    <Button variant="outlined">Previous Page</Button>
                  </Link>

                  <Link to="/admin/new-class/review-publish" style={{ textDecoration: 'none', color: 'inherit' }}>

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

export default AdminPricing
