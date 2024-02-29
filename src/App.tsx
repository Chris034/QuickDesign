import { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import Layout from './Layout';
import { PaletteMode, Theme, ThemeOptions, createTheme, ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    border?: {
      light?: string;
      dark?: string
      };
  }
  interface Palette {
    border: {
      light: string;
      dark: string
    };
  }
}

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode: mode,
    primary: {
      main: '#ff8549',
      dark: '#ff6012',
      light: '#ffa980',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9c27b0',
      light: '#b777ed',
      dark: '#43007a',
    },
    background: {
      default: '#faf9f8',
      paper: '#efefef',
    },
    text: {
      primary: '#3a3a3a',
      secondary: 'rgba(38,38,38,0.6)',
      disabled: 'rgba(38,38,38,0.38)',
    },
    divider: '#D8D8D8',
    border: {
      light: '#D8D8D8',
      dark: '#888888'
    },
  },
  typography: {
    fontFamily: ['Segoe UI', "Roboto", "Helvetica", "Arial", "sans-serif"].join(','),
    fontWeightBold: 600
  },
});

function App() {

  const lightModeTheme = createTheme(getDesignTokens('light'));
  const [theme] = useState<Theme>(lightModeTheme);
  console.log(theme)

  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <CssBaseline />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Layout />
          </LocalizationProvider>
        </StyledThemeProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </React.StrictMode>
  );
}

export default App;
