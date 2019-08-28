import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import NewEdit from '~/pages/NewEdit';
import Details from '~/pages/Details';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/newedit" component={NewEdit} isPrivate />
      <Route path="/details" component={Details} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
