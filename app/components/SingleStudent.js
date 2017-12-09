import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';


class SingleStudent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedStudent: {}
    }
  }

  componentDidMount() {
    axios.get(`/api/students/${this.props.match.params.studentId}`)
      .then(res => res.data)
      .then((selectedStudent) => this.setState({ selectedStudent }))
      .catch(err => console.error(err))
  }

  render() {
    console.log(this.state.selectedStudent.campus)
    if (this.state.selectedStudent.campus) {
      return (
        <div className="Name">
          <h2>{this.state.selectedStudent.name}</h2>
          <h3>GPA: {this.state.selectedStudent.gpa}</h3>
          <h3>Email: {this.state.selectedStudent.email}</h3>
          <h3> Campus: {}
          <NavLink to={`/campuses/${this.state.selectedStudent.campus.id}`} >
            {this.state.selectedStudent.campus.name}
          </NavLink>
          </h3>


        </div>
      )
    } else {
      return null;
    }
  }

}


export default SingleStudent;
