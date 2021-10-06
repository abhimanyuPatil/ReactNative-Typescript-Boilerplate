import {fontSizes, IColors} from 'config/theme';
import {ThemeContext} from 'context/ThemeContext';
import React, {ReactNode, useContext} from 'react';
import {Dimensions, StyleSheet, Text, TextProps} from 'react-native';
import {getFontStyleObject} from 'utils/getFontStyle';
const window = Dimensions.get('window');
export type ITypography = typeof styles;
interface ITextProps extends TextProps {
  children: string | ReactNode;
  type?: Array<keyof ITypography>;
}
const getType = (type: keyof ITypography, theme: any) => {
  return styles[type]
    ? typeof styles[type] === 'function'
      ? styles[type](theme)
      : styles[type]
    : {};
};

export const AppText = (props: ITextProps) => {
  const {theme} = useContext(ThemeContext);
  const {children, style, type = []} = props;
  const textStyle = [
    StyleSheet.flatten([
      {color: theme.text},
      styles.text(theme),
      type.map(e => getType(e, theme)),
      style,
    ]),
  ];
  return (
    <Text style={textStyle} allowFontScaling={false} {...props}>
      {children}
    </Text>
  );
};
const styles = {
  text: (theme: IColors) => ({
    color: theme.text,
    fontSize: fontSizes.base,
    ...getFontStyleObject({family: 'Gilroy', weight: 'Regular'}),
  }),
  bold: (theme: IColors) => ({
    fontSize: fontSizes.base,
    ...getFontStyleObject({family: 'Gilroy', weight: 'Bold'}),
  }),
  blue: (theme: IColors) => ({
    color: theme.blue,
  }),
  green: (theme: IColors) => ({
    color: theme.green,
  }),
  white: (theme: IColors) => ({
    color: '#fff',
  }),
  red: (theme: IColors) => ({
    color: theme.red,
  }),
  small: (theme: IColors) => ({
    fontSize: fontSizes.small,
  }),
  large: (theme: IColors) => ({
    fontSize: fontSizes.large,
    fontWeight: 'bold',
  }),
  center: (theme: IColors) => ({
    textAlign: 'center',
  }),
  header: (theme: IColors) => ({
    textAlign: 'center',
    fontSize: window.height < 650 || window.width < 400 ? 16 : fontSizes.header,
    //   ...getFontStyleObject({family: 'Lato', weight: 'Bold'}),
  }),
  validationError: (theme: IColors) => ({
    color: theme.red,
    fontSize: fontSizes.error,
    marginTop: 5,
    padding: '1%',
  }),
  capitalize: (theme: IColors) => ({
    textTransform: 'capitalize',
  }),
  uppercase: (theme: IColors) => ({
    textTransform: 'uppercase',
  }),
  grey: (theme: IColors) => ({
    color: theme.grey,
  }),
};
