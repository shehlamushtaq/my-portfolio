
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Project01 from './pages/Project01';
import Project02 from './pages/Project02';
import Project03 from './pages/Project03';

function App() {
  return (
    
      <Router>
        <Header />

        <Switch>
          <Route path="/project-01">
            <Project01 />
          </Route>
          <Route path="/project-02">
            <Project02 />
          </Route>
          <Route path="/project-03">
            <Project03 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    
  );
}

export default App;
