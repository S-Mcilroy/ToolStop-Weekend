import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Top40Container from "./Top40Container";


const MainContainer = () => {

    return (
      <Router>
      <Fragment>
      <Switch>
        <Route path="/top-40-sellers" component={Top40Container}/>
      </Switch>
      </Fragment>
      </Router>
    )
}

export default MainContainer;
