import { PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary'];
    sensitive: Palette['primary'];
  }

  interface PaletteOptions {
    white?: PaletteOptions['primary'];
    sensitive: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    white: true;
    sensitive: true
  }
}