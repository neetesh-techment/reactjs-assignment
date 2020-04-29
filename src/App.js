import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
