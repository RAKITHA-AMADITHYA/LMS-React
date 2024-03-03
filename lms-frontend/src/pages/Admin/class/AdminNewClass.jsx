import React from 'react'
import CardNewAdding from '../../../components/CardNewAdding'
import { Box, Grid,Button , TextField, Typography, Stack } from '@mui/material'
import ClassViewCard from '../../../components/ClassViewCard'
import { Link } from 'react-router-dom'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import SecuritySharpIcon from '@mui/icons-material/SecuritySharp';

function AdminNewClass() {
  return (
    <div className='h-screen'>
      <CardNewAdding 
        name="New Class"
        path="/admin/new-class/grade-subject"
      />
                      <Box sx={{ maxHeight: '400px', overflowY: 'auto' }}>
                      <Grid container direction="row"  rowSpacing={2} columnSpacing={2}>
                        <ClassViewCard subject="Commerce" grade="12" teacher="Jagath Chandhana"/>
                        <ClassViewCard subject="Commerce" grade="12" teacher="Jagath Chandhana"/>
                        <ClassViewCard subject="Commerce" grade="12" teacher="Jagath Chandhana"/>
                        <ClassViewCard subject="Commerce" grade="12" teacher="Jagath Chandhana"/>
                       
                      </Grid>

                      </Box>


      
    </div>
  )
}

export default AdminNewClass
