import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Custom Component
import Home from './containers/Home';
import BankDetail from './containers/BankDetail';
import Favourite from './containers/Favourite';
import Page404 from './containers/Page404';

//Styles
import './styles/App.scss';

function AppRouter() {
  return (
    <Switch>
      {/* Home */}
      <Route path="(/home|/all-banks|/)/" component={Home} />

      {/* Bank Detail */}
      <Route path='/bank-details/:ifsc' exact component={BankDetail} />
      
      {/* Favourite */}
      <Route path='/favourite-bank/' exact component={Favourite} />

      {/* Page404 */}
      <Route path='' component={Page404} />
    </Switch>
  );
}

export default AppRouter;