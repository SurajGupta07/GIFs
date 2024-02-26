export interface IColor {
  main: string;
  medium: string;
  light: string;
}

export interface IPalette {
  primary: IColor;
  success: IColor;
  error: IColor;
  dark: IColor;
  light: IColor;
  white: IColor;
  black: IColor;
}

export const palette: IPalette = {
  primary: {
    main: '#0A2885',
    medium: '#0F3CC9',
    light: '#587CEC',
  },
  success: {
    main: '#06C270',
    medium: '#39D98A',
    light: '#57EBA1',
  },
  error: {
    main: '#FF3B3B',
    medium: '#FF5C5C',
    light: '#FF8080',
  },
  dark: {
    main: '#28293D',
    medium: '#555770',
    light: '#8F90A6',
  },
  light: {
    main: '#EBEBF0',
    medium: '#F2F2F5',
    light: '#FAFAFC',
  },
  white: {
    main: '#FFFFFF',
    medium: '#E7EBF8',
    light: '#F5F5F5',
  },
  black: {
    main: '#000000',
    medium: '#141414',
    light: '#0000004d',
  },
};
