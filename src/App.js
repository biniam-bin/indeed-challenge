import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./Home"
import Posts from "./Posts"


function App() {
  return (
    <div className="">
      <Router>
        <Switch>

          <Route exact path="/" component={ Home}/>
          <Route path="/posts" component={ Posts}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
