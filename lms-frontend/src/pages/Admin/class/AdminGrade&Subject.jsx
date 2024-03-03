import React, { useState, useEffect } from 'react';
import { Box, Grid, Button, TextField, Typography, Stack, FormControl, InputLabel, Select, MenuItem, TextareaAutosize } from '@mui/material';
import { Link } from 'react-router-dom';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AddLinkIcon from '@mui/icons-material/AddLink';
import PaidIcon from '@mui/icons-material/Paid';
import NotesIcon from '@mui/icons-material/Notes';
import ClassInsideNavbar from './ClassInsideNavbar';
import MobileInsideNavbar from './MobileInsideNavbar';

function AdminGradeSubject() {
  const [teachers, setTeachers] = useState([]);
  const [teacher, setTeacher] = useState('');
  const [theory, setTheory] = useState('');
  const [description, setDescription] = useState('');

  const getTeachers = () => {
    const res = [
      { id: 1, name: "Binura Liyanage" },
      { id: 2, name: "Kamal Perera" },
      { id: 3, name: "Kasun Fernando" },
    ];
    setTeachers(res);
  };

  useEffect(() => {
    getTeachers();
  }, []);

  return (
    <div className='h-screen m-5'>
      <Box mt={2} sx={{
        bgcolor: 'white',
        borderRadius: 4,
        flexDirection: 'column',
        boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.29)"
      }}>
        <Grid container>
          <ClassInsideNavbar/>

          {/* Right side content */}
          <Grid item xs={12} sm={12} md={12} lg={9}>
            <MobileInsideNavbar/>

            <Box padding={1}>
              <Grid item xs={12} sm={12} md={12} lg={12} margin={1}>
                <Typography variant='h4'>Grade & Subject</Typography>
              </Grid>
              <Grid item lg={12} padding={1}>
                <Typography variant='subtitle1'>Building Futures One Class at a Time!</Typography>
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
                <FormControl fullWidth sx={{ minWidth: 300 }}>
                  <InputLabel id="demo-simple-select-label">Select your Teacher</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={teacher}
                    label="Teacher"
                    onChange={(e) => setTeacher(e.target.value)}
                  >
                    {teachers.map((teacherObject) => (
                      <MenuItem key={teacherObject.id} value={teacherObject.name}>{teacherObject.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <TextField id="outlined-basic" label="Grade" variant="outlined" />
                <TextField id="outlined-basic" label="Subject" variant="outlined" />
               
                <FormControl fullWidth sx={{ minWidth: 300 }}>
                  <InputLabel id="demo-simple-select-label">Theory</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={theory}
                    label="Theory"
                    onChange={(e) => setTheory(e.target.value)}
                  >
                    <MenuItem value={'Theory'}>Theory</MenuItem>
                    <MenuItem value={'Revision'}>Revision</MenuItem>
                    <MenuItem value={'Practical'}>Practical</MenuItem>
                    <MenuItem value={'Seminar'}>Seminar</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  id="outlined-multiline-flexible"
                  label="Description"
                  multiline
                  rows={4}
                  variant="outlined"
                />

                <Button
                  variant="contained"
                  component="label"
                >
                  Upload Files
                  <input
                    type="file"
                    hidden
                  />
                </Button>
              </Box>

              

              <Grid item xs={12} sm={12} md={12} lg={12} display={'flex'} justifyContent={'start'} margin={1} mt={5}>
                <Stack spacing={2} direction="row">

                <Link to="/admin/new-class/date-time" style={{ textDecoration: 'none', color: 'inherit' }}>

                  <Button variant="contained">Next Page</Button>
                </Link>
                </Stack>
              </Grid>

            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default AdminGradeSubject;
