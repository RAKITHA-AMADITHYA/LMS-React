import { Box, Grid, Typography } from '@mui/material'

function ViewTeacherSubject(props) {
  return (
    <Grid item lg={4} padding={1} display={'flex'} justifyContent={'center'}>
    <Box width={240} height={150} borderRadius={4} bgcolor={'#E16969'}>
      <Grid container lg={12}>
        <Grid lg={6} padding={1} height={80}>
          <Typography variant='h6' fontFamily={'monospace'} height={16}  color={'white'}>Grade</Typography>
          <Typography variant='h2' fontFamily={'revert'} fontSize={50} color={'white'}>{props.grade}</Typography>

        </Grid>
        <Grid xs={6} padding={1} >
          <Typography variant='subtitle1' fontFamily={'monospace'} height={28}  color={'white'}>{props.subject}</Typography>
          <Box xs={12} bgcolor={'lightgray'} height={28} width={80} borderRadius={7} borderB={'white'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Typography variant='h2' fontFamily={'revert'} fontSize={16} color={'black'}>Theory</Typography>

          </Box>
        </Grid>
      </Grid>

      <Grid xs={12} padding={1} height={20}>
        <Typography variant='h6' fontFamily={'monospace'} color={'white'}>{props.day}</Typography>
      </Grid>

      <Grid xs={12} padding={1} mt={1}>
        <Typography variant='h6' fontFamily={'revert'} fontSize={14} color={'white'} >{props.start_time}-{props.end_time}</Typography>
      </Grid>
    </Box>
  </Grid>
  )
}

export default ViewTeacherSubject
