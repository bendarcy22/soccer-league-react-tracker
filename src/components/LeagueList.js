import React from 'react';
import League from './League';
import apiKey from './apiKey';


class LeagueList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      leagues: [],
      selectedLeagueId: null
    };
    this.handleLeagueClick = this.handleLeagueClick.bind(this);
  };

  getLeagues() {
    $.ajax({
      url: "http://api.football-data.org/v1/competitions/?season=2016",
      beforeSend: (xhr) => {
        xhr.setRequestHeader('X-Auth-Token', apiKey);
      }
    })
    .done(data => {
      this.setState({ leagues: data })
    });
  }

  componentDidMount() {
    this.getLeagues();
  };

  handleLeagueClick(id) {
    if(this.state.selectedLeagueId === null){
      this.setState({ selectedLeagueId: id });
    } else {
      this.setState({ selectedLeagueId: null });
    }
  }

  render() {
    let allLeagues = this.state.leagues.map(league => {
      return (
        <League
          key={league.id}
          {...league}
          selected={this.state.selectedLeagueId}
          onClick={this.handleLeagueClick}
        />
      );
    });
    return (
      <ul>
        {allLeagues}
      </ul>
    );
  };
}

export default LeagueList;
