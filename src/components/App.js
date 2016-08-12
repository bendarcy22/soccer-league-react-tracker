import React from 'react';
import LeagueList from './LeagueList';
import TeamList from './TeamList';
import NavLink from './NavLink';
import { IndexLink } from 'react-router';


class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <h2>Soccer Things</h2>
        <ul role="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><NavLink to="/leagues">Leagues</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default App;
