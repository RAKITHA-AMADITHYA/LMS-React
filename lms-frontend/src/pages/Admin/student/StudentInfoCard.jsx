import { Box, Button, Grid, Typography } from '@mui/material'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DeleteIcon from '@mui/icons-material/Delete';
import img2 from '../../../assets/images/2 copy.png'

function StudentInfoCard(props) {
    return (
        
        

            <Box
                sx={{

                    bgcolor: '#e0e0e0 ',
                    borderRadius: 4,
                    flexDirection: 'column',
                }}
            >
                <Grid item xs={12} mt={2} display={'flex'} justifyContent={'center'}> <img src={img2} width={50} alt="" />  </Grid>
                <Grid item xs={12} display={'flex'} justifyContent={'center'}> <Typography variant='h6' fontSize={18} fontWeight={500}>
                    {props.name} 
                </Typography>  </Grid>


                {/* Email container */}
                <Grid container xs={12} mt={3}  >
                    <Grid item xs={2} display={'flex'} justifyContent={'center'} height={40} alignItems={'center'} color={'gray'} >
                        <EmailRoundedIcon />
                    </Grid>
                    <Grid item xs={10} display={'flex'} justifyContent={'center'} alignItems={'center'} height={40}>
                        <Grid item xs={12}>
                           <h1 className='text-lg font-sans'>Email</h1>
                            <Typography  fontSize={14} variant='subtitle2' fontWeight={600}>
                                {props.email}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                {/*Contact container */}
                <Grid container xs={12} mt={2}>
                    <Grid item xs={2} display={'flex'} justifyContent={'center'} height={40} alignItems={'center'} color={'gray'} >
                        <LocalPhoneOutlinedIcon />
                    </Grid>
                    <Grid item xs={10} display={'flex'} justifyContent={'center'} alignItems={'center'} height={40}>
                        <Grid item xs={12}>
                            <Typography height={25}  variant='subtitle1' fontWeight={500} >Phone</Typography>
                            <Typography  fontSize={14} variant='subtitle2' fontWeight={600}>
                                {props.contact}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid container xs={12} mt={2}>
                    <Grid item xs={2} display={'flex'} justifyContent={'center'} height={40} alignItems={'center'} color={'gray'} >
                        <LocationOnIcon />
                    </Grid>
                    <Grid item xs={10} display={'flex'} justifyContent={'center'} alignItems={'center'} height={40}>
                        <Grid item xs={12}>
                            <Typography height={25}  variant='subtitle1' fontWeight={500} >Address</Typography>
                            <Typography  fontSize={14} variant='subtitle2' fontWeight={600}>
                                {props.address}                      </Typography>
                        </Grid>
                    </Grid>
                </Grid>







                <Grid item xs={12} display={'flex'} justifyContent={'center'} mt={10} >
                    <Button style={{ color: '#E16969' }} variant="outlined" startIcon={<DeleteIcon />}>
                        Remove Student
                    </Button>
                </Grid>


            <Grid item lg={12}  mt={6}>

            <Box
                sx={{

                    bgcolor: 'white',
                    borderRadius: 4,
                    height: {
                        xs: 610,
                        sm: 730,
                        md: 550,
                        lg: 100
                    },
                    width: {
                        xs: 400,
                        sm: 400,
                        md: 400,
                        lg: 350,
                        xl: 400

                    },
                    flexDirection: 'column',
                    boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.29)"
                }}
            >
            <Grid container display={'flex'} justifyContent={'center'} alignItems={'center'} >
                <Grid item lg={6} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'center'} height={100}>
                <Typography height={25}  variant='subtitle1'  >Last Payment</Typography>
                            <Typography   variant='subtitle1' fontWeight={600}>
                                      12/03/2024 </Typography>

                </Grid>
                <Grid item lg={6} flexDirection={'column'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Typography height={25} variant='subtitle1'  >Pending Payments</Typography>
                            <Typography fontSize={14} color={'red'} variant='subtitle2' fontWeight={600}>
                                      Yes </Typography>
                </Grid>

            </Grid>


            </Box>


            </Grid>
            
            </Box>




       
    )
}

export default StudentInfoCard
