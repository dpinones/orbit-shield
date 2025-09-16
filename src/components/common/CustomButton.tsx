import { ButtonBase, ButtonBaseProps } from '@mui/material';

export const CustomButton: React.FC<ButtonBaseProps> = ({ disabled, children, sx, ...props }) => {
  return (
    <ButtonBase
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '6px',
        borderRadius: '5px',
        '&.Mui-disabled': {
          opacity: 0.5,
        },
        '&:hover': {
          backgroundColor: 'transparent',
        },
        ...sx,
      }}
      {...props}
      disabled={disabled}
    >
      {children}
    </ButtonBase>
  );
};
