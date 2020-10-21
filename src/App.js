import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import Login from './Admin/Login'
import AddQuestion from './Admin/Question'
import Index from './User/Index'
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';

function App() {

  return (
  	<BrowserRouter>

   <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <PublicRoute path="/login">
            <Login />
          </PublicRoute>
          <PrivateRoute path="/add-question">
            <AddQuestion />
          </PrivateRoute>
        </Switch>
        </BrowserRouter>
  );
}

export default App;
