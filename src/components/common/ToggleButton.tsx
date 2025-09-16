import { Button, ButtonBaseProps, PaletteColor, useTheme } from '@mui/material';
import React from 'react';
import { OpaqueButton } from './OpaqueButton';

export interface ToggleButtonProps extends ButtonBaseProps {
  active: boolean;
  palette: PaletteColor;
}

export const ToggleButton: React.FC<ToggleButtonProps> = React.forwardRef(
  ({ active, palette, sx, children, color, ...props }, ref) => {
    const theme = useTheme();
    return (
      <Button
        variant="text"
        sx={{
          background: 'transparent',
          color: theme.palette.text.primary,
          ...sx,
        }}
        {...props}
        ref={ref}
      >
        {children}
      </Button>
    );
  }
);
