import React from 'react';
import TeamList from './TeamList';
import apiKey from './apiKey';

class League extends React.Component {
  constructor(props) {
    super(props);
    this.onLeagueClick = this.onLeagueClick.bind(this);
  };


  onLeagueClick() {
    this.context.router.push({
      pathname: `/${this.props.id}/teams`,
      query: {
        leaguesTeamsURL: this.props._links.teams.href
      }
    })
  };


  render() {
    var router = this.context.router;
    return(
      <li onClick={this.onLeagueClick}>{this.props.caption}</li>
    )
  }
}

League.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default League;
