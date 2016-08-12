import React from 'react';
import Team from './Team';

class TeamList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTeamId: null
    }
    this.handleTeamClick = this.handleTeamClick.bind(this);

  }
  handleTeamClick(id) {
    if(this.state.selectedTeamId === null){
      this.setState({ selectedTeamId: id });
    } else {
      this.setState({ selectedTeamId: null });
    }
  }

  render() {
    let teams = this.props.teams.map(team => {
      return (
        <Team
          key={team._links.self.href}
          {...team}
          selected={this.state.selectedTeamId}
          onClick={this.handleTeamClick}
        />
      );
    });

    return (
      <ul>
        {teams}
      </ul>
    );
  };
};

export default TeamList;
