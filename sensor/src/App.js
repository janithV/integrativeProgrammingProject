import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SigninScreen from './Screens/SignInScreen';
import RegisterScreen from './Screens/RegisterScreen';
import sensorChart from './Screens/SensorChart';
import AlertList from './Screens/AlertList';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">

        </header>
        <main>
          <h1>Temperature Sensor</h1>

          <Route path="/" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/sensorchart" component={sensorChart}></Route>
          <Route path="/alert" component={AlertList}></Route>
        </main>
        <footer>

        </footer>
      </div>

    </BrowserRouter>
    
  );
}

export default App;
