import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import Home from './Home'
import LeagueList from './LeagueList'
import TeamList from './TeamList'
import PlayerList from './PlayerList'
import FixtureList from './FixtureList'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="leagues" component={LeagueList}/>
    <Route path=":league/teams" component={TeamList}/>
    <Route path=":league/fixtures" component={FixtureList}/>
    <Route path=":team/players" component={PlayerList}/>
  </Route>
)
