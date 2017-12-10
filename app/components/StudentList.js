import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents } from '../reducers/studentsReducer';

class StudentList extends Component {

  componentDidMount() {
    this.props.getStudents();
  }

  render() {
    return (
      <div>
        <button id="addStudent">
          <NavLink to="/new-student">
          Add New Student
          </NavLink>
        </button>
        <ul>
          {
            this.props.students.map((student) => {
              return (
                <h2 key={student.id} className="list">
                  <NavLink to={`/students/${student.id}`}>
                    {student.name}
                  </NavLink>
                </h2>
              )
            })
          }
        </ul>
      </div>
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
    getStudents: function () {
      dispatch(fetchStudents());
    }
  }
}

const StudentListContainer = connect(mapStateToProps, mapDispatchToProps)(StudentList);

export default StudentListContainer;
