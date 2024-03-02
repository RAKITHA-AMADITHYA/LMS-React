import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import AddIcon from '../assets/images/addIcon.png'
import { Link } from 'react-router-dom'

function CardNewAdding(props) {
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} margin={1}>
      <Link to={props.path} style={{ textDecoration: 'none' }}>
        <Box
          mt={5}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#e0e0e0',
            borderRadius: 4,
            height: {
              xs: 110,
              sm: 130,
              md: 110,
              lg: 130
            },
            width: {
              xs: 150,
              sm: 180,
              md: 150,
              lg: 170
            },
            flexDirection: 'column',
          }}
          onClick={props.onClick} // Add onClick prop here
        >
          <img src={AddIcon} width='50%' height='50%' alt="" />
          <h5 className='text-pretty text-xl'>{props.name}</h5>
        </Box>
      </Link>
    </Grid>
  )
}

export default CardNewAdding
