import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './App'
import Home from './Home'
import LeagueList from './LeagueList'
import TeamList from './TeamList'
import PlayerList from './PlayerList'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="leagues" component={LeagueList}/>
    <Route path=":league/teams" component={TeamList}/>
    <Route path=":team/players" component={PlayerList}/>
  </Route>
)
