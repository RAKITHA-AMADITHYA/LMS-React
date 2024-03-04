import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import EditNoteIcon from '@mui/icons-material/EditNote';
import UserImg from '../../../assets/images/2 copy.png'
import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';

import PDFIcon from '../../../assets/images/pdf.png'
import { Link } from 'react-router-dom';
import AssignmentCard from '../../../components/AssignmentCard';

function AdminViewClassInfo() {
    return (
        <div className='h-screen'>
            {/* left Side -Nav Bar */}


            {/* Top bar */}

            <Grid container m={2} gap={1} >

                {/* Card 1 */}
                <Grid item xs={12} sm={12} md={12} lg={5} display={'flex'} justifyContent={'center'} >
                    <Box padding={1}
                        sx={{
                            bgcolor: '#eceff1',
                            borderRadius: 4,


                        }}
                    >
                        {/* Row 1 */}
                        <Grid container>
                            <Grid item xs={7} sm={7} md={7} lg={7}>
                                <Typography variant="subtitle2" sx={{ fontSize: { xs: '28px', sm: '28px', md: '28px', lg: '24px' } }}  >
                                    Commerce</Typography>

                            </Grid>

                            <Grid item xs={3} sm={3} md={3} lg={3}>
                                <Box padding={1} display={'flex'} justifyContent={'center'}
                                    sx={{
                                        bgcolor: 'lightgray',
                                        borderColor: 'black',
                                        borderRadius: 4,


                                    }}
                                >
                                    <Typography variant="subtitle2" sx={{ fontSize: { xs: '22px', sm: '22px', md: '22px', lg: '12px' } }}  >
                                        Theory</Typography>

                                </Box>

                            </Grid>

                            <Grid item xs={2} sm={2} md={2} lg={2} display={'flex'} justifyContent={'end'} alignItems={'self-end'} >
                                <IconButton color="secondary" aria-label="add an alarm" >
                                    <EditNoteIcon />
                                </IconButton>

                            </Grid>
                        </Grid>

                        {/* Row 2 */}
                        <Grid item xs={12} sm={12} md={12} lg={12} >
                            <Grid item xs={12} sm={12} md={12} lg={12} height={30}>
                                <Typography variant='h6'>Grade 12</Typography>
                            </Grid>
                        </Grid>


                        <Grid container>

                            <Grid item xs={1} sm={1} md={1} lg={1} height={50} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                <img width={'40px'} src={UserImg} alt="" />
                            </Grid>



                            <Grid item xs={11} sm={11} md={11} lg={11} height={50} padding={1} display={'flex'} justifyContent={'start'} alignItems={'start'}>
                                <Typography variant="subtitle1" sx={{ fontSize: { xs: '20px', sm: '20px', md: '20px', lg: '16px' } }}>

                                    Jagath Chandhana</Typography>
                            </Grid>
                        </Grid>


                        <Grid item xs={12} sm={12} md={12} lg={12} height={30}>
                            <Typography variant="subtitle1" fontWeight={600} sx={{ fontSize: { xs: '16px', sm: '16px', md: '16px', lg: '16px' } }}>
                                Description</Typography>

                        </Grid>


                        <Grid item xs={12} sm={12} md={12} lg={12}  >
                            <Typography variant="subtitle1" sx={{ fontSize: { xs: '16px', sm: '16px', md: '15px', lg: '12px' } }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries,
                                but also the leap into electric typesetting, remaining essentially unchanged.

                            </Typography>
                        </Grid>



                        <Grid container>
                            <Grid item xs={3} sm={3} md={3} lg={3} display={'flex'} justifyContent={'start'} alignItems={'start'} flexDirection={'column'}>
                                <h1 className='font-semibold text-lg'>Day</h1>
                                <h1 className='font-semibold text-sm'>Friday</h1>

                            </Grid>
                            <Grid item xs={3} sm={3} md={3} lg={3} flexDirection={'column'} >
                                <h1 className='font-semibold text-lg'>Time</h1>
                                <h1 className='font-semibold text-sm'>3.00 P.M</h1>
                            </Grid>
                            <Grid item xs={3} sm={3} md={3} lg={3}  >
                                <h1 className='font-semibold text-lg'>Frequency</h1>
                                <h1 className='font-semibold text-sm'>Weeakly</h1>
                            </Grid>
                            <Grid item xs={3} sm={3} md={3} lg={3}  >
                                <h1 className='font-semibold text-lg'>Link</h1>
                                <h1 className='font-semibold text-sm'><a href="http://">www.E-Tutor.lk</a></h1>
                            </Grid>


                            <Grid item xs={3} sm={3} md={3} lg={3} mt={1}  >
                                <h1 className='font-semibold text-lg'>Price</h1>
                                <h1 className='font-semibold text-sm'>LKR 3000 Per Month</h1>
                            </Grid>






                        </Grid>




                        <Grid item xs={12} sm={12} md={12} lg={12} display={'flex'} justifyContent={'start'} alignItems={'start'} mt={1}>
                            <Typography variant="subtitle2" fontWeight={'800'} sx={{ fontSize: { xs: '20px', sm: '20px', md: '20px', lg: '14px' } }}>
                                Documents
                            </Typography>
                        </Grid>

                        <Grid container>
                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <img width={50} src={PDFIcon} alt="" />
                                <h1>page1.pdf</h1>
                            </Grid>

                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <img width={50} src={PDFIcon} alt="" />
                                <h1>page1.pdf</h1>

                            </Grid>

                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <img width={50} src={PDFIcon} alt="" />
                                <h1>page1.pdf</h1>

                            </Grid>
                        </Grid>
                    </Box>

                </Grid>
                <Grid xs={12} sm={12} md={12} lg={6} gap={2} >

                    <Grid item class >
                    <AssignmentCard/>
                    <AssignmentCard/>

                    </Grid>


                    <Link to="/institute/assignment/overview" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Grid item lg={12} display={'flex'} justifyContent={'center'} mt={3}>

                            <Button variant="outlined" color="error" fullWidth>
                                New Assignment
                            </Button>
                        </Grid>
                    </Link>


                </Grid>


                <Grid item lg={6} display={'flex'} justifyContent={'start'} mt={1}  >
                    <Box padding={1}
                        sx={{
                            bgcolor: '#eceff1',
                            borderColor: 'black',
                            borderRadius: 4,

                        }}
                    >
                        <Grid item lg={8}>
                            <Typography variant="subtitle2" fontWeight={'800'} sx={{ fontSize: { xs: '20px', sm: '20px', md: '20px', lg: '14px' } }}>
                                Documents
                            </Typography>
                        </Grid>
                        <Grid container   >
                            <AvatarGroup total={24}>
                                <Avatar alt="Remy Sharp" src={UserImg} />
                                <Avatar alt="Travis Howard" src={UserImg} />
                                <Avatar alt="Agnes Walker" src={UserImg} />
                                <Avatar alt="Trevor Henderson" src={UserImg} />
                            </AvatarGroup>

                            <IconButton aria-label="delete" className=''>
                                <ArrowOutwardIcon />
                            </IconButton>


                        </Grid>
                    </Box>

                </Grid>


            </Grid>


        </div>
    )
}

export default AdminViewClassInfo
