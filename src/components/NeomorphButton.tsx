import handleNeomorphicPress from 'hooks/handleNeomorphicPress';
import React from 'react';
import {Platform, TouchableOpacity, View} from 'react-native';
import {ButtonProps} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {NeomorphFlex} from 'react-native-neomorph-shadows';
import {AppText} from './AppText';
interface IAppButton extends ButtonProps {
  onPress: () => void;
}
const btnMainColor = '#25A761';
// const btnMainColor = '#4c71d5';
const btnSecondaryColor = '#2BBA86';
// const btnSecondaryColor = '#5a86fe';
export const NeomorphButton = (props: IAppButton) => {
  const {handlePressIn, handlePressOut, isDown} = handleNeomorphicPress();
  const isAndroid = Platform.OS === 'android';
  const {title, onPress, iconRight = false, icon} = props;

  return (
    <NeomorphFlex
      inner={isDown}
      style={{
        shadowRadius: 10,
        backgroundColor: isAndroid ? 'transparent' : btnMainColor,
        marginVertical: 30,
        borderRadius: 25,
        height: 48,
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => onPress()}
        style={[
          isAndroid
            ? {
                backgroundColor: btnMainColor,
                borderRadius: 25,
                height: 48,
                justifyContent: 'center',
              }
            : {},
        ]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}>
        {isDown ? (
          <View
            style={{
              height: 48,
              borderRadius: 40,
              justifyContent: 'center',
              borderWidth: 2,
              borderColor: btnMainColor,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{flex: 1}}>
              <AppText
                style={{opacity: 0.8}}
                type={['center', 'uppercase', 'bold']}>
                {title}
              </AppText>
            </View>
            {iconRight && <View style={[{flex: 0.1}]}>{icon}</View>}
          </View>
        ) : (
          <LinearGradient
            style={{
              height: 48,
              borderRadius: 40,
              justifyContent: 'center',
              borderWidth: 2,
              borderColor: btnMainColor,
              flexDirection: 'row',
              alignItems: 'center',
            }}
            colors={[btnSecondaryColor, btnMainColor]}>
            <View style={{flex: 1}}>
              <AppText
                style={{zIndex: 1000}}
                type={['center', 'uppercase', 'bold']}>
                {title}
              </AppText>
            </View>
            {iconRight && <View style={[{flex: 0.1}]}>{icon}</View>}
          </LinearGradient>
        )}
      </TouchableOpacity>
    </NeomorphFlex>
  );
};
