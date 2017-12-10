
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campusesReducer';
import { putStudent, fetchStudents } from '../reducers/studentsReducer';

class EditStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: null,
      campusId: null
    };

    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeGPA = this.changeGPA.bind(this);
    this.changeCampus = this.changeCampus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  componentDidMount() {
    this.props.getCampuses();
    this.props.getStudents();
  }

  changeFirstName(event) {
    this.setState({
      firstName: event.target.value
    })
  }

  changeLastName(event) {
    this.setState({
      lastName: event.target.value
    })
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

  changeGPA(event) {
    this.setState({
      gpa: event.target.value
    })
  }

  changeCampus(event) {
    this.setState({
      campusId: event.target.value
    })
  }

  onSubmit(event) {
    console.log(this.props)
    let editedStudent = {
      id: this.props.student.id,
      firstName: (this.state.firstName) ? this.state.firstName : this.props.student.firstName,
      lastName: (this.state.lastName) ? this.state.lastName : this.props.student.lastName,
      email: (this.state.email) ? this.state.email : this.props.student.email,
      gpa: (this.state.gpa) ? this.state.gpa : this.props.student.gpa,
      campusId: (this.state.campusId) ? this.state.campusId : this.props.student.campusId
    }
    console.log("student edited", editedStudent)
    alert('Student was edited.');
    this.props.handleSubmit(event, editedStudent);
  }

  render() {
    if (this.props.student) {
      return (
        <form onSubmit={this.onSubmit} >
          <div className="form-group">
            <h2> Edit a Student </h2>
            <label>First Name:
            <input
                type="text"
                onChange={this.changeFirstName}
                name="firstName"
                placeholder={this.props.student.firstName || 'Enter first name'}
              />
            </label>
          </div>
          <div className="form-group">
            <label>Last Name:
            <input
                type="text"
                onChange={this.changeLastName}
                name="lastName"
                placeholder={this.props.student.lastName || 'Enter last name'}
              />
            </label>
          </div>
          <div className="form-group">
            <label>Email:
            <input
                type="text"
                onChange={this.changeEmail}
                name="email"
                placeholder={this.props.student.email || 'Enter email'}
              />
            </label>
          </div>
          <div className="form-group">
            <label>GPA:
            <input
                type="text"
                onChange={this.changeGPA}
                name="gpa"
                placeholder={this.props.student.gpa || 'Enter GPA'}
              />
            </label>
          </div>
          <div className="form-group">
            <label>Campus:
            <select
                className="form-control"
                name="campus"
                required
                onChange={this.changeCampus}>
                {
                  this.props.campuses.map(campus => (
                    <option key={campus.id} value={campus.id}>{campus.name}</option>
                  ))
                }
              </select>
            </label>
          </div>
          <div className="form-group">
            <button type="submit">Save Student</button>
          </div>
        </form>
      )
    } else {
      return (
        <div />
      );
    }
  }
}

const mapStateToProps = (storeState, ownProps) => {
  console.log(storeState, '______', ownProps);
  return {
    campuses: storeState.campuses,
    student: storeState.students.filter((student) => student.id === parseInt(ownProps.match.params.studentId))[0]
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCampuses: function () {
      dispatch(fetchCampuses());
    },
    getStudents: function () {
      dispatch(fetchStudents());
    },
    handleSubmit: function (event, student) {
      event.preventDefault();
      dispatch(putStudent(student, ownProps.history));
    }
  }
}


const editStudentContainer = connect(mapStateToProps, mapDispatchToProps)(EditStudent);

export default editStudentContainer;
