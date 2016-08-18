import React from 'react';
import Team from './Team';
import apiKey from './apiKey';

class Fixture extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    const {awayTeamName, homeTeamName, date, result } = this.props;
    return(
      <li>{date}
        <ul>
          <li>{homeTeamName}--  {result.goalsHomeTeam}</li>
          <li>{awayTeamName}--  {result.goalsAwayTeam}</li>
        </ul>
      </li>
    )
  }
}

export default Fixture;
