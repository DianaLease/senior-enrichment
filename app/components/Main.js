import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Navbar from './Navbar'
import CampusList from './CampusList';
import SingleCampus from './SingleCampus';
import StudentList from './StudentList';
import SingleStudent from './SingleStudent';
import NewStudent from './NewStudent';
import NewCampus from './NewCampus';
import EditStudent from './EditStudent';
import EditCampus from './EditCampus';


const Main = () => {

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/campuses" component={CampusList} />
        <Route exact path="/campuses/:campusId" component={SingleCampus} />
        <Route exact path="/students" component={StudentList} />
        <Route exact path="/students/:studentId" component={SingleStudent} />
        <Route path="/new-student" component={NewStudent} />
        <Route path="/new-campus" component={NewCampus} />
        <Route path="/students/:studentId/edit" component={EditStudent} />
        <Route path="/campuses/:campusId/edit" component={EditCampus} />
      </Switch>
    </div>
  )
}

export default Main;

