import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import LeagueList from './LeagueList'
import League from './League'
import TeamList from './TeamList'
import Team from './Team'
import Home from './Home'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/leagues" component={LeagueList}>
      <Route path="/league/teams" component={TeamList}/>
    </Route>
  </Route>
)
