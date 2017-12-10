import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


class SingleCampus extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedCampus: {}
    }
  }

  componentDidMount() {
    axios.get(`/api/campuses/${this.props.match.params.campusId}`)
      .then(res => res.data)
      .then((selectedCampus) => this.setState({ selectedCampus }))
      .catch(err => console.error(err))
  }

  render() {
    if (this.state.selectedCampus.students) {
      return (
        <div className="Name">
          <h2>{this.state.selectedCampus.name}</h2>
          <img src={this.state.selectedCampus.imgUrl} />
          <h3>{this.state.selectedCampus.description}</h3>
        <h3>Student Roster</h3>
          <div>
            <ul>
              {this.state.selectedCampus.students.map((student) => {
                return (
                  <li key={student.id}>
                    <NavLink to={`/students/${student.id}`}>
                      { student.name }
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }

}


export default SingleCampus;
