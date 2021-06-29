import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Navbar } from './components';
import Home from './pages/Homepage/Home';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Home/>
    </Router>
  );
}

export default App;
