import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './Components/Home'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  )
}

export default App
