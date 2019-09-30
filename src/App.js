import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import {Route, Switch} from 'react-router-dom';



const Hat = () => {
  return <h1>Hats Page</h1>
}

const App = () => {
  return (
      <div>
          <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/shop/hats' component={Hat} />
          </Switch>
      </div>
  );
}
export default App;
