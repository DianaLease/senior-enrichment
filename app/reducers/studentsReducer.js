import axios from 'axios';

const GET_STUDENTS = 'GET_STUDENTS';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const ADD_STUDENT = 'ADD_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

// ACTIONS

export const getStudents = (students) => {
  return {
    type: GET_STUDENTS,
    students
  }
}

export const updateStudent = (student) => {
  return {
    type: UPDATE_STUDENT,
    student
  };
}

export const addStudent = (student) => {
  return {
    type: ADD_STUDENT,
    student
  };
}

export const deleteStudent = (student) => {
  return {
    type: DELETE_STUDENT,
    student
  };
}



// THUNK

export const fetchStudents = () => {
  return function thunk(dispatch) {
    axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        dispatch(getStudents(students))
      })
  }
}

export const postStudent = (student, history) => {
  return function thunk(dispatch) {
    return axios.post('/api/students', student)
      .then(res => res.data)
      .then(newStudent => {
        dispatch(addStudent(newStudent));
        history.push(`/students/${newStudent.id}`)
    })
  }
}

export const putStudent = (data, history) => {
  return function thunk(dispatch) {
    return axios.put(`/api/students/${data.id}`, data)
      .then(res => res.data)
      .then(student => {
        dispatch(updateStudent(student));
        history.push(`/students/${student.id}`)
    })
  }
}

export const destroyStudent = (studentId) => {
  return function thunk(dispatch) {
    return axios.delete(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(() => {
        dispatch(deleteStudent(studentId));
      })
  }
}

// REDUCER

const initialState = {
  students: [],
  student: {}
}

const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return Object.assign({}, state, { students: action.students })
    case UPDATE_STUDENT:
      return Object.assign({}, state, { student: action.student })
    case ADD_STUDENT:
      return Object.assign({}, state, { student: action.student })
    case DELETE_STUDENT:
      return Object.assign({}, state, {
        students:
          state.students.filter((data) => data.id !== action.student)
      })
    default:
      return state;
  }
};

export default studentsReducer;
