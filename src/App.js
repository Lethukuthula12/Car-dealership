import React from 'react';
import './App.css';
import Homepage from "./Components/homepage/Homepage.components";
import {Switch, Route} from "react-router-dom";

const HatsPage = () =>(

  <div>
  <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
