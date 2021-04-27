/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useContext, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {ThemeContext, ThemeProvider} from './src/context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView style={{flex: 1}}>
        <Home />
      </SafeAreaView>
    </ThemeProvider>
  );
};
const Home = () => {
  const {theme, changeTheme, themeName} = useContext(ThemeContext);
  const [isDown, setDown] = useState(false);
  const handlePressIn = useCallback(() => {
    setDown(true);
  }, [setDown]);
  const handlePressOut = useCallback(() => {
    setDown(false);
  }, [setDown]);

  const gradColors = isDown ? ['#4da7db', '#5bc6ff'] : ['#5bc6ff', '#4da7db'];
  const buttonCommonStyle = {
    borderRadius: 8,
    shadowRadius: 8 * 1.5,
  };
  const buttonOuterStyle = {
    shadowOffset: {width: 8, height: 8},
    marginTop: 8,
    marginBottom: 8,
  };
  const buttonInnerStyle = {
    shadowOffset: {width: -8, height: -8},
  };
  const buttonFaceStyle = {
    borderRadius: 8,
    padding: 8,
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: theme.background,
        paddingHorizontal: 100,
      }}>
      <View style={[styles.buttonOuter, buttonCommonStyle, buttonOuterStyle]}>
        <View style={[styles.buttonInner, buttonCommonStyle, buttonInnerStyle]}>
          <Button
            containerStyle={{elevation: 4}}
            buttonStyle={[buttonFaceStyle]}
            onPress={() => {
              themeName === 'dark'
                ? changeTheme?.('light')
                : changeTheme?.('dark');
            }}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            ViewComponent={LinearGradient} // Don't forget this!
            linearGradientProps={{
              colors: gradColors,
              useAngle: true,
              angle: 145,
              angleCenter: {x: 0.5, y: 0.5},
              start: {x: 0, y: 0.5},
              end: {x: 1, y: 0.5},
            }}
            title="Press"
          />
        </View>
      </View>
      {/* <TouchableWithoutFeedback
        onPress={() => changeTheme?.('light')}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}>
        <View style={[styles.buttonOuter, buttonCommonStyle, buttonOuterStyle]}>
          <View
            style={[styles.buttonInner, buttonCommonStyle, buttonInnerStyle]}>
            <LinearGradient
              colors={gradColors}
              useAngle={true}
              angle={145}
              angleCenter={{x: 0.5, y: 0.5}}
              style={[styles.buttonFace, buttonFaceStyle, {padding: 60}]}>
              <Text>Hello</Text>
            </LinearGradient>
          </View>
        </View>
      </TouchableWithoutFeedback> */}
    </View>
  );
};
const styles = StyleSheet.create({
  buttonOuter: {
    borderRadius: 12,
    shadowOffset: {width: 12, height: 12},
    shadowColor: '#489dcf',
    shadowOpacity: 1.0,
    shadowRadius: 18,
    marginTop: 12,
    marginBottom: 12,
    elevation: 4,
  },
  buttonInner: {
    backgroundColor: '#55b9f3',
    borderRadius: 12,
    shadowOffset: {width: -12, height: -12},
    shadowColor: '#62d5ff',
    shadowOpacity: 1.0,
    shadowRadius: 18,
    elevation: 3,
  },
  buttonFace: {
    borderRadius: 12,
    padding: 12,
  },
});

export default App;
