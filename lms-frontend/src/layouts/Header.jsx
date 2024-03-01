import { Typography, Menu, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import UserImg from '../assets/images/2 copy.png';

function Header() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));

    return (
        <div className='bg-white h-16 px-4 flex justify-between p-2 border-b border-gray-200'>
            <Typography variant='h4'>Overview</Typography>
            <div className='relative'>
                <SearchIcon className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-1' />
                <input type="text" placeholder='Search' className='text-sm focus:outline-none active:outline-none h-10 w-[22rem] border border-gray-300  rounded-sm px-4 pl-7' />
            </div>

            <div className='flex items-center ml-9'>
                <NotificationsOutlinedIcon fontSize="large" className='text-gray-600' />
            </div>

            <div className='text-end font-semibold ml-3'>
                <h6>Good Morning !</h6>
                <h5>Pradeep Saranga</h5>
            </div>

            <div>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                    onClick={handleAvatarClick}
                >
                    <Avatar alt="Remy Sharp" src={UserImg} />
                </StyledBadge>
                <Menu
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={handleClose}
    anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
    }}
    transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
    }}
    getContentAnchorEl={null}
>
    <MenuItem onClick={handleClose}>My Account</MenuItem>
    <MenuItem onClick={handleClose}>Logout</MenuItem>
</Menu>

            </div>
        </div>
    );
}

export default Header;
