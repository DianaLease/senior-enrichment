import React from 'react';
import { NavLink } from 'react-router-dom';

const SingleCampus = (props) => {
  const campus = props.campus;
  return (
    <h2>campus.name</h2>
    {/* <ul>
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
    </ul> */}
  )
}

export default SingleCampus;
