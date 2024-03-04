import { Box, Button, Grid, Typography } from '@mui/material'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import DeleteIcon from '@mui/icons-material/Delete';
import img2 from '../../../assets/images/2 copy.png'

function TeacherInfoCard(props) {
  return (
    <Grid item xs={12} sm={5} md={4} lg={4} display={'flex'} ml={2} >

              <Box
                sx={{

                  bgcolor: '#e0e0e0 ',
                  borderRadius: 4,
                  flexDirection: 'column',
                }}
              >
                <Grid item xs={12} mt={2} display={'flex'} justifyContent={'center'}> <img src={img2} width={50} alt="" />  </Grid>
                <Grid item xs={12} display={'flex'} justifyContent={'center'}> <Typography variant='h6'  fontSize={18}>{props.name} </Typography>  </Grid>
                <Grid item xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'}> <Typography variant='subtitle1' fontSize={12} margin={2} fontWeight={300} height={75}>
                    {props.description} 
                    </Typography>  </Grid>

                {/* Email container */}
                <Grid container xs={12}  >
                  <Grid item xs={2} display={'flex'} justifyContent={'center'} height={40} alignItems={'center'} className='text-blue-500' >
                    <EmailRoundedIcon />
                  </Grid>
                  <Grid item xs={10} display={'flex'} justifyContent={'center'} alignItems={'center'} height={40}>
                    <Grid item xs={12}>
                        <h1 className='font-semibold'>Email</h1>  
                    <Typography fontFamily={'initial'} fontSize={14} variant='subtitle2' fontWeight={500}>
                        {props.email}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                {/*Contact container */}
                <Grid container xs={12} mt={2}>
                  <Grid item xs={2} display={'flex'} justifyContent={'center'} height={40} alignItems={'center'} className='text-green-600' >
                    <LocalPhoneOutlinedIcon />
                  </Grid>
                  <Grid item xs={10} display={'flex'} justifyContent={'center'} alignItems={'center'} height={40}>
                    <Grid item xs={12}>
                    <h1 className='font-semibold'>Phone</h1>  
                      <Typography fontFamily={'revert'} fontSize={14} variant='subtitle2' fontWeight={500}>
                        {props.contact}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>


                <Grid container xs={12} mt={2}>
                  <Grid item xs={2} display={'flex'} justifyContent={'center'} height={40} alignItems={'center'} className='text-purple-600' >
                    <SchoolOutlinedIcon />
                  </Grid>
                  <Grid item xs={10} display={'flex'} justifyContent={'center'} alignItems={'center'} height={40}>
                    <Grid item xs={12}>
                    <h1 className='font-semibold'>Education</h1>  

                      <Typography fontFamily={'revert'} fontSize={14} variant='subtitle2' fontWeight={500}>
                        {props.education}          
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>



                <Grid container xs={12} mt={2} >
                  <Grid item xs={2} display={'flex'} justifyContent={'center'} height={40} alignItems={'center'} color={'gray'} >
                    <AccessTimeOutlinedIcon />
                  </Grid>
                  <Grid item xs={10} display={'flex'} justifyContent={'center'} alignItems={'center'} height={40}>
                    <Grid item xs={12}>
                    <h1 className='font-semibold'>Experience</h1>  
                      <Typography fontFamily={'revert'} fontSize={14} variant='subtitle2' fontWeight={500}>
                    {props.experience}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid container xs={12} mt={2} >
                  <Grid item xs={2} display={'flex'} justifyContent={'center'} height={40} alignItems={'center'} className='text-yellow-600' >
                    <StarBorderPurple500Icon />
                  </Grid>
                  <Grid item xs={10} display={'flex'} justifyContent={'center'} alignItems={'center'} height={40}>
                    <Grid item xs={12}>
                    <h1 className='font-semibold'>Ratings</h1>  
                      <Typography fontFamily={'revert'} fontSize={14} variant='subtitle2' fontWeight={500}>
                        {props .rating} out of 5
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} display={'flex'} justifyContent={'center'} mt={2} >
                  <Button  style={{ color: '#E16969' }} variant="outlined" startIcon={<DeleteIcon />}>
                    Remove teacher
                  </Button>
                </Grid>

                  
              </Box>


            </Grid>
  )
}

export default TeacherInfoCard
