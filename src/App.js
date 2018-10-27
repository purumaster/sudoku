import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import { List, fromJS } from 'immutable';

import Header from './Header';
import Dashboard from './Dashboard';
import Play from './Play';
import Contact from './Contact';
import NotFound from './NotFound';

class App extends Component {
    render() {
        return (
          <BrowserRouter>
          <div>

              <Header />
              <nav>
              <Switch>
                 <Route exact path = "/" component={Header} />
                 <Route exact path = "/Dashboard" component={Dashboard} />
                 <Route exact path = "/Play" component={Play} />
                 <Route exact path = "/Contact" component={Contact} />
                 {/* 404 */}
                 <Route component={NotFound} />
              </Switch>

              </nav>
          </div>
          </BrowserRouter>

        );
    }
}


export default App;
