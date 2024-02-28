import {StyleSheet} from 'react-native';
import {theme} from '../../theme';
import dimensions from '../../utils/dimensions';

export const useStyles = (backgroundColor: string, textColor: string) =>
  StyleSheet.create({
    flexRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    flexEnd: {
      alignItems: 'flex-end',
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    paginationLoader: {
      alignItems: 'center',
    },
    container: {
      flex: 1,
      paddingHorizontal: theme.spacing.normalWidth,
      paddingVertical: theme.spacing.averageHeight,
      backgroundColor: backgroundColor,
    },
    btn: {
      height: dimensions.viewHeight(40),
    },
    gif: {
      height: dimensions.viewHeight(150),
      width: dimensions.viewWidth(150),
    },
    textInput: {
      height: dimensions.viewHeight(40),
      width: dimensions.viewWidth(200),
      borderRadius: 4,
      borderWidth: 1,
      borderColor: theme.palette.dark.light,
      paddingHorizontal: dimensions.viewWidth(10),
      color: textColor,
    },
    gifsContainer: {
      marginVertical: theme.spacing.averageHeight,
      marginRight: theme.spacing.averageWidth,
    },
    btnContainer: {
      width: dimensions.viewWidth(100),
      alignItems: 'center',
    },
  });
