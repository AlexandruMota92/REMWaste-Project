import React from 'react';
import { ReactComponent as Location } from './icons/location.svg';
import { ReactComponent as Trash } from './icons/trash.svg';
import { ReactComponent as Truck } from './icons/truck.svg';
import { ReactComponent as Shield } from './icons/shield.svg';
import { ReactComponent as Mail } from './icons/mail.svg';
import { ReactComponent as Wallet } from './icons/wallet.svg';

import './App.css';
import Skip from './views/skip/Skip';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import CustomBreadcrumb from './common/components/customBreadcrumb/CustomBreadcrumb';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const breadcrumb = [
  { name: 'Postcode', icon: Location },
  { name: 'Waste Type', icon: Trash },
  { name: 'Skip Selection', icon: Truck },
  { name: 'Permit Check', icon: Shield },
  { name: 'Choose Date', icon: Mail },
  { name: 'Payment', icon: Wallet }
];

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="main__container">
        <CustomBreadcrumb steps={breadcrumb} activeStep={2}></CustomBreadcrumb>
        <Skip></Skip>
      </ div>
    </ThemeProvider>

  );
}

export default App;
