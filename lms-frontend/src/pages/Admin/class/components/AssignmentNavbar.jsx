import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AddLinkIcon from '@mui/icons-material/AddLink';
import NotesIcon from '@mui/icons-material/Notes';
function AssignmentNavbar() {
    return (
        <Grid item lg={3} sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block' } }} display={'flex'} justifyContent={'center'} padding={2} className='bg-slate-100 '>
            <Link to="/admin/assignment/overview" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Grid container margin={1} sx={{ "&:hover": { backgroundColor: '#E16969', borderRadius: 5, color: 'white' } }} padding={1}>
                    <Grid item lg={1} display={'flex'} justifyContent={'center'} alignItems={'center'} padding={1} width={50}>
                        <QuestionMarkIcon />
                    </Grid>
                    <Grid item lg={11} padding={1} display={'flex'} justifyContent={'start'}  >
                        <Typography variant='h6'>Overview</Typography>
                    </Grid>
                </Grid>
            </Link>


            <Link to="/admin/assignment/schedule" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Grid container margin={1} sx={{ "&:hover": { backgroundColor: '#E16969', borderRadius: 5, color: 'white' } }} padding={1}>
                    <Grid item lg={1} display={'flex'} justifyContent={'center'} alignItems={'center'} padding={1} width={50}>
                        <AddLinkIcon />
                    </Grid>
                    <Grid item lg={11} padding={1} display={'flex'} justifyContent={'start'}  >
                        <h1 className='text-xl'>Schedule</h1>

                    </Grid>
                </Grid>
            </Link>


            <Link to="/admin/assignment/review" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Grid container margin={1} sx={{ "&:hover": { backgroundColor: '#E16969', borderRadius: 5, color: 'white' } }} padding={1}>
                    <Grid item lg={1} display={'flex'} justifyContent={'center'} alignItems={'center'} padding={1} width={50}>
                        <NotesIcon />
                    </Grid>
                    <Grid item lg={11} padding={1} display={'flex'} justifyContent={'start'}  >
                        <h1 className='text-xl'>Review & Publish</h1>

                    </Grid>
                </Grid>
            </Link>
        </Grid>
    )
}

export default AssignmentNavbar
