import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Editor from './Editor';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/:text" component={Editor}/>
            <Route component={Editor}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
