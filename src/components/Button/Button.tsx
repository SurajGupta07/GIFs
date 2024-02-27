import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import dimensions from '../../utils/dimensions';
import {theme} from '../../theme';
import {ImageRenderer} from '../SVGImage/Image';
import {TButtonProps} from './types';

export const CustomButton: React.FC<TButtonProps> = ({
  title,
  onClick,
  isOutline = false,
  btnStyles,
  textStyles,
  showIcon = false,
  icon,
}) => {
  const buttonStyles = [isOutline ? styles.outline : styles.btn, btnStyles];
  const titleStyles = [
    isOutline ? styles.textOutline : styles.textBtn,
    textStyles,
  ];

  return (
    <Pressable onPress={onClick} style={buttonStyles}>
      {showIcon && (
        <View style={styles.icon}>
          <ImageRenderer
            assetSrc={icon}
            width={dimensions.viewWidth(20)}
            height={dimensions.viewWidth(20)}
          />
        </View>
      )}
      <Text style={titleStyles}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  outline: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    paddingHorizontal: theme.spacing.smallWidth,
    paddingVertical: theme.spacing.smallHeight,
    borderRadius: 10,
    borderWidth: 1.2,
    borderColor: theme.palette.primary.medium,
  },
  textOutline: {
    color: theme.palette.primary.medium,
    fontWeight: '500',
    fontSize: theme.typography.fontSize.normal,
  },
  btn: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: theme.palette.primary.light,
    paddingHorizontal: theme.spacing.normalWidth,
    paddingVertical: theme.spacing.normalHeight,
    borderRadius: 10,
    borderWidth: 0,
    borderColor: 'transparent',
  },
  textBtn: {
    color: theme.palette.white.main,
    fontWeight: '500',
    fontSize: theme.typography.fontSize.normal,
  },
  icon: {
    marginRight: theme.spacing.tinyWidth,
  },
});
