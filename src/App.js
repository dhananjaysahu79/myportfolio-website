import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar ,Footer} from './components';
import ScrollToTop from './components/scrollToTop';
import Home from './pages/Homepage/Home';
import About from './pages/About/About';
import Works from './pages/Works/Works';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path = '/' exact component = {Home}/>
        <Route path = '/about' component = {About}/>
        <Route path = '/works' component = {Works}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
