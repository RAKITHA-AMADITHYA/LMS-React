import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function ClassTodayCard(...props) {
  return (
    
        <Box padding={1} mt={2} 
                      sx={{
                        bgcolor: '#bdbdbd',
                        borderRadius: 4,
                      }}
                    >


                      {/* Sub And  Date */}
                      <Grid container >
                        <Grid item md={10} lg={9}   >
                          <Typography variant="subtitle2" sx={{ fontSize: { md: '22px', lg: '24px' } }}  >
                            {props.subject} Commerce</Typography>

                        </Grid>
                        {/* Date */}
                        <Grid item md={4} lg={3} display={'flex'} justifyContent={'center'} alignItems={'center'}  >
                          <Typography variant="subtitle2" sx={{ fontSize: { md: '18px', lg: '18px' } }} >
                            {props.date}2003/03/30</Typography>

                        </Grid>
                      </Grid>

                      {/* Grade  */}

                      <Grid item xs={12} sm={12} height={40} >
                        <Typography variant="subtitle2" sx={{ fontSize: { md: '18px', lg: '15px' } }} >
                          {props.grade} Grade 12</Typography>


                      </Grid>
                      {/* Teacher Name */}
                      <Grid container >
                        <Grid item md={8} lg={8}  >
                          <Typography variant="subtitle2" sx={{
                            fontSize: {
                              md: '16px',
                              lg: '14px',
                            }
                          }} >
                            {props.teacher} Mihin Liyanaaratchi</Typography>

                          {/* Time */}
                        </Grid>
                        <Grid item md={4} lg={4} display={'flex'} justifyContent={'center'} alignItems={'center'} >
                          <Typography variant="subtitle2" sx={{ fontSize: { md: '16px', lg: '14px' } }} >
                            {props.time} 6.00 P.M</Typography>

                        </Grid>
                      </Grid>
                    </Box>
    
  )
}

export default ClassTodayCard
