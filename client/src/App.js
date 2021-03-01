import React from 'react'
import Registration from './page/Registration/Registration'
import Verification from './page/Verification/Verification'
import Main from './page/Main/Main'
import { Switch, Route } from "react-router-dom";


import './App.scss';

function App() {
  

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Registration}></Route>
        <Route path="/verification" component={Verification}></Route>
        <Route path="/main" component={Main}></Route>
      </Switch>
    </div>
  );
}

export default App;