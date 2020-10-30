import "semantic-ui-css/semantic.min.css";
import CV from './CV'
import TopMenu from './TopMenu';
import Home from './Home'
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {

  render () {
    return (
      <Router>
      <div>
        <TopMenu/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/CV">
            <CV/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
      </Router>
    )
  };
}

export default App;
