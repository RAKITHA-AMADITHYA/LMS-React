import React from 'react';
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Paper } from '@mui/material';
import CashIcon from '@mui/icons-material/Money';
import NuPayIcon from '@mui/icons-material/Payment';
import MercadoPagoIcon from '@mui/icons-material/ShoppingCart';
import BankTransferIcon from '@mui/icons-material/AccountBalance';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import CancelIcon from '@mui/icons-material/Cancel';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function AdminPayment() {
  const data = [
    { id: '1', name: 'John Doe', status: 'Succeeded', amount: '$19,623 USD', paymentmethod: 'Cash', createdate: 'March 23, 2022, 13:00PM' },
    { id: '2', name: 'John Doe', status: 'Pending', amount: '$6,623 USD', paymentmethod: 'Cash', createdate: 'March 23, 2022, 13:00PM' },
    { id: '3', name: 'John Doe', status: 'Declined', amount: '$1,623 USD', paymentmethod: 'NuPay', createdate: 'March 23, 2022, 13:00PM' },
    { id: '4', name: 'John Doe', status: 'Succeeded', amount: '$6,623 USD', paymentmethod: 'Mercado pago', createdate: 'March 23, 2022, 13:00PM' },
    { id: '5', name: 'John Doe', status: 'Create', amount: '$130 USD', paymentmethod: 'Bank Transfer', createdate: 'March 23, 2022, 13:00PM' },
  ];

  const getStatusData = (status) => {
      switch (status) {
        case 'Succeeded':
          return { bgColor: 'bg-green-500', icon: <CheckCircleIcon className='text-green-600' /> };
        case 'Pending':
          return { bgColor: 'bg-yellow-500', icon: <HourglassEmptyIcon className='text-yellow-600' /> };
        case 'Declined':
          return { bgColor: 'bg-red-500', icon: <CancelIcon className='text-red-600' /> };
        case 'Create':
          return { bgColor: 'bg-blue-500', icon: <AddCircleIcon className='text-blue-600' /> };
        default:
          return { bgColor: 'bg-gray-500', icon: null };
      }
    };
    
  const getPaymentMethodIcon = (paymentMethod) => {
    switch (paymentMethod) {
      case 'Cash':
        return <CashIcon className='text-green-600' />;
      case 'NuPay':
        return <NuPayIcon   className='text-purple-600' />;
      case 'Mercado pago':
        return <MercadoPagoIcon  className='text-blue-600' />;
      case 'Bank Transfer':
        return <BankTransferIcon  className='text-orange-600'/>;
      default:
        return null;
    }
  };

  return (
    <div className='h-screen m-5 justify-center'>
      <Grid item lg={12} md={12} sm={12} xs={12} display={'flex'} justifyContent={'center'} mt={5}>
        <TableContainer component={Paper} className="bg-gray-100">
          <Table className="min-w-full">
            <TableHead>
              <TableRow className="bg-gray-200">
                <TableCell className="font-semibold">PaymentID</TableCell>
                <TableCell className="font-semibold">Status</TableCell>
                <TableCell className="font-semibold">Amount</TableCell>
                <TableCell className="font-semibold">P.Method</TableCell>
                <TableCell className="font-semibold">Create Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id} className="hover:bg-gray-200">
                  <TableCell>{row.id}</TableCell>
                  <TableCell>
                    <Chip
                      label={row.status}
                      className={`px-2 py-1 rounded-full text-white ${getStatusData(row.status).bgColor}`}
                      icon={getStatusData(row.status).icon}
                    />
                  </TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      {getPaymentMethodIcon(row.paymentmethod)}
                      <span className="ml-2">{row.paymentmethod}</span>
                    </div>
                  </TableCell>
                  <TableCell>{row.createdate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  );
}

export default AdminPayment;
