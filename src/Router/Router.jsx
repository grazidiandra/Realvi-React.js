import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Repositories from '../Components/Repositorie/index';

const Router = () => (
  <BrowserRouter>
    <Switch>  
      <Route exact path='/' component={Repositories}/>
    </Switch>
  </BrowserRouter>
)

export default Router;