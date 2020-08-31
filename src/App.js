import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import MonitorPage from './page/MonitorPage';
import DeskPage from './page/DeskPage';
import PrintPage from './page/PrintPage';

function App() {
  return (
    <Router>        
      <Switch>
          <Route path={"/monitor"} component={MonitorPage} />
          <Route exact path={["/", "/desk"]} component={DeskPage} />
          <Route path={"/print"} component={PrintPage} />
      </Switch>
    </Router>
    
  );
}

export default App;
