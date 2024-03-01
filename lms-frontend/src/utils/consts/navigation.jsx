import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import StudentsIcon from "@mui/icons-material/GroupsTwoTone";
import PaidIcon from "@mui/icons-material/Paid";
import SettingsIcon from "@mui/icons-material/Settings";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import LogoutIcon from '@mui/icons-material/Logout';


export const DASHBOARD_SIDEBAR_LINKS=[
    {
        key :'dashboard',
        lable:'Dashboard',
        path:'/admin/dashboard',
        icon:<HomeIcon/>
    },

    {
        key :'class',
        lable:'Class',
        path:'/admin/new-class',
        icon:<SchoolIcon/>
    },


    {
        key :'teacher',
        lable:'Teacher',
        path:'/admin/new-teacher',
        icon:<CastForEducationIcon/>
    },

    {
        key :'student',
        lable:'Student',
        path:'/admin/new-student',
        icon:<StudentsIcon/>
    },

    {
        key :'payments',
        lable:'Payments',
        path:'/admin/payments',
        icon:<PaidIcon/>
    },

    
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS=[
    {
        key :'settings',
        lable:'Settings',
        path:'/admin/settings',
        icon:<SettingsIcon/>
    },

    {
        key :'logout',
        lable:'Logout',
        path:'/admin/logout',
        icon:<LogoutIcon/>
    },
]

