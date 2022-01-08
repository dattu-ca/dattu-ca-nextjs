

import { createTheme } from "@mui/material/styles";
import { grey, orange } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    type: 'light',
    background:{
      default: grey[100],
      paper: 'white'
    },
    primary: {
      main: '#3897c3',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FD6B03',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#ff5252',
    },
    error: {
      main: '#d50000',
    },
    info: {
      main: '#00b8d4',
    },
  },
  props: {
    MuiTooltip: {
      arrow: true,
    },
  },
  typography: {
    
  },
});

