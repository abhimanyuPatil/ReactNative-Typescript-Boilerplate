export interface IColors{
    background: string,
    text:string,
    blue: string,
    green:string,
    cardBg: string,
    red: string,
    grey:string
}

const darkColors:IColors = {
    background: "#111117",
    text:'#f4f4f5',
    cardBg: "#22222f",
    blue: "#798dff",
    red: "#ff5e93",
    green: "#0bb68c",
    grey:"#8B8C8F"
}
const lightColors:IColors = {
    background: "#E6EDF4",
    text:"#1f2127",
    cardBg: "#fff",
    red:"#da4c7b",
    blue: "#405cf9",
    grey:"#242424",
    green:"#0bb68c"
}
export interface IThemeData{
    light: IColors,
    dark: IColors,
    spacing: {
        xTiny:Number,
        tiny:Number,
        small:Number,
        base:Number,
        large:Number,
        xLarge:Number,
    }
}
export const xTiny = 1;
export const tiny = 2;
export const small = 3;
export const base = 5;
export const large = 7;
export const xLarge = 10;
export const themeData:IThemeData = {
    light: lightColors,
    dark: darkColors,
    spacing: {
        xTiny: 1,
        tiny: 2,
        small: 3,
        base: 5,
        large: 7,
        xLarge: 10
    }
}
export interface IFontSizes {
    base: number;
    small: number;
    header: number;
    large: number;
    error: number;
    xsmall:number
}
  
export const fontSizes:IFontSizes = {
    base: 16,
    small: 14,
    header: 22,
    large: 18,
    error: 12,
    xsmall:10
};