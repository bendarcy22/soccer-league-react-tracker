import React from 'react';
import PlayerList from './PlayerList';
import apiKey from './apiKey';

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    }
  }

  getTeamPlayers(url) {
    $.ajax({
      url: url,
      beforeSend: (xhr) => {
        xhr.setRequestHeader('X-Auth-Token', apiKey);
      }
    })
    .done(data => {
      this.setState({ players: data })
    });
  }

  componentDidMount() {
    this.getTeamPlayers(this.props._links.players.href);
  }

  render() {
    const { id, name, selected } = this.props;
    const handleClick = () => this.props.onClick(id);
    if(selected === id) {
      return(
        <li onClick={handleClick}>
          {name}
          <PlayerList
            players={this.state.players}
          />
        </li>
      )
    } else {
      return(
        <li onClick={handleClick}>
          {name}
        </li>
      )
    }
  }
}

export default Team;
