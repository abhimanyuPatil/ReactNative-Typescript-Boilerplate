import {IColors, fontSizes} from 'config/theme';
import {ThemeContext} from 'context/ThemeContext';
import React, {ReactNode, useContext} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
// import {getFontStyleObject} from 'utils/getFontStyle';
export type ITypography = typeof styles;

interface IAppTextProps extends TextProps {
  children: String | ReactNode;
  type?: Array<keyof ITypography>;
}
const getType = (type: keyof ITypography, theme: IColors) => {
  return styles[type]
    ? typeof styles[type] === 'function'
      ? styles[type](theme)
      : styles[type]
    : {};
};

export const AppText = (props: IAppTextProps) => {
  const {children, style, type = [], ...rest} = props;

  const {theme} = useContext(ThemeContext);
  const textStyles = [
    StyleSheet.flatten([
      styles.text(theme),
      type.map(e => getType(e, theme)),
      style,
    ]),
  ];

  return (
    <Text style={textStyles} allowFontScaling={false} {...rest}>
      {children}
    </Text>
  );
};

const styles = {
  text: (theme: IColors) => ({
    color: theme.textColor,
    fontSize: fontSizes.base,
    // ...getFontStyleObject({family: 'Gilroy', weight: 'Regular'}), add your custom font
  }),
  bold: (theme: IColors) => ({
    // ...getFontStyleObject({family: 'Gilroy', weight: 'Bold'}),
  }),
  header: (theme: IColors) => ({
    fontSize: fontSizes.large,
    // ...getFontStyleObject({family: 'Gilroy', weight: 'Bold'}),
  }),
  center: (theme: IColors) => ({
    textAlign: 'center',
  }),
  capitalize: (theme: IColors) => ({
    textTransform: 'capitalize',
  }),
  label: (theme: IColors) => ({
    paddingLeft: '2%',
    marginBottom: 10,
    fontSize: 16,
  }),
  error: (theme: IColors) => ({
    color: 'red',
    fontSize: fontSizes.error,
    paddingLeft: '2%',
  }),
  small: (theme: IColors) => ({
    fontSize: fontSizes.small,
  }),
  xSmall: (theme: IColors) => ({
    fontSize: fontSizes.xsmall,
  }),
  underline: (theme: IColors) => ({
    textDecorationLine: 'underline',
  }),
  uppercase: (theme: IColors) => ({
    textTransform: 'uppercase',
  }),
  placeholder: (theme: IColors) => ({
    color: theme.placeholder,
  }),
  muted: (theme: IColors) => ({
    color: '#ccc',
  }),
  italic: (theme: IColors) => ({
    fontStyle: 'italic',
  }),
};
