import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import StudentInfoCard from './StudentInfoCard'
import ClassViewCard from '../../../components/ClassViewCard'

function AdminStudentInfo() {
    return (
        <Grid container lg={12} >
          
         
            
              <Grid container xs={12} position={'relative'} margin={3} >
                {/* Left side  */}
    
    
                <StudentInfoCard
                  name='Jagath Chandhana'
                  email='jagathchandhana1@gmail.com'
                  contact='0123456789'
                  address='Kaluthara'
                />
    
    
    
    
                {/* Right side container */}
    
                <Grid item xs={12} sm={5} md={4} lg={7} display={'flex'} ml={2} >
    
    
                  <Grid item lg={12} >
    
                   <h1 className='text-2xl font-semibold'>Enrolled Classes</h1>
                    <Box
                      sx={{
                        height: 460,
                        width: '100%',
                        overflowY: 'auto',
                        '&::-webkit-scrollbar': {
                          display: 'none',
                        },
                        scrollbarWidth: 'none',
                        padding: 2,
                        boxShadow: 'none',
                        display: 'flex',
                      }}
                    >
    
                      <Grid container xs={12} >
    
                      <ClassViewCard subject="Commerce" grade="12" teacher="Jagath Chandhana" path="/admin/view-class"/>
                      <ClassViewCard subject="Commerce" grade="12" teacher="Jagath Chandhana" path="/admin/view-class"/>
                      <ClassViewCard subject="Commerce" grade="12" teacher="Jagath Chandhana" path="/admin/view-class"/>
                      <ClassViewCard subject="Commerce" grade="12" teacher="Jagath Chandhana" path="/admin/view-class"/>
                      <ClassViewCard subject="Commerce" grade="12" teacher="Jagath Chandhana" path="/admin/view-class"/>
                      <ClassViewCard subject="Commerce" grade="12" teacher="Jagath Chandhana" path="/admin/view-class"/>
                      <ClassViewCard subject="Commerce" grade="12" teacher="Jagath Chandhana" path="/admin/view-class"/>
                      <ClassViewCard subject="Commerce" grade="12" teacher="Jagath Chandhana" path="/admin/view-class"/>

                      </Grid>
                    </Box>
    
                  </Grid>
    
                </Grid>
              </Grid>
    
    
            
          
        </Grid >
      )
}

export default AdminStudentInfo
