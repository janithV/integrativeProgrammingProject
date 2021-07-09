import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SigninScreen from './Screens/SignInScreen';
import RegisterScreen from './Screens/RegisterScreen';
import sensorChartActions from './actions/sensorChartActions';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-containe">
        <header className="row">

        </header>
        <main>
          <h1>Temperature Sensor</h1>

          <Route path="" component={SigninScreen}></Route>
          <Route path="" component={RegisterScreen}></Route>
          <Route path="" component={sensorChartActions}></Route>


        </main>
        <footer>

        </footer>
      </div>

    </BrowserRouter>
    
  );
}

export default App;
