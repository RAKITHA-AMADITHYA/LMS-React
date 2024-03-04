import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogActions, Button, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function RegisterModal({ open, onClose, children, ...props }) {
  const [showAlert, setShowAlert] = useState(false);

  const handleRegister = () => {
    // Perform registration logic here
    // For demo purposes, we'll just show the alert
    setShowAlert(true);

    // Automatically hide the alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <BootstrapDialog onClose={onClose} open={open}>
      <DialogTitle sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 className='text3xl font-semibold'>{props.title}</h1>
        <h1 className='text-sm'>{props.description}</h1>
      </DialogTitle>

      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent>
        {children}
      </DialogContent>

      <DialogActions sx={{ justifyContent: 'center' }}>
        <Button onClick={handleRegister} variant="contained" color="error" fullWidth>
          Register
        </Button>
      </DialogActions>

      {showAlert && (
          <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success Alert with an encouraging title.
        </Alert>
      )}
    </BootstrapDialog>
  );
}

export default RegisterModal;
