
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campusesReducer';
import { postStudent } from '../reducers/studentsReducer';

class NewStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: null,
      campusId: 1
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
    alert('A new student was created.');
    this.props.handleSubmit(event, this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} >
        <div className="form-group">
          <h2> Add a Student </h2>
          <label>First Name:
            <input
              type="text"
              onChange={this.changeFirstName}
              name="firstName"
              placeholder="Enter first name"
              />
          </label>
        </div>
        <div className="form-group">
          <label>Last Name:
            <input
              type="text"
              onChange={this.changeLastName}
              name="lastName"
              placeholder="Enter last name"
              />
          </label>
        </div>
        <div className="form-group">
          <label>Email:
            <input
              type="text"
              onChange={this.changeEmail}
              name="email"
              placeholder="Enter email"
            />
          </label>
        </div>
        <div className="form-group">
          <label>GPA:
            <input
              type="text"
              onChange={this.changeGPA}
              name="gpa"
              placeholder="Enter GPA"
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
          <button type="submit">Add Student</button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (storeState) => {
  return {
    campuses: storeState.campuses.campuses
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCampuses: function () {
      dispatch(fetchCampuses());
    },
    handleSubmit: function (event, student) {
      event.preventDefault();
      dispatch(postStudent(student, ownProps.history));
    }
  }
}


const newStudentContainer = connect(mapStateToProps, mapDispatchToProps)(NewStudent);

export default newStudentContainer;
