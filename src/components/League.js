import React from 'react';
import TeamList from './TeamList';
import apiKey from './apiKey';

class League extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: []
    };
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
  }

  componentDidMount() {
    this.getLeagueTeams(this.props._links.teams.href)
  }
  render() {
    const { id, caption, selected } = this.props;
    const handleClick = () => this.props.onClick(id);
    if(selected === id) {
      return(
        <li onClick={handleClick}>
          {caption}
          <TeamList
            teams={this.state.teams}
          />
        </li>
      )
    } else {
      return(
        <li onClick={handleClick}>
          {caption}
        </li>
      )
    }
  }
}

export default League;
