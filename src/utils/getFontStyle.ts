import { Platform } from "react-native";

interface IWeights {
    [key: string]:
      | '400'
      | 'normal'
      | 'bold'
      | '100'
      | '200'
      | '300'
      | '500'
      | '600'
      | '700'
      | '800'
      | '900'
      | undefined;
  }
  const fonts = {
    Gilroy: {
      weights: {
        Regular: '400',
        Bold: '900',
      } as IWeights,
    },
  };
  
  interface IParams {
      family?: 'Gilroy';
    weight?: 'Regular' | 'Bold';
  }
  
  export const getFontStyleObject = (params: IParams = {}) => {
    const { family = 'Gilroy', weight = 'Regular' } = params;
  
    const { weights } = fonts[family];
  
      const suffix = weights[weight] ? weight : '';
      return { fontFamily: family + (suffix.length ? `-${suffix}` : '') };

  };
  