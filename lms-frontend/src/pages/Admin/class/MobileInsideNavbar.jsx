import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AddLinkIcon from '@mui/icons-material/AddLink';
import PaidIcon from '@mui/icons-material/Paid';
import NotesIcon from '@mui/icons-material/Notes';

function MobileInsideNavbar() {
  return (
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
      <Link to="/admin/new-class/grade-subject" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Grid container sx={{ "&:hover": { backgroundColor: '#E16969', borderRadius: 5, color: 'white' } }} padding={1}>
          <Grid item xs={2} sm={2} md={2}>
            <QuestionMarkIcon />
          </Grid>
          <Grid item xs={10} sm={10} md={10}>
            <Typography variant='h6'>Grade & Subject</Typography>
          </Grid>
        </Grid>
      </Link>
    </Grid>

    <Grid item xs={3} sm={3} md={3}>
      <Link to="/admin/new-class/date-time" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Grid container sx={{ "&:hover": { backgroundColor: '#E16969', borderRadius: 5, color: 'white' } }} padding={1}>
          <Grid item xs={2} sm={2} md={2}>
            <AddLinkIcon />
          </Grid>
          <Grid item xs={10} sm={10} md={10}>
            <Typography variant='h6'>Schedule</Typography>
          </Grid>
        </Grid>
      </Link>
    </Grid>


    <Grid item xs={3} sm={3} md={3}>
      <Link to="/admin/new-class/pricing" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Grid container sx={{ "&:hover": { backgroundColor: '#E16969', borderRadius: 5, color: 'white' } }} padding={1}>
          <Grid item xs={2} sm={2} md={2}>
            <PaidIcon />
          </Grid>
          <Grid item xs={10} sm={10} md={10}>
            <Typography variant='h6'>Payments</Typography>
          </Grid>
        </Grid>
      </Link>
    </Grid>


    <Grid item xs={4} sm={4} md={4}>
      <Link to="/admin/new-class/review-publish" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Grid container sx={{ "&:hover": { backgroundColor: '#E16969', borderRadius: 5, color: 'white' } }} padding={1}>
          <Grid item xs={2} sm={2} md={2}>
            <NotesIcon />
          </Grid>
          <Grid item xs={10} sm={10} md={10}>
            <Typography variant='h6'>Review & Publish</Typography>
          </Grid>
        </Grid>
      </Link>
    </Grid>



    
    {/* Add other mobile links here */}
  </Grid>
  )
}

export default MobileInsideNavbar
