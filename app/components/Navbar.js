import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


function Navbar (props) {

    return (
        <div className="Navbar">
        <button className="nav-button">
          <NavLink to={`/campuses`}>
            <h2>Campuses</h2>
          </NavLink>
        </button>
        <button className="nav-button">
          <NavLink to={`/students`}>
            <h2>Students</h2>
          </NavLink>
        </button>
          <h1>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
        </div>
    );
}

export default Navbar;

