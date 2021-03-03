import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Agendamento from './Pages/Agendamento';
import Home from './Pages/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/agendamento" component={Agendamento}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
