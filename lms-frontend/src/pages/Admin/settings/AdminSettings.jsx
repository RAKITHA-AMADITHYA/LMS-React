import { Box, Button, Grid, TextField, Typography, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import SecuritySharpIcon from '@mui/icons-material/SecuritySharp';
import UserImg from '../../../assets/images/2 copy.png'
function AdminSettings() {
  return (
    <div className='h-screen m-5'>
      <h1 className='text-xl'>Manage Your Account Settings</h1>
      <Box mt={2}
        sx={{
         
          bgcolor: 'white',
          borderRadius: 4,
          flexDirection: 'column',
          boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.29)"
        }}
      >
        <Grid container >

          {/* Inside Nav Bar */}

          <Grid item lg={3} sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' } }} display={'flex'} justifyContent={'center'} padding={2} className='bg-slate-100 ' >
            <Link to="/admin/settings-personalinfo" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Grid container margin={1} sx={{ "&:hover": { backgroundColor: '#E16969', borderRadius: 5, color: 'white' } }} padding={1}>

                <Grid item lg={1} display={'flex'} justifyContent={'center'} alignItems={'center'} padding={1} width={50}>
                  <QuestionMarkIcon />
                </Grid>
                <Grid item lg={11} padding={1} display={'flex'} justifyContent={'start'}  >
                  <h1 className='text-xl'>Personal info</h1>
                </Grid>
              </Grid>
            </Link>

            <Link to="/admin/settings-security" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Grid container margin={1} sx={{ "&:hover": { backgroundColor: '#E16969', borderRadius: 5, color: 'white' } }} padding={1}>
                <Grid item lg={1} display={'flex'} justifyContent={'center'} alignItems={'center'} padding={1} width={50}>
                  <SecuritySharpIcon />
                </Grid>
                <Grid item lg={11} padding={1} display={'flex'} justifyContent={'start'}  >
                  <h1 className='text-xl'>Security</h1>

                </Grid>
              </Grid>
            </Link>




          </Grid>

          {/* Right side content */}
          <Grid item xs={12} sm={12} md={12} lg={9}  >

            {/* Mobile view Nav bar start */}
            <Grid
              container
              sx={{
                display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none' },
                flexDirection: 'row',
              }}
              display={'flex'}
              justifyContent={'center'}
              padding={2}

            >
              <Grid item xs={4} sm={4} md={4}>
                <Link to="/admin/settings-personalinfo" style={{ textDecoration: 'none', color: 'inherit' }}>

                  <Grid container sx={{ "&:hover": { backgroundColor: '#E16969', borderRadius: 5, color: 'white' } }} padding={1}>

                    <Grid item xs={2} sm={2} md={2}>
                      <QuestionMarkIcon />
                    </Grid>
                    <Grid item xs={10} sm={10} md={10}>
                      <Typography variant='h6' style={{ fontFamily: '"Mukta", sans-serif' }} fontSize={18}>Personal info</Typography>
                    </Grid>
                  </Grid>
                </Link>

              </Grid>

              <Grid item xs={4} sm={4} md={4}>
                <Link to="/admin/settings-security" style={{ textDecoration: 'none', color: 'inherit' }}>

                  <Grid container sx={{ "&:hover": { backgroundColor: '#E16969', borderRadius: 5, color: 'white' } }} padding={1}>
                    <Grid item xs={2} sm={2} md={2}>
                      <SecuritySharpIcon />
                    </Grid>
                    <Grid item xs={10} sm={10} md={10}>
                      <Typography variant='h6' style={{ fontFamily: '"Mukta", sans-serif' }} fontSize={18}>Seurity</Typography>
                    </Grid>
                  </Grid>
                </Link>

              </Grid>


            </Grid>
            {/* Mobile view Nav bar end */}


            <Box padding={1}   >
              <Grid item xs={12} sm={12} md={12} lg={12} margin={1}>
                <Typography variant='h4' style={{ fontFamily: '"Mukta", sans-serif' }}>General Information</Typography>
              </Grid>
              <Grid item lg={12} >
                <Typography variant='subtitle1' fontFamily={'"Mukta", sans-serif'} margin={1} fontSize={18}>Refine Your Profile: Edit General Information with Ease!</Typography>
              </Grid>

              <Grid item lg={12} >
                <Typography variant='subtitle2' fontFamily={'"Mukta", sans-serif'} margin={1} fontSize={14} fontWeight={800}>Profile Picture</Typography>
              </Grid>

              <Grid container >
                <Grid item xs={2} sm={2} md={2} lg={2} display={'flex'} justifyContent={'center'} >
                  <img src={UserImg} width={50} />
                </Grid>

                <Stack spacing={2} direction="row">
                  <Button variant="contained">Change</Button>
                  <Button variant="outlined">Delete</Button>
                </Stack>
              


              </Grid>



              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '40ch' },
                }}
                noValidate
                autoComplete="off"
                mt={5}
              >
                <TextField id="outlined-basic" label="First Name" variant="outlined" />
                <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <TextField id="outlined-basic" label="Phone" variant="outlined" />

              </Box>



              <Grid item xs={12} sm={12} md={12} lg={12} display={'flex'} justifyContent={'start'} margin={1} mt={5}>
              <Stack spacing={2} direction="row">
                  <Button variant="contained">Save Changes</Button>
                  <Button variant="outlined" >Cancel</Button>
                </Stack>

              </Grid>

            </Box>
          </Grid>
        </Grid>


      </Box>
    </div>
  )
}

export default AdminSettings
