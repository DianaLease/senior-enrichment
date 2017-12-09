import axios from 'axios';

const GET_CAMPUSES = 'GET_CAMPUSES';

// ACTION CREATORS

export const getCampuses = (campuses) => {
  return {
    type: GET_CAMPUSES,
    campuses
  }
}

// THUNK

export const fetchCampuses = () => {
  return function (dispatch) {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
      dispatch(getCampuses(campuses))
    })
  }
}

// REDUCER

const campusesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses
    default:
      return state;
  }
};

export default campusesReducer;
