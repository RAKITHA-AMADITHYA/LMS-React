import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import UserImg from '../assets/images/2 copy.png'

function ClassViewCard(props) {
  return (
    <Link to={props.path} style={{ textDecoration: 'none' }}>

    <Box display={'flex'} justifyContent={'center'}
      sx={{
        bgcolor: '#E16969',
        borderRadius: 4,
        ml:3,
        mt:4,

        flexDirection: 'column',
      
      }}
    >
      <Grid Item md={12} padding={1} >
        <h1 className='text-2xl font-serif text-white' >{props.subject}</h1>
      </Grid>
      <Grid Item md={12}  padding={1}
       
      >
        <h1 className='text-lg font-serif  text-white'>Grade {props.grade}</h1>
      </Grid>
      <Grid container>
        <Grid Item xs={6} sm={5} md={4} lg={6} display={'flex'} justifyContent={'center'}>
          <img width='50%' src={UserImg} alt="" />
        </Grid>
        <Grid xs={6} sm={7} md={8} Item lg={6} display={'flex'} justifyContent={'center'} alignItems={"center"}>
          <Typography variant='h5'  fontSize={15} color={'white'} >{props.teacher}</Typography>
        </Grid>
      </Grid>
    </Box>
  </Link>
  )
}

export default ClassViewCard
