import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Commits from '../Components/Commits';
import Repositories from '../Components/Repositories';

const Router = (props) => {
  return (
  <BrowserRouter>
    <Switch>  
      <Route exact path='/' render={() => <Repositories {...props} />} />
      <Route path='/repos/:value/:name' component={Commits}/>
    </Switch>
  </BrowserRouter>
  )
}

export default Router;
