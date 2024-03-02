import React, { useState } from 'react'
import CardNewAdding from '../../../components/CardNewAdding'
import { Box, Grid } from '@mui/material'
import TeacherStudentCard from '../../../components/TeacherStudentCard'
function AdminNewStudent() {

  
  return (
    <div className='h-screen'>
      <CardNewAdding 
        name="New Student"
        onClick={() => setOpen(true)}
      />

<Box sx={{ maxHeight: '400px', overflowY: 'auto' }}>

<Grid container direction="row" rowSpacing={2} columnSpacing={2}>
  <TeacherStudentCard/>
  <TeacherStudentCard/>
  <TeacherStudentCard/>


</Grid>

</Box>

      
    </div>
  )
}

export default AdminNewStudent
