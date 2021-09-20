import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './Main.js';
import Whoweare from './pages/Whoweare.js';
import Services from './pages/Services.js';
import Blog from './pages/Blog.js';
import Contact from './pages/Contact.js';
import Login from './pages/Login';

export default function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/main" component={Main} />
        <Route path="/whoweare" component={Whoweare} />
        <Route path="/services" component={Services} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}