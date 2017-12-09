import axios from 'axios';

const GET_STUDENTS = 'GET_STUDENTS';

// ACTION CREATOR

export const getStudents = (students) => {
  return {
    type: GET_STUDENTS,
    students
  }
}

// THUNK

export const fetchStudents = () => {
  return function (dispatch) {
    axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        dispatch(getStudents(students))
      })
  }
}

// REDUCER

const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students
    default:
      return state;
  }
};

export default studentsReducer;
