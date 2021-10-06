/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useContext, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
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
  const {theme, toggleTheme} = useContext(ThemeContext);
  const [isDown, setDown] = useState(false);
  const handlePressIn = useCallback(() => {
    setDown(true);
  }, [setDown]);
  const handlePressOut = useCallback(() => {
    setDown(false);
  }, [setDown]);

  const gradColors = isDown ? ['#4da7db', '#5bc6ff'] : ['#5bc6ff', '#4da7db'];
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
      <Button
        containerStyle={{elevation: 4}}
        buttonStyle={[buttonFaceStyle]}
        onPress={() => toggleTheme?.()}
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
        title="Press to change theme"
      />
    </View>
  );
};

export default App;
