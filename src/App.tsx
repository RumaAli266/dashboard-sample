import React from 'react';

import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import NavigationScroll from './layout/NavigationScroll';
// routing
import Routes from './routes';

// defaultTheme
import themes from './themes/index';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';

function App() {

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes()}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
