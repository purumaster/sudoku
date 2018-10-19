import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link,BrowserRouter, Route, Switch} from 'react-router-dom'

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
              <h1>Sudoku</h1>
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
