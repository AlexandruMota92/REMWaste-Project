import React from 'react';

import './App.css';
import Skip from './views/skip/Skip';
import Breadcrumb from './common/components/breadcrumb/Breadcrumb';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="main__container">
        <Breadcrumb></Breadcrumb>
        <Skip></Skip>
      </ div>
    </ThemeProvider>

  );
}

export default App;
