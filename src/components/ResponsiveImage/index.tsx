import React from "react";
import { useTheme } from "@mui/material";
import './styles.css'

export interface Images {
  xs?: string;
  sm?: string;
  md?: string;
  lg: string;
  xl?: string;
}

interface IResponsiveImage {
  id?: string,
  alt: string;
  images: Images;
  className?: string;
  children?: any;
  width?: string | number;
  height: string | number;
}

export default function ResponsiveImage({
  id,
  images,
  alt,
  className,
  children,
  width = '100%',
  height = 500,
}: IResponsiveImage) {
  const theme = useTheme();
  const { xs, sm, md, lg, xl } = theme.breakpoints.values;
  return (
    <div className="page-banner" id={id} style={{ width, height }} >
      <picture>
        <source srcSet={images.xl} media={`(min-width: ${xl}px)`} />
        <source srcSet={images.lg} media={`(min-width: ${lg}px) and (max-width: ${xl - 1}px)`} />
        <source srcSet={images.md} media={`(min-width: ${md}px) and (max-width: ${lg - 1}px)`} />
        <source srcSet={images.sm} media={`(min-width: ${sm}px) and (max-width: ${md - 1}px)`} />
        <source srcSet={images.xs} media={`(min-width: ${xs}px) and (max-width: ${sm - 1}px)`} />
        <img src={images.lg} alt={alt} className={className} loading="lazy" />
      </picture>
      {children}
    </div>
  );
}
