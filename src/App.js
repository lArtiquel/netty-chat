import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import { muiTheme } from './muiTheme'
import PageTemplate from './components/pages/PageTemplate'
import Home from './components/pages/Home'
import Profile from './components/pages/Profile/Profile'
import Chat from './components/pages/Chat/Chat'
/* <PageTemplate page="Profile">
        <Profile />
      </PageTemplate> */
function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  )
}

export default App
