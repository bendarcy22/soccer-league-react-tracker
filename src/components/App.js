import React from 'react';
import { IndexLink, Link } from 'react-router';

const App = props => {
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <p className="navbar-brand">Soccer Things</p>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
              <li><Link to="/leagues">Leagues</Link></li>
              <li><Link to="/fixtures">Fixtures</Link></li>
            </ul>
          </div>
        </div>
      </nav>
      {props.children}
    </div>
  )
}

export default App;
