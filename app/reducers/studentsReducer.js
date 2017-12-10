import axios from 'axios';

const GET_STUDENTS = 'GET_STUDENTS';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const ADD_STUDENT = 'ADD_STUDENT';

// ACTION CREATOR

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

// export const fetchStudent = (studentId) => {
//   return function thunk(dispatch) {
//     axios.get(`/api/students/${studentId}`)
//       .then(res => res.data)
//       .then(student => {
//         dispatch(updateStudent(student))
//     })
//   }
// }

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
        console.log("existing thunk", student, "hiiiii");
        dispatch(updateStudent(student));
        history.push(`/students/${student.id}`)
    })
  }
}

// REDUCER

const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students
    case UPDATE_STUDENT:
      return state.reduce((accum, curr) => {
        if (curr.id === action.student.id) {
          return accum.concat(action.student)
        } else {
          return accum.concat(curr)
        }
      }, [])
    case ADD_STUDENT:
      return [...state, action.student]
    default:
      return state;
  }
};

export default studentsReducer;
