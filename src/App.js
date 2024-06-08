import React, { useState } from 'react';
import { Container, CssBaseline, ThemeProvider} from '@mui/material';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import darkTheme from '../src/components/theme';
import Featured from './components/Featured';
import './index.css';



function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container   disableGutters
        maxWidth={false}
        style={{ padding: 0, margin: 0, width: '100%', height: '100%' }}>
       
      <Navbar />
      <Hero onSearch={handleSearch}/>
      <Featured searchTerm={searchTerm}/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
