import {
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';

export const muiTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'dark',
      primary: { main: '#009688' },
      secondary: { main: '#d32f2f' },
    },
    spreddable: {
      miniWrapper: {
        margin: '10px 30px',
        textAlign: 'center',
      },
      smallWrapper: {
        margin: '20px 60px',
        textAlign: 'center',
      },
      mediumWrapper: {
        margin: '30px 90px',
        textAlign: 'center',
      },
      largeWrapper: {
        margin: '50px 150px',
        textAlign: 'center',
      },
    },
  })
);