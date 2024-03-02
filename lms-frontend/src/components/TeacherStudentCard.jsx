import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import UserImg from '../assets/images/2 copy.png'

function TeacherStudentCard(props) {
    return (
        <Link to={props.path} style={{ textDecoration: 'none' }}>
    
        <Box display={'flex'} justifyContent={'center'} padding={3}
          sx={{
            bgcolor: '#E16969',
            borderRadius: 4,
            ml:3,
            mt:4,
    
            flexDirection: 'column',
          
          }}
        >
          
        
            <Grid Item xs={12} sm={12} md={12} lg={12} xl={12} display={'flex'} justifyContent={'center'}>
              <img width='50%' src={UserImg} alt="" />
            </Grid>
            <Grid Item xs={12} sm={12} md={12} lg={12} xl={12} display={'flex'} justifyContent={'center'} alignItems={"center"}>
                {/* {props.teacher} */}

                <h1 className='text-md font-sans text-white'>Jagath Chandhana</h1>
            </Grid>
          
        </Box>
      </Link>
      )
}

export default TeacherStudentCard
