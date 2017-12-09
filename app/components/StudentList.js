import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents } from '../reducers/studentsReducer';

class StudentList extends Component {

  componentDidMount() {
    this.props.loadStudents();
  }

  render() {
    return (
      <ul>
        {
          this.props.students.map((student) => {
            return (
              <h2 key={student.id}>
                <NavLink to={`/students/${student.id}`}>
                  {student.name}
                </NavLink>
              </h2>
            )
          })
        }
      </ul>
    )
  }
}


const mapStateToProps = (storeState) => {
  return {
    students: storeState.students
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadStudents: function () {
      dispatch(fetchStudents());
    }
  }
}

const StudentListContainer = connect(mapStateToProps, mapDispatchToProps)(StudentList);

export default StudentListContainer;
