import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Repositories from '../Components/Repositories/';
import Commits from '../Components/Commits';

const Router = () => (
  <BrowserRouter>
    <Switch>  
      <Route exact path='/' component={Repositories}/>
      <Route path='/repos/:name' component={Commits}/>
    </Switch>
  </BrowserRouter>
)

export default Router;