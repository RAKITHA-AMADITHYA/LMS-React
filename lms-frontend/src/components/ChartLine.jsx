import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function ChartLine() {
  const data = [
    { month: 'Jan', value: 2 },
    { month: 'Feb', value: 3 },
    { month: 'Mar', value: 5.5 },
    { month: 'Apr', value: 8.5 },
    { month: 'May', value: 1.5 },
    { month: 'Jun', value: 5 },
    { month: 'Jul', value: 1 },
    { month: 'Aug', value: 4 },
   
  ];

  return (
    <Grid item xs={12} sm={7} md={7} lg={7} xl={7} className='p-4'>
      <Box mt={1} display={'flex'} justifyContent={'center'} sx={{
        bgcolor: 'white',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        height:375,
        // maxHeight: 'calc(96vh - 60px)',
        scrollbarWidth: 'none', // Hide the scrollbar
        msOverflowStyle: 'none',
        boxShadow: '0 4px 6px rgba(0, 0, 1, 0.2)',
      }}>
        <Typography variant='h5'>Payment Details</Typography>

        <ResponsiveContainer width='100%' height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='month' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='value' stroke='#8884d8' activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Grid>
  );
}

export default ChartLine;
