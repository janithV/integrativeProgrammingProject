import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from './Screens/SignUp'; 
import LogIn from './Screens/LogIn';
import sensorChartActions from './actions/sensorChartActions';
import AlertList from './Screens/AlertList';

function App() {
  return (
    <BrowserRouter>
        <Switch>
        <Route path="/" exact component={SignUp}></Route>
        <Route path="/login" exact component={LogIn}></Route> 
        <Route path="sensorchart" component={sensorChartActions}></Route>
        <Route path="" component={AlertList}></Route>

        </Switch>

    </BrowserRouter>
    
  );
}

export default App;
