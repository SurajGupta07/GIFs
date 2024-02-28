import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';
import {theme} from '../../theme';
import dimensions from '../../utils/dimensions';

const startRotationAnimation = (
  durationMs: number,
  rotationDegree: Animated.Value,
): void => {
  Animated.loop(
    Animated.timing(rotationDegree, {
      toValue: 360,
      duration: durationMs,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();
};

export const Loader = (): JSX.Element => {
  const rotationDegree = useRef(new Animated.Value(0)).current;
  const durationMs = 1100;

  useEffect(() => {
    startRotationAnimation(durationMs, rotationDegree);
  }, [durationMs, rotationDegree]);

  return (
    <View style={styles.container} accessibilityRole="progressbar">
      <View style={styles.background} />
      <Animated.View
        style={[
          styles.progress,
          {
            transform: [
              {
                rotateZ: rotationDegree.interpolate({
                  inputRange: [0, 360],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
};

const height = dimensions.viewHeight(44);

const styles = StyleSheet.create({
  container: {
    width: height,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
    borderRadius: height / 2,
    borderWidth: 4,
  },
  progress: {
    width: '100%',
    height: '100%',
    borderRadius: height / 2,
    borderTopColor: theme.palette.dark.light,
    borderWidth: 4,
    position: 'absolute',
  },
});
