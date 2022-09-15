import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { FiSearch } from 'react-icons/fi';
import { useTheme, styled } from '@mui/material/styles';
import { Colors } from '../../styles/colors';

interface SearchbarProps {
  backgroundColor?: string,
  borderColor?: string,
  borderType?: 'solid' | 'gradient',
  width?: number | string,
  height?: number | string,
  placeholder?: string,
  textColor?: string,
}

export default function Searchbar({
  backgroundColor = 'transparent',
  borderColor = Colors.MAROON,
  borderType = 'gradient',
  width = 300,
  height = 40,
  placeholder = "Search...",
  textColor = "white",
}: SearchbarProps) {

  const GradientOutline = styled(Paper)(({ theme }) => ({
    position: 'relative',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width,
    height,
    color: textColor,
    background: backgroundColor,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: 50,
      border: '4px solid transparent',
      background: 'linear-gradient(90deg, #259DFE -0.86%, #8C49FB 102.01%) border-box',
      '-webkit-mask': 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
      '-webkit-mask-composite': 'destination-out',
      'mask-composite': 'exclude',
    }
  }));

  const SolidOutline = styled(Paper)(({ theme }) => ({
    position: 'relative',
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width,
    height,
    color: textColor,
    background: backgroundColor,
    borderRadius: 50,
    border: `4px solid ${borderColor}`,
  }));

  const Outline = borderType === "gradient" ? GradientOutline : SolidOutline;

  return (
    <Outline elevation={0}>
      <IconButton sx={{ p: '10px' }} aria-label="search">
        <FiSearch />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, mr: 2 }}
        placeholder={placeholder}
      />
    </Outline>
  );
}
