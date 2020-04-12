import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Components/Home.js'
import Result from './Search/Result'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:pokemon" component={Result} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
