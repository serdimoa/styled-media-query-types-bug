import { generateMedia } from 'styled-media-query';

export const media = generateMedia({
  xs: 0,
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
});

export const size = (
  width: string | number,
  height: string | number = width,
) => ({ width, height });
