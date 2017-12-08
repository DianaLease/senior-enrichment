import React from 'react';
import { NavLink } from 'react-router-dom';

const CampusList = (props) => {

  return (
    <ul>
      {
        props.campuses.map((campus) => {
          return (
            <li key={campus.id}>
              <NavLink to={`/campuses/${campus.id}`}>
                {campus.name}
              </NavLink>
            </li>
          )
        })
      }
    </ul>
  )
}

export default CampusList;
