import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import {mix} from 'react-native-redash';

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ({progress}) => {
  const style = useAnimatedStyle(() => ({
    transform: [{rotateZ: `${mix(progress.value, 0, Math.PI)}rad`}],
  }));
  return (
    <Animated.View style={[styles.container, style]}>
      <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        stroke="black"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M6 9l6 6 6-6" />
      </Svg>
    </Animated.View>
  );
};
