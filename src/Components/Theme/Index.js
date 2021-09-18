import {createTheme} from '@shopify/restyle';
import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const size = {
  //Primary
  width: width,
  height: height,
};

export const palette = {
  //Primary
  primary: '#D71513',
  primary2: '#F5F5F5',
  // Secondary
  secondary: '#292929',
  secondary1: '#6B6B6B',
  secondary2: '#6B6B6B',
  secondary3: '#6B6B6B',
  //Tertiary
  tertiary: '#6C6E68',
  //Supporting colos
  support: '#8D6CAB',
};

export const TypographyStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentFlow: {flexGrow: 1},
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  card: {
    minHeight: 175,
    backgroundColor: 'white',
    borderRadius: 25,
    marginHorizontal: 30,
  },
  content: {
    flex: 1,
  },
});

export const fonts = {
  bold: 'Roboto-Bold',
  medium: 'Roboto-Medium',
  thin: 'Roboto-Thin',
  thinitalic: 'Roboto-ThinItalic',
  mediumItalic: 'Roboto-MediumItalic',
  regular: 'Roboto-Regular',
  italicLight: 'Roboto-LightItalic',
  italicBlack: 'Roboto-BlackItalic',
  boldItalic: 'Roboto-BoldItalic',
  italic: 'Roboto-Italic',
  black: 'Roboto-Black',
  condensedBold: 'RobotoCondensed-Bold',
};

const theme = createTheme({
  colors: {
    white: 'white',
    black: 'black',

    //Primary
    primary: palette.primary,
    primary2: palette.primary2,
    // Secondary
    secondary: palette.secondary,
    secondary3: palette.secondary3,
    //Tertiary
    tertiary: palette.tertiary,
    //Supporting colos
    support: palette.support,

    // list color
    listColor: palette.listColor,
  },
  spacing: {
    n: 0,
    s: 5,
    m: 10,
    l: 20,
    xl: 25,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    black20Medium: {
      color: 'black',
      fontFamily: fonts.medium,
      fontSize: 20,
    },
    black16Regular: {
      color: 'black',
      fontFamily: fonts.regular,
      fontSize: 16,
    },
    secondary3Regular: {
      color: 'secondary3',
      fontFamily: fonts.regular,
      fontSize: 16,
    },
  },
});

export type Theme = typeof theme;
export default theme;
