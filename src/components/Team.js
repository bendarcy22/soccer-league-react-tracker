import React from 'react';
import PlayerList from './PlayerList';
import apiKey from './apiKey';

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.onTeamClick = this.onTeamClick.bind(this);

  }

  onTeamClick() {
    this.context.router.push({
      pathname: `/${this.props.code}/players`,
      query: {
        teamsPlayersURL: this.props._links.players.href,
        name: this.props.name
      }
    })
  };


  render() {
    var router = this.context.router;
    return(
      <li onClick={this.onTeamClick}>{this.props.name}</li>
    )
  }
}

Team.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Team;
