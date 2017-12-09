import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


function Navbar (props) {

    return (
        <div className="Navbar">
        <button id="campusesbutton">
          <NavLink to={`/campuses`}>
            <h2>Campuses</h2>
          </NavLink>
        </button>
        <button id="studentsbutton">
          <NavLink to={`/students`}>
            <h2>Students</h2>
          </NavLink>
        </button>
          <h1>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
        </div>
    );
}

export default Navbar;

