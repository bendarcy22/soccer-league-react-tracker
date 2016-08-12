import React from 'react';
import Player from './Player';

class PlayerList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let players = this.props.players.map(player => {
      return (
        <Player
          key={player.id}
          {...player}
        />
      );
    });

    return (
      <ul>
        {players}
      </ul>
    );
  };
};

export default PlayerList;
