import {IPalette, palette} from './palette';
import {ITypography, typography} from './typography';
import {ISpacing, spacing} from './spacing';

export interface AppTheme {
  typography: ITypography;
  palette: IPalette;
  spacing: ISpacing;
}

export const theme: AppTheme = {
  typography,
  palette,
  spacing,
};
