import React from 'react';
import Fixture from './Fixture';
import apiKey from './apiKey';

class FixtureList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixtures: [],
      url: 'http://api.football-data.org/v1/fixtures/'
    }
  }
  getLeagueFixtures() {
    $.ajax({
      url: this.state.url,
      beforeSend: (xhr) => {
        xhr.setRequestHeader('X-Auth-Token', apiKey);
      }
    })
    .done(data => {
      this.setState({ fixtures: data.fixtures })
    });
  };

  componentWillMount() {
    if(this.props.location.state) {
      this.setState({ url: this.props.location.state.leaguesFixturesURL });
    };
  };
  componentDidMount() {
    this.getLeagueFixtures();
  };
  componentWillReceiveProps() {
    this.setState({ url:'http://api.football-data.org/v1/fixtures/' });
  };
  componentWillUpdate() {
    this.getLeagueFixtures();
  };

  render() {
    let fixtures = this.state.fixtures.map(fixture => {
      return (
        <Fixture
          key={fixture._links.self.href}
          {...fixture}
        />
      );
    });
    let caption = "All Fixtures"
    if (this.props.location.state) {
      caption = "Fixtures for " + this.props.location.state.caption
    };

    return (
      <div>
        <h3>{caption}</h3>
        <ul>
          {fixtures}
        </ul>
      </div>
    );
  };
};

export default FixtureList;
