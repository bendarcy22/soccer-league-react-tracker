import React from 'react';
import TeamList from './TeamList';
import apiKey from './apiKey';

class League extends React.Component {
  constructor(props) {
    super(props);
    this.onLeagueClick = this.onLeagueClick.bind(this);
    this.onFixtureClick = this.onFixtureClick.bind(this);
  };


  onLeagueClick() {
    this.context.router.push({
      pathname: `/${this.props.id}/teams`,
      state: {
        leaguesTeamsURL: this.props._links.teams.href,
        caption: this.props.caption
      }
    })
  };
  onFixtureClick() {
    this.context.router.push({
      pathname: `/${this.props.id}/fixtures`,
      state: {
        leaguesFixturesURL: this.props._links.fixtures.href,
        caption: this.props.caption
      }
    })
  };


  render() {
    var router = this.context.router;
    return(
      <div>
        <li onClick={this.onLeagueClick}>{this.props.caption}</li>
        <span onClick={this.onFixtureClick}>Fixtures</span>
      </div>
    )
  }
}

League.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default League;
