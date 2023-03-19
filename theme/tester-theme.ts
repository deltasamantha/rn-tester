import {extendTheme, IButtonProps} from "native-base";

export const testerTheme = extendTheme({
  colors: {
    tag: {
      on: "#CCFBF1",
      off: "#6D9294",
    },
    tester: {
      100: "#c0ebff",
      200: "#a1e1ff",
      300: "#81d7ff",
      400: "#62cdff",
      500: "#58b9e6",
      600: "#4590b3",
      700: "#316780",
      800: "#1d3d4c",
      900: "#0a1419",
    },
    testerMuted: {
      100: "#B7BFC3",
      200: "#909EA6",
      300: "#667F8C",
      400: "#475D69",
      500: "#3C5563",
      600: "#2D4754",
      700: "#1B2F3A",
    },
    testerAccent: {
      100: "#ffd1a1",
      200: "#ffb971",
      300: "#ffa242",
      400: "#E9A178",
      500: "#e67d11",
      600: "#b3610d",
      700: "#80460a",
    },
    // danger: {
    //   // TODO: Change shades when needed to
    //   100: "#FB7185",
    //   200: "#FB7185",
    //   300: "#FB7185",
    //   400: "#FB7185",
    //   500: "#FB7185",
    //   600: "#FB7185",
    //   700: "#FB7185",
    //   800: "#FB7185",
    //   900: "#FB7185",
    // },
    whiteBtn: {
      500: "#ffffff",
      600: "#ffffff",
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  components: {
     Input: {
      variants: {
        underlined: {
          _dark: {
            color: "chatterbox.800",
            textColor: "chatterbox.800",
            borderColor: "chatterbox.800",
            placeholderTextColor: "chatterbox.500",
            _focus: {
              borderColor: "white",
            },
          },
        },
      },
    },
  }
});


type CustomThemeType = typeof testerTheme;

declare module "native-base" {
  interface ICustomTheme extends CustomThemeType {}
}
