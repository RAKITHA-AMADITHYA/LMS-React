import React, { useState, useEffect } from 'react';
import { Box, Grid, Button, TextField, Typography, Stack, FormControl, InputLabel, Select, MenuItem, TextareaAutosize } from '@mui/material';
import { Link } from 'react-router-dom';
import ClassInsideNavbar from './ClassInsideNavbar';
import MobileInsideNavbar from './MobileInsideNavbar';

function AdminDateTime() {
  const [theory, setTheory] = useState('');

  const defaultDate = new Date().toISOString().split('T')[0];
  const defaultTime = new Date().toTimeString().slice(0, 5);

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
                <Typography variant='h4'>Date & Time</Typography>
              </Grid>
              <Grid item lg={12} padding={1}>
                <Typography variant='subtitle1'>Schedule a Learning Journey Today!</Typography>
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
                  type='date'
                  defaultValue={defaultDate}
                />

                <TextField
                  type='time'
                  defaultValue={defaultTime}
                />


                <FormControl fullWidth sx={{ minWidth: 300 }}>
                  <InputLabel id="demo-simple-select-label">Frequency</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={theory}
                    label="Frequency"
                    onChange={(e) => setTheory(e.target.value)}
                  >
                    <MenuItem value={'Daily'}>Daily</MenuItem>
                    <MenuItem value={'Weekly'}>Weekly</MenuItem>
                    <MenuItem value={'Monthly'}>Monthly</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  id="outlined-multiline-flexible"
                  label="Link"
                  multiline
                  variant="outlined"
                />

                <Button
                  variant="contained"
                  component="label"
                >
                  Add
                  <input
                    type="file"
                    hidden
                  />
                </Button>
              </Box>



              <Grid item xs={12} sm={12} md={12} lg={12} display={'flex'} justifyContent={'start'} margin={1} mt={16}>
                <Stack spacing={2} direction="row">
                  <Link to="/admin/new-class/grade-subject" style={{ textDecoration: 'none', color: 'inherit' }}>

                    <Button variant="outlined">Previous Page</Button>
                  </Link>

                  <Link to="/admin/new-class/pricing" style={{ textDecoration: 'none', color: 'inherit' }}>

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

export default AdminDateTime;
