import React, { useState } from 'react';
import { Box, Grid, Button, TextField, Typography, Stack, Checkbox, FormControlLabel } from '@mui/material';
import { Link } from 'react-router-dom';
import AssignmentNavbar from './components/AssignmentNavbar';
import AssignmentMobileNavbar from './components/AssignmentMobileNav';

function AssignmentSchedule() {
  const [startDate, setStartDate] = useState(new Date().toISOString().slice(0, 10));
  const [startTime, setStartTime] = useState(new Date().toTimeString().slice(0, 5));
  const [closingDate, setClosingDate] = useState(new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().slice(0, 10));
  const [closingTime, setClosingTime] = useState(new Date().toTimeString().slice(0, 5));
  const [checked, setChecked] = useState(false);

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
                <Typography variant='h4'>Schedule</Typography>
              </Grid>
              <Grid item lg={12} padding={1}>
                <Typography variant='subtitle1'>Setting the Course with New Assignment Schedules!</Typography>
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
                  id="starting-date"
                  label="Starting Date"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="starting-time"
                  label="Starting Time"
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, 
                  }}
                />
                <TextField
                  id="closing-date"
                  label="Closing Date"
                  type="date"
                  value={closingDate}
                  onChange={(e) => setClosingDate(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    min: new Date().toISOString().slice(0, 10),
                  }}
                />
                <TextField
                  id="closing-time"
                  label="Closing Time"
                  type="time"
                  value={closingTime}
                  onChange={(e) => setClosingTime(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                />
                <FormControlLabel
                  control={<Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />}
                  label="Accept late submissions"
                />
              </Box>

              <Grid item xs={12} sm={12} md={12} lg={12} display={'flex'} justifyContent={'start'} margin={1} mt={10}>
                <Stack spacing={2} direction="row">
                <Link to="/admin/assignment/overview" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button variant="outlined">previous Page</Button>
                  </Link>
                  <Link to="/admin/assignment/review" style={{ textDecoration: 'none', color: 'inherit' }}>
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

export default AssignmentSchedule;
