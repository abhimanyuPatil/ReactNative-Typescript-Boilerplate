export interface IColors{
    background:string,
    label:string,
    placeholder:string,
    textColor:string,
}

const darkColors:IColors = {
    background: "#141414",
    label: "#fff",
    placeholder: "#606060",
    textColor:"#ffffff"
}
const lightColors:IColors = {
    background: "#ffffff",
    label: "#111111",
    placeholder: "#606060",
    textColor:"#111111"
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

export const xTiny= 1;
export const tiny= 2;
export const small= 3;
export const base= 5;
export const large= 7;
export const xLarge= 10;

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