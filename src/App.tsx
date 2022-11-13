import Wrapper from 'components/Wrapper';
import './App.css';
import { ThemeProvider } from 'styled-components'
import React from 'react'

function App() {

  const children = React.useMemo(() => <Wrapper />, [])

  return (
    <ThemeProvider theme={{ mode: 'default' }}>
        {children}
    </ThemeProvider>
  );
}

export default App;
