import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Navbar from './Navbar'
import CampusList from './CampusList';
import SingleCampus from './SingleCampus';
import StudentList from './StudentList';
import SingleStudent from './SingleStudent';


const Main = () => {

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/campuses" component={CampusList} />
        <Route path="/campuses/:campusId" component={SingleCampus} />
        <Route exact path="/students" component={StudentList} />
        <Route path="/students/:studentId" component={SingleStudent} />
      </Switch>
    </div>
  )
}

export default Main;

