import { unstable_createMuiStrictModeTheme } from '@material-ui/core';
import FreightBigSemiBoldWoff2 from '../../assets/fonts/FreightBigSemibold.woff2';
import P22UndergroundLtPWoff2 from '../../assets/fonts/P22Underground-LtP.woff2';
import P22UndergroundPCpWoff2 from '../../assets/fonts/P22Underground-PCp.woff2';

const freight = {
  fontFamily: 'Freight',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Freight'),
    local('FreightBig-SemiBold'),
    url(${FreightBigSemiBoldWoff2}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const p22undergroundlt = {
  fontFamily: 'P22UndergroundLtP',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('P22Underground'),
    local('P22Underground-LtP'),
    url(${P22UndergroundLtPWoff2}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const p22undergroundpcp = {
  fontFamily: 'P22UndergroundPCp',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('P22Underground'),
    local('P22Underground-PCp'),
    url(${P22UndergroundPCpWoff2}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
export let theme =unstable_createMuiStrictModeTheme({
  palette: {
    primary: {
      light:'#1D1F2A',
      main: '#1D1F2A',
      dark: '#1D1F2A',
    },
    secondary:{
      light: '#AF231C',
      main: '#AF231C',
      dark: '#AF231C',
    }
  },
  typography: {
    fontFamily: [
      'P22UndergroundPCp',
      'P22UndergroundLtP',
      'Freight',


    ].join(','),
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          freight,
          p22undergroundlt,
          p22undergroundpcp
        ],

      },
    },
    MuiDrawer: {
      paper: {
        backgroundColor: '#1D1F2A',
      },
    },
    MuiButton: {
      label: {
        textTransform: 'none',
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: '#BD9B60',
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        margin: '0 16px',
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up('md')]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854',
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};

const drawerWidth = 256;

export const styles = {
    root: {
      display: 'flex',
      minHeight: '100vh',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    app: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    main: {
      flex: 1,
      padding: theme.spacing(6, 4),
      background: '#eaeff1',
    },
    footer: {
      padding: theme.spacing(2),
      background: '#eaeff1',
    },
  };