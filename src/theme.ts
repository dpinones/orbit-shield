import { createTheme, Theme } from '@mui/material';

declare module '@mui/material/styles/createPalette' {
  interface SimplePaletteColorOptions {
    opaque?: string;
  }

  interface PaletteColor {
    opaque: string;
  }

  interface PaletteOptions {
    lend?: PaletteColorOptions;
    borrow?: PaletteColorOptions;
    backstop?: PaletteColorOptions;
    menu?: PaletteColorOptions;
    positive?: PaletteColorOptions;
    accent?: PaletteColorOptions;
  }

  interface Palette {
    lend: PaletteColor;
    borrow: PaletteColor;
    backstop: PaletteColor;
    menu: PaletteColor;
    positive: PaletteColor;
    accent: PaletteColor;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    lend: true;
    borrow: true;
    backstop: true;
    positive: true;
    accent: true;
    menu: false;
  }
}

const FONT: string = '"DM Sans", Roboto';

const pxToRem = (px: number) => {
  const remVal = px / 16;
  return `${remVal.toFixed(3)}rem`;
};

const theme: Theme = createTheme({
  palette: {
    mode: 'light',
    tonalOffset: 0,
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    primary: {
      main: '#1B4B47',
      opaque: '#1B4B4726',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#D2691E',
      opaque: '#D2691E26',
    },
    lend: {
      main: '#1B4B47',
      opaque: '#1B4B4726',
    },
    borrow: {
      main: '#D2691E',
      opaque: '#D2691E26',
    },
    backstop: {
      main: '#1B4B47',
      opaque: '#1B4B4726',
    },
    positive: {
      main: '#1B4B47',
      opaque: '#1B4B4730',
    },
    accent: {
      main: '#8A9BA8',
      opaque: '#8A9BA8',
    },
    menu: {
      main: '#ffffff',
      light: '#f5f5f5',
    },
    text: {
      primary: '#2C3E50',
      secondary: '#8A9BA8',
    },
    warning: {
      main: '#D2691E',
      opaque: '#D2691E26',
    },
    error: {
      main: '#D2691E',
      opaque: '#D2691E26',
    },
    action: {
      hover: 'transparent',
      selected: '#D1E7DD',
    },
  },
  typography: {
    fontFamily: FONT,
    h1: {
      fontFamily: FONT,
      fontWeight: 700,
      fontSize: pxToRem(20),
      lineHeight: 1.6,
    },
    h2: {
      fontFamily: FONT,
      fontWeight: 700,
      fontSize: pxToRem(18),
      lineHeight: 1.473,
    },
    h3: {
      fontFamily: FONT,
      fontWeight: 500,
      fontSize: pxToRem(18),
      lineHeight: 1.473,
    },
    h4: {
      fontFamily: FONT,
      fontWeight: 700,
      fontSize: pxToRem(16),
      lineHeight: 1.3125,
    },
    h5: {
      fontFamily: FONT,
      fontWeight: 400,
      fontSize: pxToRem(16),
      lineHeight: 1.3125,
    },
    h6: undefined,
    subtitle1: undefined,
    subtitle2: undefined,
    body1: {
      fontFamily: FONT,
      fontWeight: 500,
      fontSize: pxToRem(16),
      lineHeight: 1.3125,
    },
    body2: {
      fontFamily: FONT,
      fontWeight: 400,
      fontSize: pxToRem(14),
      lineHeight: 1.125,
    },
    button: {
      textTransform: 'none',
      fontFamily: FONT,
      fontWeight: 500,
      fontSize: pxToRem(16),
      lineHeight: 1.3125,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 420, // marker for the mobile layout requirement
      md: 640,
      lg: 850, // marker for compact layout requirements
      xl: 1024,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'inherit',
            boxShadow: 'none',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  },
});

export default theme;
