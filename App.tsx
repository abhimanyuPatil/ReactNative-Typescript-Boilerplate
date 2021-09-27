/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NeomorphButton} from 'components/NeomorphButton';
import {NeomorphToggle} from 'components/NeomorphToggle';
import React, {useContext} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
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

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: theme.background,
        paddingHorizontal: 100,
      }}>
      <NeomorphButton title="press" onPress={() => {}} />
      <NeomorphToggle
        onChange={() => {}}
        selected={false}
        containerHeight={50}
        containerWidth={100}
      />
    </View>
  );
};
export default App;
