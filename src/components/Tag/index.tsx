import React, { FC, memo, ReactNode } from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { useTheme, styled } from '@mui/material/styles';
import { Colors } from '../../styles/colors';

interface TagProps extends ButtonProps {
  className?: string;

  onClick?: () => void;
  
  backgroundColor?: string;

  textColor?: string;

  width?: number | string;

  height?: number | string;
 
  /**
   * Tag content
   */
  label: string;
}

function Tag({
  backgroundColor,
  label,
  textColor,
  height = 35,
  width = 'max-content',
  ...props
}: TagProps) {
  const theme = useTheme();

  const StyledTag = styled(Button)(() => {
    const styles: any = {
      width,
      height,
      padding: '10px',
      borderRadius: '33px',
      textTransform: 'none',
    }
    if (theme.palette.mode === 'dark') {
      styles.background = backgroundColor || Colors.PURPLE_DARK;
      styles.color = textColor || Colors.PURPLE_LIGHT_TEXT;
    }

    styles['&:hover'] = {
      background: styles.background
    };

    return styles;
  })

  return (
    <StyledTag {...props}>
      {label}
    </StyledTag>
  );
};

export default memo(Tag);
