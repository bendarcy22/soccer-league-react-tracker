import React from 'react';
import Fixture from './Fixture';
import apiKey from './apiKey';

class FixtureList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixtures: []
    }
  }

  getLeagueFixtures(url) {
    $.ajax({
      url: url,
      beforeSend: (xhr) => {
        xhr.setRequestHeader('X-Auth-Token', apiKey);
      }
    })
    .done(data => {
      this.setState({ fixtures: data.fixtures })
    });
  };

  componentDidMount() {
    this.getLeagueFixtures(this.props.location.query.leaguesFixturesURL)
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
