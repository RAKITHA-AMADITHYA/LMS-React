import React from 'react'
import CardNewAdding from '../../../components/CardNewAdding'
import { Box, Grid } from '@mui/material'
import ClassViewCard from '../../../components/ClassViewCard'

function AdminNewClass() {
  return (
    <div className='h-screen'>
      <CardNewAdding 
        name="New Class"
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
