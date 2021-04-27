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