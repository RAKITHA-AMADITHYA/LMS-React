import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Calender() {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <Grid item xs={12} sm={5} md={5} lg={5} xl={5} className='p-4'>
      <Box mt={1} sx={{
        bgcolor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 1, 0.2)',
      }}>
        <Typography variant='h5' sx={{ marginBottom: '20px' }}>
          <CalendarTodayIcon sx={{ marginRight: '10px' }} />
          Calendar
        </Typography>
        <Calendar
          onChange={onChange}
          value={date}
        />
      </Box>
    </Grid>
  );
}

export default Calender;

