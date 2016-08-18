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
    if(this.props.location.query.leaguesFixturesURL) {
      this.setState({ url: this.props.location.query.leaguesFixturesURL });
    };
  }
  componentDidMount() {
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

    return (
      <div>
        <h1>{this.props.location.query.caption}</h1>
        <h3>Fixtures</h3>
        <ul>
          {fixtures}
        </ul>
      </div>
    );
  };
};

export default FixtureList;
