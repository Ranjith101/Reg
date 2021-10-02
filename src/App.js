import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import ContactUs from './Reg';
import Details from './details';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ContactUs} />
        <Route exact path="/posts" component={Details} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App