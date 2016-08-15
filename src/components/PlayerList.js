import React from 'react';
import Player from './Player';
import apiKey from './apiKey';

class PlayerList extends React.Component {
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
      this.setState({ players: data.players })
    });
  }

  componentDidMount() {
    this.getTeamPlayers(this.props.location.query.teamsPlayersURL);
  }

  render() {

    let players = this.state.players.map(player => {
      return (
        <Player
          key={player.dateOfBirth}
          {...player}
        />
      );
    });

    return (
      <div>
        <h1>{this.props.location.query.name}</h1>
        <ul>
          {players}
        </ul>
      </div>
    );
  };
};

export default PlayerList;
