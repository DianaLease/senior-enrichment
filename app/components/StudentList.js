import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents, destroyStudent } from '../reducers/studentsReducer';

class StudentList extends Component {

  componentDidMount() {
    this.props.getStudents();
  }


  handleDelete(studentId) {
    this.props.deleteStudent(studentId);
  }

  render() {
    return (
      <div>
        <NavLink to="/new-student">
          <button className="addNew">
            <h3>Add New Student</h3>
          </button>
        </NavLink>
        <ul>
          {
            this.props.students.map((student) => {
              return (
                <div key={student.id} className="list">
                  <h2>
                    <NavLink to={`/students/${student.id}`}>
                    {student.name}
                    </NavLink>
                  </h2>
                  <button onClick={ () => this.handleDelete(student.id)}>X</button>
                </div>
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
    students: storeState.students.students
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getStudents: function () {
      dispatch(fetchStudents());
    },
    deleteStudent: function (studentId) {
      dispatch(destroyStudent(studentId))
    }
  }
}

const StudentListContainer = connect(mapStateToProps, mapDispatchToProps)(StudentList);

export default StudentListContainer;
