import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Timeline from './pages/Timeline'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Navbar from './Navbar/Navbar'


const App = () => {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/timeline" component={Timeline}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;