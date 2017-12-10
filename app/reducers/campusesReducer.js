import axios from 'axios';

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';

// ACTION CREATORS

export const getCampuses = (campuses) => {
  return {
    type: GET_CAMPUSES,
    campuses
  }
}

export const getCampus = (campus) => {
  return {
    type: GET_CAMPUS,
    campus
  };
}

// THUNK

export const fetchCampuses = () => {
  return function thunk (dispatch) {
    axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
      dispatch(getCampuses(campuses))
    })
  }
}

export const postCampus = (campus, history) => {
  return function thunk(dispatch) {
    return axios.post('/api/campuses', campus)
      .then(res => res.data)
      .then(newCampus => {
        dispatch(getCampus(newCampus));
        history.push(`/campuses/${newCampus.id}`)
      })
  }
}

// REDUCER

const campusesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses
    case GET_CAMPUS:
      return [...state, action.campus]
    default:
      return state;
  }
};

export default campusesReducer;
