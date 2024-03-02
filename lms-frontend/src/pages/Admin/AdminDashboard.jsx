import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import Calender from '../../components/Calender'
import ChartLine from '../../components/ChartLine'
import ClassTodayCard from '../../components/ClassTodayCard'
import TotalCountCard from '../../components/TotalCountCard'
import ChartPie from '../../components/ChartPie'
function AdminDashboard() {
  return (
    <div>
<Paper style={{ maxHeight: 'calc(100vh - 64px)', overflow: 'auto', scrollbarWidth: 'none', /* Firefox */ '-ms-overflow-style': 'none', /* IE 11 */ '&::-webkit-scrollbar': { display: 'none' } }}>

      <Grid container className='h-screen' >
        <Calender />
        <ChartLine />
        
        
  <Grid item xs={5} sm={5} md={5} lg={5} xl={5} className='p-4' flexDirection={'column'}>
    <Typography variant='h5'>Class Today</Typography>  
    <Paper style={{ overflow: 'auto', maxHeight: 270, scrollbarWidth:'none' , border:'none' ,boxShadow:'none'}}>
    <ClassTodayCard />
    <ClassTodayCard />
    <ClassTodayCard />
</Paper>
  </Grid>

        <Grid item xs={12} sm={4} md={4} lg={3} xl={3} className='p-4' flexDirection={'column'} display={'flex'} >
          
          <TotalCountCard total="750" name="Students" />
          <TotalCountCard total="45" name="Teachers" />
          <TotalCountCard total="67" name="Classes" />
        </Grid>
        <ChartPie />
      </Grid>
      </Paper>

    </div>
  )
}

export default AdminDashboard
