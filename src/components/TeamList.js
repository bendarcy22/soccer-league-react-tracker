import React from 'react';
import Team from './Team';
import apiKey from './apiKey';

class TeamList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: []
    }
  }
  getLeagueTeams(url) {
    $.ajax({
      url: url,
      beforeSend: (xhr) => {
        xhr.setRequestHeader('X-Auth-Token', apiKey);
      }
    })
    .done(data => {
      this.setState({ teams: data.teams })
    });
  };

  componentDidMount() {
    this.getLeagueTeams(this.props.location.query.leaguesTeamsURL)
  };

  render() {
    let teams = this.state.teams.map(team => {
      return (
        <Team
          key={team._links.self.href}
          {...team}
        />
      );
    });

    return (
      <div>
        <h1>{this.props.location.query.caption}</h1>
        <ul>
          {teams}
        </ul>
      </div>
    );
  };
};

export default TeamList;
