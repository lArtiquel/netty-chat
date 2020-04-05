import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { muiTheme } from './util/muiTheme';
import PageTemplate from './pages/PageTemplate';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <PageTemplate page='Profile'>
        <Profile />
      </PageTemplate>
    </ThemeProvider>
  );
}

export default App;
