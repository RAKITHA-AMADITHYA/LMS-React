import React from 'react';
import { Box, Grid, Button, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import AssignmentNavbar from './components/AssignmentNavbar';
import AssignmentMobileNavbar from './components/AssignmentMobileNav'
import pdf from '../../../assets/images/pdf.png';

function AssignmentReview() {
  const handlePublish = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Publish!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Published!",
          text: "Your file has been published.",
          icon: "success"
        }).then(() => {
          window.location.href = "/admin/view-class";
        });
      } else {
        Swal.fire({
          title: "Publishing cancelled",
          text: "Your file has not been published.",
          icon: "error"
        });
      }
    });
  };
  

  return (
    <div className='h-auto m-5'>
      <Box mt={2} sx={{
        bgcolor: 'white',
        borderRadius: 4,
        flexDirection: 'column',
        boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.29)"
      }}>
        <Grid container>
          <AssignmentNavbar />

          {/* Right side content */}
          <Grid item xs={12} sm={12} md={12} lg={9} style={{ overflowY: 'auto' }}>
            <AssignmentMobileNavbar />

            <Box padding={1} style={{ overflowY: 'auto' }}>
              <Grid item xs={12} sm={12} md={12} lg={12} margin={1}>
                <Typography variant='h4'>Review & Publish</Typography>
              </Grid>
              <Grid item lg={12} padding={1}>
                <Typography variant='subtitle1'>Review, Publish, and Inspire Learning!</Typography>
              </Grid>

              
             

              <Grid item xs={12} sm={12} md={12} lg={12} padding={1} >
                <Typography variant='subtitle1' fontWeight={600} style={{ fontFamily: '"Mukta", sans-serif' }}> Description</Typography>
                <h1 className='text-lg'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur
                </h1>

              </Grid>

              <Grid container >
                <Grid item xs={4} sm={4} md={4} lg={4} padding={1} >
                  <Typography variant='subtitle1' fontWeight={600} style={{ fontFamily: '"Mukta", sans-serif' }} className='text-green-600'> Starting Date & Time</Typography>
                  <h1 className='text-lg'>2024.02.12 At 18:00 PM</h1>
                </Grid>
                <Grid item xs={3} sm={3} md={3} lg={3} padding={1} >
                  <Typography variant='subtitle1' fontWeight={600} style={{ fontFamily: '"Mukta", sans-serif' }}className='text-red-600'>Closing Date & Time</Typography>
                  <h1 className='text-lg'>2024.02.12 At 18:00 PM</h1>

                </Grid>
          

               
              </Grid>


              <Grid container  p={1} mt={5}>
                
                <Grid item xs={6} sm={4} md={2} lg={2} flexDirection={'column'} display={'flex'} justifyContent={'center'}>
                  <img src={pdf} width={50} alt="" />
                  <Typography variant='subtitle2' fontWeight={600} fontFamily={'monospace'}> abcd.pdf</Typography>

                </Grid>

                <Grid item xs={6} sm={4} md={2} lg={2} flexDirection={'column'} display={'flex'} justifyContent={'center'}>
                  <img src={pdf} width={50} alt="" />
                  <Typography variant='subtitle2' fontWeight={600} fontFamily={'monospace'}> abcd.pdf</Typography>

                </Grid>

                <Grid item xs={6} sm={4} md={2} lg={3} flexDirection={'column'} display={'flex'} justifyContent={'center'}>
                  <img src={pdf} width={50} alt="" />
                  <Typography variant='subtitle2' fontWeight={600} fontFamily={'monospace'}> abcd.pdf</Typography>

                </Grid>


              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} display={'flex'} justifyContent={'start'} margin={1}>
                <Stack spacing={2} direction="row">
                  <Link to="/admin/assignment/schedule" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Button variant="outlined">Previous Page</Button>
                  </Link>

                  <Button variant="contained" onClick={handlePublish}>Publish</Button>
                </Stack>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default AssignmentReview
