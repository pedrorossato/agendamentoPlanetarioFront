import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Agendamento from './Pages/Agendamento';
import Ajuda from './Pages/Ajuda';
import Home from './Pages/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/agendamento" component={Agendamento}></Route>
        <Route path="/ajuda" component={Ajuda}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
