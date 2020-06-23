import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  color: {
    primary: '#ff784e',
    secondary: '#ffa733',
    error: '#e57373',
  },
  typography: {
    fontFamily: 'Roboto',
  },
  shape: {
    borderRadius: 4,
    backgroundColor: '#388e3c',
    textColor: '#FFFFFF',
    border: '#CCCCCC',
  },
});

export default theme;
