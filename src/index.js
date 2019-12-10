import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // must put these in to use bootstrap
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Footer1 from './components/Footer1'; 
import Footer2 from './components/Footer2';
import './index.css';


ReactDOM.render(
  <Router>
    <Navbar className="bg-warning">
      <Link className="p-3" to="/">Footer1</Link>
      <Link className="p-3" to="/footer2">Footer2</Link>
    </Navbar>
    <Switch>
        <Route exact path="/" component={Footer1} />
        <Route path="/footer2" component={Footer2} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
