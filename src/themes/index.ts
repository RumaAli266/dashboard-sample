import { Theme, ThemeOptions, Palette } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import '@mui/lab/themeAugmentation';

// assets
// import { darkColors, lightColors } from './Colors';

import color from '../assets/scss/_themes-vars.module.scss'


interface BasicThreeColors {
  light: React.CSSProperties['color'];
  main: React.CSSProperties['color'];
  dark: React.CSSProperties['color'];
}

interface FiveColors extends BasicThreeColors {
  200: React.CSSProperties['color'];
  800: React.CSSProperties['color'];
}

interface SuccessColor extends BasicThreeColors {
  200: React.CSSProperties['color'];

}

// Assuming your custom theme structure includes a `TypographyStyle` type
interface CustomInput {
  marginTop?: number;
  marginBottom?: number;
  '& > label': {
    top: number;
    left: number;
    color: string; // Assuming color is a string, you can adjust this based on the actual type
    '&[data-shrink="false"]': {
      top: number;
    };
  };
  '& > div > input': {
    padding: string;
  };
  '& legend': {
    display: string;
  };
  '& fieldset': {
    top: number;
  };
}


interface CommonAvatar {
  cursor: string;
  borderRadius: string;
}

interface AvatarType {
  width: string;
  height: string;
  fontSize: string;

}

interface SubMenuCaption {
  fontSize: string;
  fontWeight: number;
  color: string;
  textTransform: string;
}

interface MenuCaptionType {
  fontSize: string;
  fontWeight: number;
  color: string;
  textTransform: string;
  padding: string;
  marginTop: string;

}

interface MainContentType {
  backgroundColor: string;
  width: string;
  minHeight: string;
  flexGrow: number
  padding: string
  marginTop: string;
  marginRight: string;
  borderRadius: string;
}



// interface Palette {
//   common: {
//     black: React.CSSProperties['color'];
//   },
//   primary: string;
//   secondary: FiveColors;
//   success: SuccessColor;
//   warning: BasicThreeColors;
//   error: BasicThreeColors;
//   orange: BasicThreeColors;
//   grey: {
//     50: React.CSSProperties['color'];
//     100: React.CSSProperties['color'];
//     200: React.CSSProperties['color'];
//     300: React.CSSProperties['color'];
//     400: React.CSSProperties['color'];
//     500: React.CSSProperties['color'];
//     600: React.CSSProperties['color'];
//     700: React.CSSProperties['color'];
//     800: React.CSSProperties['color'];
//     900: React.CSSProperties['color'];
//   };
// }


declare module '@mui/material/styles' {
  interface Theme {
    colors:object;
    text: {
      dark: string;
      hint: string;
    }      
    
    fontFamily: string;
    heading: React.CSSProperties['color'];
    paper: React.CSSProperties['color'];
    backgroundDefault: React.CSSProperties['color'];
    background: React.CSSProperties['color'];
    darkTextPrimary: React.CSSProperties['color'];
    darkTextSecondary: React.CSSProperties['color'];
    textDark: React.CSSProperties['color'];
    menuSelected: React.CSSProperties['color'];
    menuSelectedBack: React.CSSProperties['color'];
    divider: React.CSSProperties['color'];
    borderRadius:number;
    bgColor: React.CSSProperties['color'];

    commonAvatar: CommonAvatar;
    smallAvatar: AvatarType;
    mediumAvatar: AvatarType;
    largeAvatar: AvatarType;
    menuCaption: MenuCaptionType;
    subMenuCaption: SubMenuCaption;
    customInput: CustomInput;
    mainContent: MainContentType;
  }

  interface ThemeOptions {
    text: {
      dark: string;
      hint: string;
    }

    fontFamily?: string;
    heading?: React.CSSProperties['color'];
    paper?: React.CSSProperties['color'];
    backgroundDefault?: React.CSSProperties['color'];
    background?: React.CSSProperties['color'];
    darkTextPrimary?: React.CSSProperties['color'];
    darkTextSecondary?: React.CSSProperties['color'];
    textDark?: React.CSSProperties['color'];
    menuSelected?: React.CSSProperties['color'];
    menuSelectedBack?: React.CSSProperties['color'];
    divider?: React.CSSProperties['color'];
    borderRadius?:number;
    bgColor?: React.CSSProperties['color'];


    commonAvatar: CommonAvatar;
    smallAvatar: AvatarType;
    mediumAvatar: AvatarType;
    largeAvatar: AvatarType;
    menuCaption: MenuCaptionType;
    subMenuCaption: SubMenuCaption;
    customInput: CustomInput;
    mainContent: MainContentType;

  }

  interface PaletteColor  {
    200: string;
    800: string;
  }

  interface Palette {
    primary: PaletteColor;
    secondary: PaletteColor;
    

    orange: Palette['primary'];
    dark: {
      light: React.CSSProperties['color'];
      main: React.CSSProperties['color'];
      dark: React.CSSProperties['color'];
      800: React.CSSProperties['color'];
      900: React.CSSProperties['color'];
    };
  }

  interface PaletteOptions {
    orange?: PaletteOptions['primary'];
    dark?: {
      light: React.CSSProperties['color'];
      main: React.CSSProperties['color'];
      dark: React.CSSProperties['color'];
      800: React.CSSProperties['color'];
      900: React.CSSProperties['color'];
    };

  }





}




const custom = {
  colors: color,
  fontFamily: `'Roboto', sans-serif`,
  heading: color.grey900,
  paper: color.paper,
  backgroundDefault: color.paper,
  background: color.primaryLight,
  darkTextPrimary: color.grey700,
  darkTextSecondary: color.grey500,
  textDark: color.grey900,
  menuSelected: color.secondaryDark,
  menuSelectedBack: color.secondaryLight,
  divider: color.grey200,
  borderRadius:12,
  bgColor: color?.grey50

}


export const theme = () => createTheme({


  text: {
    dark: custom.textDark,
    hint: custom.colors?.grey100
  },
  commonAvatar: {
    cursor: 'pointer',
    borderRadius: '8px',
  },

  smallAvatar: {
    width: '22px',
    height: '22px',
    fontSize: '1rem',
  },
  mediumAvatar: {
    width: '34px',
    height: '34px',
    fontSize: '1.2rem',
  },
  largeAvatar: {
    width: '44px',
    height: '44px',
    fontSize: '1.5rem',
  },

  menuCaption: {
    fontSize: '0.875rem',
    fontWeight: 500,
    color: custom.heading,
    padding: '6px',
    textTransform: 'capitalize',
    marginTop: '10px',
  },
  subMenuCaption: {
    fontSize: '0.6875rem',
    fontWeight: 500,
    color: custom.darkTextSecondary,
    textTransform: 'capitalize',
  },

  customInput: {
    marginTop: 1,
    marginBottom: 1,
    '& > label': {
      top: 23,
      left: 0,
      color: custom.colors?.grey500,
      '&[data-shrink="false"]': {
        top: 5,
      },
    },
    '& > div > input': {
      padding: '30.5px 14px 11.5px !important',
    },
    '& legend': {
      display: 'none',
    },
    '& fieldset': {
      top: 0,
    },
  },
  mainContent: {
    backgroundColor: custom.colors.paper,
    width: '100%',
    minHeight: 'calc(100vh - 88px)',
    flexGrow: 1,
    padding: '20px',
    marginTop: '88px',
    marginRight: '20px',
    borderRadius: `${custom.borderRadius}px`,
  },

  palette: {
    mode: 'light',
    common: {
      black: custom.colors.paper
    },
    primary: {
      light: custom.colors?.primaryLight,
      main: custom.colors?.primaryMain,
      dark: custom.colors?.primaryDark,
      200: custom.colors?.primary200,
      800: custom.colors?.primary800
    },
    secondary: {
      light: custom.colors?.secondaryLight,
      main: custom.colors?.secondaryMain,
      dark: custom.colors?.secondaryDark,
      200: custom.colors?.secondary200,
      800: custom.colors?.secondary800
    },
    error: {
      light: custom.colors?.errorLight,
      main: custom.colors?.errorMain,
      dark: custom.colors?.errorDark
    },
    orange: {
      light: custom.colors?.orangeLight,
      main: custom.colors?.orangeMain,
      dark: custom.colors?.orangeDark
    },
    warning: {
      light: custom.colors?.warningLight,
      main: custom.colors?.warningMain,
      dark: custom.colors?.warningDark
    },
    success: {
      light: custom.colors?.successLight,
      200: custom.colors?.success200,
      main: custom.colors?.successMain,
      dark: custom.colors?.successDark
    },
    grey: {
      50: custom.colors?.grey50,
      100: custom.colors?.grey100,
      500: custom.darkTextSecondary,
      600: custom.heading,
      700: custom.darkTextPrimary,
      900: custom.textDark
    },
    dark: {
      light: custom.colors?.darkTextPrimary,
      main: custom.colors?.darkLevel1,
      dark: custom.colors?.darkLevel2,
      800: custom.colors?.darkBackground,
      900: custom.colors?.darkPaper
    },
    text: {
      primary: custom.darkTextPrimary,
      secondary: custom.darkTextSecondary,
    },
    background: {
      paper: custom.paper,
      default: custom.backgroundDefault
    }
  },

  typography: {
    fontFamily: custom.fontFamily,
    h6: {
      fontWeight: 500,
      color: custom.heading,
      fontSize: '0.75rem',
    },
    h5: {
      fontSize: '0.875rem',
      color: custom.heading,
      fontWeight: 500,
    },
    h4: {
      fontSize: '1rem',
      color: custom.heading,
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.25rem',
      color: custom.heading,
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.5rem',
      color: custom.heading,
      fontWeight: 700,
    },
    h1: {
      fontSize: '2.125rem',
      color: custom.heading,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 500,
      color: custom.textDark
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 400,
      color: custom.darkTextSecondary
    },
    caption: {
      fontSize: '0.75rem',
      color: custom.darkTextSecondary,
      fontWeight: 400,
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.334em',
    },
    body2: {
      letterSpacing: '0em',
      fontWeight: 400,
      lineHeight: '1.5em',
      color: custom.darkTextPrimary
    },
    button: {
      textTransform: 'capitalize',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: '4px'
        }
      }
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none'
        },
        rounded: {
          borderRadius: `${custom.borderRadius}px`
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: custom.textDark,
          padding: '24px'
        },
        title: {
          fontSize: '1.125rem'
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '24px'
        }
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '24px'
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: custom.darkTextPrimary,
          paddingTop: '10px',
          paddingBottom: '10px',
          '&.Mui-selected': {
            color: custom.menuSelected,
            backgroundColor: custom.menuSelectedBack,
            '&:hover': {
              backgroundColor: custom.menuSelectedBack
            },
            '& .MuiListItemIcon-root': {
              color: custom.menuSelected
            }
          },
          '&:hover': {
            backgroundColor: custom.menuSelectedBack,
            color: custom.menuSelected,
            '& .MuiListItemIcon-root': {
              color: custom.menuSelected
            }
          }
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: custom.darkTextPrimary,
          minWidth: '36px'
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: custom.textDark
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: custom.textDark,
          '&::placeholder': {
            color: custom.darkTextSecondary,
            fontSize: '0.875rem'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: custom.bgColor,
          borderRadius: `${custom.borderRadius}px`,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: custom.colors?.grey400
          },
          '&:hover $notchedOutline': {
            borderColor: custom.colors?.primaryLight
          },
          '&.MuiInputBase-multiline': {
            padding: 1
          }
        },
        input: {
          fontWeight: 500,
          background: custom.bgColor,
          padding: '15.5px 14px',
          borderRadius: `${custom.borderRadius}px`,
          '&.MuiInputBase-inputSizeSmall': {
            padding: '10px 14px',
            '&.MuiInputBase-inputAdornedStart': {
              paddingLeft: 0
            }
          }
        },
        inputAdornedStart: {
          paddingLeft: 4
        },
        notchedOutline: {
          borderRadius: `${custom.borderRadius}px`
        }
      }
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: custom.colors?.grey300
          }
        },
        mark: {
          backgroundColor: custom.paper,
          width: '4px'
        },
        valueLabel: {
          color: custom?.colors?.primaryLight
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: custom.divider,
          opacity: 1
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          color: custom.colors?.primaryDark,
          background: custom.colors?.primary200
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          '&.MuiChip-deletable .MuiChip-deleteIcon': {
            color: 'inherit'
          }
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: custom.paper,
          background: custom.colors?.grey700
        }
      }
    }

  }

})

export default theme;
