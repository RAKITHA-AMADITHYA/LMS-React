import { Grid, Typography, Box, } from "@mui/material";
import TeacherInfoCard from './TeacherInfoCard'
import CardNewAdding from "../../../components/CardNewAdding";
import ClassViewCard from "../../../components/ClassViewCard";

function AdminTeacherInfo() {
    return (
        <div className=' h-screen '>



            <Grid container xs={12} mt={2}>
                {/* Left side  */}
                <TeacherInfoCard
                    name='Jagath Chandhana'
                    description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
               molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum'
                    email='jagathchandhana1@gmail.com'
                    contact='0123456789'
                    education='Bsc. In Chemistry HNDE Sociology'
                    experience='10 years'
                    rating='4.4'
                />


                {/* Right side container */}

                <Grid item xs={12} sm={5} md={4} lg={7} display={'flex'} ml={2} >


                    <Grid item lg={12} >

                        <h1 className='text-2xl font-semibold'>Enrolled Classes</h1>
                        <Box
                            sx={{
                                height: 460,
                                width: '100%',
                                overflowY: 'auto',
                                '&::-webkit-scrollbar': {
                                    display: 'none',
                                },
                                scrollbarWidth: 'none',
                                padding: 2,
                                boxShadow: 'none',
                                display: 'flex',
                            }}
                        >

                            <Grid container xs={12} >
                                <Grid item ml={5}>
                                    <CardNewAdding name="New Class" path="/admin/new-class/grade-subject" />
                                </Grid>
                                <ClassViewCard subject="Commerce" grade="12" teacher="Jagath Chandhana" path="/admin/view-class" />
                                <ClassViewCard subject="Commerce" grade="12" teacher="Jagath Chandhana" path="/admin/view-class" />
                                <ClassViewCard subject="Commerce" grade="12" teacher="Jagath Chandhana" path="/admin/view-class" />
                                <ClassViewCard subject="Commerce" grade="12" teacher="Jagath Chandhana" path="/admin/view-class" />
                                <ClassViewCard subject="Commerce" grade="12" teacher="Jagath Chandhana" path="/admin/view-class" />
                                <ClassViewCard subject="Commerce" grade="12" teacher="Jagath Chandhana" path="/admin/view-class" />
                                <ClassViewCard subject="Commerce" grade="12" teacher="Jagath Chandhana" path="/admin/view-class" />
                                <ClassViewCard subject="Commerce" grade="12" teacher="Jagath Chandhana" path="/admin/view-class" />

                            </Grid>
                        </Box>

                    </Grid>

                </Grid>
            </Grid>




        </div>
    )
}

export default AdminTeacherInfo
