import {small} from 'config/theme';
import React, {useEffect, useState} from 'react';
import {Platform, TouchableOpacity, View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NeomorphFlex} from 'react-native-neomorph-shadows';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {AppText} from './AppText';
interface IAppToggle {
  containerWidth: number;
  containerHeight: number;
  selected: boolean;
  onChange: (state: boolean) => void;
  falseLabel?: string;
  trueLabel?: string;
  falseGradient?: (string | number)[];
  trueGradient?: (string | number)[];
  containerStyle?: ViewStyle;
}
export const NeomorphToggle = (props: IAppToggle) => {
  const isAndroid = Platform.OS === 'android';
  const {
    containerHeight,
    containerWidth,
    selected,
    onChange,
    falseLabel,
    trueLabel,
    falseGradient = ['#1C1F23', '#36393E'],
    trueGradient = ['#2BBA86', '#25A761'],
    containerStyle,
  } = props;
  const offset = useSharedValue(0);
  const [state, setState] = useState(false);
  useEffect(() => {
    if (selected) offset.value = containerWidth - (containerHeight - 10) - 5;
  }, [selected]);
  const defaultSpringStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value, {
            damping: 20,
            stiffness: 90,
          }),
        },
      ],
    };
  });
  return (
    <View
      style={[{flexDirection: 'row', alignItems: 'center'}, containerStyle]}>
      {!!falseLabel && (
        <AppText style={{marginRight: `${small}%`}}>{falseLabel}</AppText>
      )}
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          const newState = !state;
          setState(newState);
          if (newState)
            offset.value = containerWidth - (containerHeight - 10) - 5;
          else offset.value = 0;
          return onChange(newState);
        }}>
        <NeomorphFlex
          inner
          style={{
            backgroundColor: isAndroid ? 'transparent' : '#262626',
            width: containerWidth,
            height: containerHeight,
            borderRadius: 20,
            shadowRadius: 3,
            justifyContent: 'center',
            paddingHorizontal: 5,
          }}>
          <Animated.View
            style={[
              {
                height: containerHeight - 10,
                width: containerHeight - 10,
                borderRadius: 20,
              },
              defaultSpringStyles,
            ]}>
            <NeomorphFlex
              style={{
                backgroundColor: isAndroid ? 'transparent' : '#262626',
                height: containerHeight - 10,
                width: containerHeight - 10,
                borderRadius: 20,
                shadowRadius: 3,
                justifyContent: 'center',
              }}>
              <LinearGradient
                start={{x: 0, y: 0.7}}
                colors={state ? trueGradient : falseGradient}
                style={{
                  height: containerHeight - 10,
                  width: containerHeight - 10,
                  borderRadius: 20,
                }}></LinearGradient>
            </NeomorphFlex>
          </Animated.View>
        </NeomorphFlex>
      </TouchableOpacity>
      {!!trueLabel && (
        <AppText style={{marginLeft: `${small}%`}}>{trueLabel}</AppText>
      )}
    </View>
  );
};
