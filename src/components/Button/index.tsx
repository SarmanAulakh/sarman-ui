import React, { FC } from 'react';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { useTheme, styled } from '@mui/material/styles';
import { Colors } from '../../styles/colors';

interface ButtonProps extends MuiButtonProps {
  className?: string;
  
  backgroundColor?: string;

  textColor?: string;

  borderType?: "square" | "rounded";

  colorType?: "solid" | "gradient";

  width?: number | string;

  height?: number | string;
}

const Button: FC<ButtonProps> = ({
  children,
  colorType,
  backgroundColor,
  borderType,
  height,
  textColor,
  width,
  ...props
}) => {
  const theme = useTheme();

  const StyledButton = styled(MuiButton)(() => {
    const styles: any = {
      width,
      height,
      color: textColor,
      padding: '10px 20px',
      borderRadius: borderType === 'rounded' ? 33 : 0,
      textTransform: 'none',
    }
    if (theme.palette.mode === 'dark') {
      if (colorType === 'gradient') {
        styles.background = backgroundColor || Colors.PRIMARY_GRADIENT;
      } else {
        styles.background = backgroundColor || Colors.MAROON;
      }
    }

    styles['&:hover'] = {
      background: styles.background
    };

    return styles;
  })

  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  variant: "contained",
  colorType: "solid",
  borderType: 'rounded',
  width: 200,
  height: 37,
};
  
export default Button;
