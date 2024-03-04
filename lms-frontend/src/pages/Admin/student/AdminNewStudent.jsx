import React, { useState } from 'react';
import { Box, Grid,TextField } from '@mui/material';
import CardNewAdding from '../../../components/CardNewAdding';
import TeacherStudentCard from '../../../components/TeacherStudentCard';
import RegisterModal from '../../../components/RegisterModal';

function AdminNewStudent() {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className='h-screen'>
      <CardNewAdding
        name="New Student"
        onClick={handleOpenModal}
      />

      <Box sx={{ maxHeight: '400px', overflowY: 'auto' }}>
        <Grid container direction="row" rowSpacing={2} columnSpacing={2}>
          <TeacherStudentCard path="/admin/student-info" />
          <TeacherStudentCard path="/admin/student-info" />
          <TeacherStudentCard path="/admin/student-info" />
        </Grid>
      </Box>

      <RegisterModal
        open={openModal}
        onClose={handleCloseModal}
        title="New students"
        description="Fill the form to register a new student"
      >
        <Box 
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="on"
    >
      
      <TextField id="outlined-basic" label="First Name" variant="outlined" />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" />
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Phone" variant="outlined" />
      <TextField id="outlined-basic" label="Address" variant="outlined" />
      <TextField id="outlined-basic" label="Date of Birth" variant="outlined" />

    </Box>
      </RegisterModal>
    </div>
  );
}

export default AdminNewStudent;
