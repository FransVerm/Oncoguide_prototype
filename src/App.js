import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Card from './components/card'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#6fcdeb',
      main: '#4CC1E6',
      dark: '#3587a1',
      contrastText: '#fff',
    }
  },
});
function App() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Navbar/>
        <Container maxWidth="md">
          <Card/>
        </Container>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
