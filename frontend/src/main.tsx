import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Theme from '../theme.json';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

let isLightTheme = window.matchMedia("(prefers-color-scheme: light)").matches;
const muiTheme = createTheme({
  typography: {
    
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App theme={ isLightTheme ? Theme.sky : Theme.dark} />
  </React.StrictMode>,
)
