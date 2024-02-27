import {TextStyle, ViewStyle} from 'react-native';

export type TButtonProps = {
  title: string;
  onClick: () => void;
  isOutline?: boolean;
  btnStyles?: ViewStyle;
  textStyles?: TextStyle;
  showIcon?: boolean;
  icon?: string;
};
