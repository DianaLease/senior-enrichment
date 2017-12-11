import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


function Navbar (props) {

    return (
        <div className="navbar">
          <NavLink to={`/`}>
            <button className="nav-button">
            <h2>Home</h2>
            </button>
          </NavLink>
          <NavLink to={`/campuses`}>
            <button className="nav-button">
              <h2>Campuses</h2>
            </button>
          </NavLink>
          <NavLink to={`/students`}>
            <button className="nav-button">
              <h2>Students</h2>
            </button>
          </NavLink>
          <h1>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
        </div>
    );
}

export default Navbar;

