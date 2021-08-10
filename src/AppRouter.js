import React from 'react';
import { Switch, Route } from 'react-router-dom';


//Page404
import Page404 from './containers/Page404';

//Styles
import './styles/App.scss';

function AppRouter() {
  return (
    <Switch>
      {/* Home */}
     

      {/* Page404 */}
      <Route path='' component={Page404} />
    </Switch>
  );
}

export default AppRouter;