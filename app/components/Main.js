import React, { Component } from 'react';
import CampusList from './CampusList';
import { NavLink, Route, Switch, BrowserRouter } from 'react-router-dom';


export default class Main extends Component {


  render() {
    console.log(this.state, 'state inside render');
    return (
      <BrowserRouter>
        <div>
          <h2><NavLink to={`/campuses`}>
            Campuses
          </NavLink></h2>
          <h2><NavLink to={`/students`}>
            Students
          </NavLink></h2>
          <div className="col-xs-10">
            <Switch>
              <Route path="/campuses" component={CampusList} />
            </Switch>
            </div>
        </div>
      </BrowserRouter>
    );
  }
}

