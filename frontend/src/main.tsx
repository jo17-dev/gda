import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {CssBaseline, ThemeProvider } from '@mui/material'
import { light_theme, dark_theme } from './theme.tsx'

const curentTheme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? dark_theme : light_theme ;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={curentTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);