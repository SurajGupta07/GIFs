import React from 'react';
import {GifsProvider} from './context/gifsContext';
import {ThemeProvider} from './context/themeContext';
import {MainNavigation} from './navigation';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <GifsProvider>
        <MainNavigation />
      </GifsProvider>
    </ThemeProvider>
  );
}

export default App;
